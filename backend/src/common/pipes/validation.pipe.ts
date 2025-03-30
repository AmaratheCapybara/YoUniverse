import { getZodSchema } from '@/utils/zod';
import { ArgumentMetadata, BadRequestException, HttpStatus, Injectable, PipeTransform } from '@nestjs/common';
import { ZodError } from 'zod';
import { ZodException } from '@/common/exceptions/zod.exception';
@Injectable()
export class ZodValidationPipe implements PipeTransform {
	transform(value: any, metadata: ArgumentMetadata) {
		const { metatype } = metadata;
		const schema = getZodSchema(metatype);

		if (!schema) {
			return value;
		}

		try {
			const parsedValue = schema.parse(value);

			return parsedValue;
		}
		catch (error: any) {
			if (error instanceof ZodError) {
				throw new ZodException(error, HttpStatus.BAD_REQUEST);
			}
			throw new BadRequestException('Invalid request data');
		}
	}
}
