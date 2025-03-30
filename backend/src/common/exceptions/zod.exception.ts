import { HttpException, HttpStatus } from '@nestjs/common';
import { ZodError } from 'zod';

export class ZodException extends HttpException {
	constructor(
		private readonly zodError: ZodError,
		status: HttpStatus = HttpStatus.BAD_REQUEST
	) {
		super(
			{
				message: 'Validation failed',
				errors: ZodException.getZodErrors(zodError)
			},
			status
		);
	}

	static getZodErrors(zodError: ZodError) {
		return zodError.errors.map((err) => ({
			field: err.path.join('.'),
			message: err.message,
			type: err.code
		}));
	}
}
