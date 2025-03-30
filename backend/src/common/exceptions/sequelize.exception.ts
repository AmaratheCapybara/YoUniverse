import { ExceptionFilter, Catch, ArgumentsHost, HttpStatus } from '@nestjs/common';
import { FastifyReply } from 'fastify';
import { ValidationError, UniqueConstraintError } from 'sequelize';
import { LoggerService } from '../services/logger/logger.service';

@Catch(ValidationError, UniqueConstraintError)
export class SequelizeExceptionFilter implements ExceptionFilter {
	constructor(private readonly loggerService: LoggerService) {}

	catch(exception: ValidationError | UniqueConstraintError, host: ArgumentsHost) {
		const ctx = host.switchToHttp();
		const response = ctx.getResponse<FastifyReply>();

		if (exception instanceof Error) {
			this.loggerService.error(exception.message, exception.stack);
		}

		if (exception instanceof UniqueConstraintError) {
			const errorMessage = exception.errors[0]?.message || 'Unique constraint error';
			const field = exception.errors[0]?.path || 'unknown field';

			response.status(HttpStatus.CONFLICT).send({
				statusCode: HttpStatus.CONFLICT,
				message: `Conflict: ${field} already exists`,
				details: errorMessage
			});
		}
		else if (exception instanceof ValidationError) {
			const errors = exception.errors.map((err) => ({
				field: err.path,
				message: err.message
			}));

			response.status(HttpStatus.BAD_REQUEST).send({
				statusCode: HttpStatus.BAD_REQUEST,
				message: 'Validation failed due to Sequelize constraints',
				errors
			});
		}
	}
}
