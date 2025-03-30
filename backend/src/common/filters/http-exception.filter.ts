import { ExceptionFilter, Catch, ArgumentsHost, HttpException, HttpStatus } from '@nestjs/common';
import { FastifyReply } from 'fastify';

@Catch(HttpException)
export class HttpExceptionFilter implements ExceptionFilter {
	catch(exception: HttpException, host: ArgumentsHost) {
		const ctx = host.switchToHttp();
		const res = ctx.getResponse<FastifyReply>();
		const request = ctx.getRequest<Request>();
		const message = exception.getResponse();
		const status = exception instanceof HttpException ? exception.getStatus() : HttpStatus.INTERNAL_SERVER_ERROR;

		const errorResponse = {
			name: exception.name,
			status,
			message,
			timestamp: new Date().toISOString(),
			path: request.url
		};

		res.status(status).send(errorResponse);
	}
}
