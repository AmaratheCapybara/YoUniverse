import {
    ExceptionFilter,
    Catch,
    ArgumentsHost,
    HttpException,
    HttpStatus,
  } from '@nestjs/common';
  import { FastifyReply } from 'fastify';
  
  @Catch()
  export class AllExceptionsFilter implements ExceptionFilter {
    catch(exception: unknown, host: ArgumentsHost) {
      const ctx = host.switchToHttp();
      const response = ctx.getResponse<FastifyReply>();
      const request = ctx.getRequest<Request>();
  
      const isHttp = exception instanceof HttpException;
      const status = isHttp
        ? exception.getStatus()
        : HttpStatus.INTERNAL_SERVER_ERROR;
  
      const message = isHttp
        ? exception.getResponse()
        : (exception as any)?.message || 'Unexpected error occurred';
  
      const errorResponse = {
        status,
        message,
        timestamp: new Date().toISOString(),
        path: request.url,
        stack:
          process.env.NODE_ENV !== 'production' && (exception as any)?.stack
            ? (exception as any).stack
            : undefined,
      };
  
      console.error('🚨 Exception caught:', {
        type: exception?.constructor?.name,
        ...errorResponse,
      });
  
      response.status(status).send(errorResponse);
    }
  }
  