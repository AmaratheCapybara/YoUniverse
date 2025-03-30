import { CallHandler, ExecutionContext, Injectable, NestInterceptor } from '@nestjs/common';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Reflector } from '@nestjs/core';
import { singletonLogger } from '../services/logger/logger.service';

@Injectable()
export class ZodSchemaInterceptor implements NestInterceptor {
	constructor(private reflector: Reflector) {}

	intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
		try {
			return next.handle().pipe(
				map((data) => {
					if (data?.schema) {
						delete data.schema;
					}

					return data;
				})
			);
		}
		catch (error) {
			singletonLogger.error('Error in ZodSchemaInterceptor:', error);
		}

		return next.handle().pipe(map((data) => data));
	}
}
