import { ZodSchema as Z, z, ZodError, ZodNumber, ZodOptional, ZodTypeAny } from 'zod';
import { ZOD_SCHEMA_KEY } from './Constants';
import { generateSchema } from '@anatine/zod-openapi';
import { SchemaObject } from 'ajv';
import { SetMetadata } from '@nestjs/common';

/**
 * Decorator to attach a Zod schema to a route handler.
 */
export function UseZodSchema(schema: ZodTypeAny) {
	return SetMetadata('zodSchema', schema);
}

/**
 * Defines a schema to be used in the global zod validation pipe
 */
export function ZodSchema(schema: Z): ClassDecorator {
	return (target) => {
		Reflect.defineMetadata(ZOD_SCHEMA_KEY, schema, target);
	};
}

/**
 * Retrieves a schema with @ZodSchema attached to it
 */
export function getZodSchema(target: any): Z | undefined {
	return Reflect.getMetadata(ZOD_SCHEMA_KEY, target);
}

// export const schemaValidator = <T>() => <S extends z.ZodType<T>>(schema: S) => schema;
export const schemaValidator =
	<T>() =>
	<S extends z.ZodType<T>>(schema: S) =>
			schema;

/**
 * @see {@link https://github.com/colinhacks/zod/discussions/330}
 * @param schema
 * @returns
 */
function IntegerString<schema extends ZodNumber | ZodOptional<ZodNumber>>(schema: schema) {
	return z.preprocess((value) => (typeof value === 'string' ? parseInt(value, 10) : typeof value === 'number' ? value : undefined), schema) as z.ZodEffects<
		z.ZodTypeAny,
		number,
		number
	>;
}
export interface FieldDefinition {
	key: string;
	type: 'string' | 'number' | 'boolean';
}

const zodTypeMap: Record<FieldDefinition['type'], ZodTypeAny> = {
	string: z.string(),
	number: z.number(),
	'boolean': z.boolean()
};

export function createStrictSchema(fields: FieldDefinition[]) {
	const schema = fields.reduce(
		(acc, field) => {
			acc[field.key] = zodTypeMap[field.type];

			return acc;
		},
		{} as Record<string, ZodTypeAny>
	);

	return z
		.object(schema)
		.strict()
		.superRefine((data, ctx) => {
			fields.forEach(({ key, type }) => {
				if (data[key] && typeof data[key] !== type) {
					ctx.addIssue({
						code: z.ZodIssueCode.custom,
						message: `Invalid ${key}: received ${typeof data[key]}, expected ${type}`,
						path: [key]
					});
				}
			});

			const validKeys = fields.map((field) => field.key);
			Object.keys(data).forEach((key) => {
				if (!validKeys.includes(key)) {
					ctx.addIssue({
						code: z.ZodIssueCode.custom,
						message: `Unexpected field "${key}" is not allowed, expected only ${validKeys.join(', ')}`,
						path: [key]
					});
				}
			});

			validKeys.forEach((key) => {
				if (data[key] === undefined) {
					ctx.addIssue({
						code: z.ZodIssueCode.custom,
						message: `Field "${key}" is required but was not provided.`,
						path: [key]
					});
				}
			});
		});
}

export const BaseSequelizeModel = z
	.object({
		id: IntegerString(z.number().min(1).nonnegative()),
		createdAt: z.date(),
		updatedAt: z.date()
	})
	.strict()
	.strip();

export const MultipartFileSchema = z.object({
	fieldname: z.string(),
	originalname: z.string(),
	encoding: z.string(),
	mimetype: z.string(),
	size: z.number(),
	buffer: z.instanceof(Buffer).optional(),
	path: z.string().optional()
});

/**
 * Generates an OpenAPI-compatible schema wrapped in a type compatible with @nestjs/swagger.
 *
 * @param schema - The Zod schema to convert
 * @returns A schema object compatible with @nestjs/swagger
 */
export function generateOpenAPISchema<T extends ZodTypeAny>(schema: T): SchemaObject & Partial<{ $ref: string }> {
	return generateSchema(schema) as SchemaObject & Partial<{ $ref: string }>;
}

import { ZodException } from '@/common/exceptions/zod.exception';

/**
 * Utility function to sanitize an input object by removing any keys not defined in the Zod schema.
 * Throws a ZodException if validation fails.
 *
 * @param schema - The Zod schema to use as a reference for allowed keys.
 * @param data - The input data object to sanitize.
 * @returns A sanitized object with only the schema-defined keys.
 */
export function sanitizeWithSchema<T extends ZodTypeAny>(schema: T, data: unknown): z.infer<T> {
	try {
		const parsedData = schema.parse(data);

		const validKeys = Object.keys((schema as any).shape);

		return Object.fromEntries(Object.entries(parsedData).filter(([key]) => validKeys.includes(key))) as z.infer<T>;
	}
	catch (error) {
		if (error instanceof ZodError) {
			throw new ZodException(error);
		}
		throw error;
	}
}
