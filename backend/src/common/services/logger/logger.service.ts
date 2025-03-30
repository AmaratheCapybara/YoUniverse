import { Injectable, ConsoleLogger, Scope } from '@nestjs/common';
import L from '@kudos-league/logger';
import stringify from 'fast-safe-stringify';

@Injectable({ scope: Scope.TRANSIENT })
export class LoggerService extends ConsoleLogger {
	private logger = new L({
		webhookURL: process.env.DISCORD_WEBHOOK_URL,
		content: process.env.DISCORD_BOT_OWNERS?.split(',')
			.map((o: string) => `<@${o}>`)
			.join(' '),
		logLevel: process.env.LOG_LEVEL ?? 'trace'
	});

	constructor(context?: string) {
		super(context || LoggerService.getCallingClassName());
	}

	private safeLog(message: any, ...optionalParams: any[]) {
		const safeMessage = stringify(message);
		const safeParams = optionalParams.map((param) => stringify(param));

		return [safeMessage, ...safeParams];
	}

	log(message: any, ...optionalParams: any[]) {
		return this.logger.info(...this.safeLog(message, ...optionalParams));
	}

	info(message: any, ...optionalParams: any[]) {
		return this.log(message, ...optionalParams);
	}

	fatal(message: any, ...optionalParams: any[]) {
		return this.logger.fatal(...this.safeLog(message, ...optionalParams));
	}

	error(message: any, ...optionalParams: any[]) {
		return this.logger.error(...this.safeLog(message, ...optionalParams));
	}

	warn(message: any, ...optionalParams: any[]) {
		return this.logger.warn(...this.safeLog(message, ...optionalParams));
	}

	trace(message: any, ...optionalParams: any[]) {
		return this.logger.trace(...this.safeLog(message, ...optionalParams));
	}

	child() {
		return this;
	}

	debug(message: string, ...optionalParams: any[]): void;
	debug(obj: unknown, message?: string, ...optionalParams: any[]): void;
	debug(messageOrObj: any, ...optionalParams: any[]): void {
		if (typeof messageOrObj === 'string') {
			return this.logger.debug(...this.safeLog(messageOrObj, ...optionalParams));
		}
		else {
			return this.logger.debug(...this.safeLog(messageOrObj, optionalParams[0], ...optionalParams.slice(1)));
		}
	}

	/**
	 * Retrieve the name of the calling class dynamically using the stack trace.
	 */
	protected static getCallingClassName(): string {
		const error = new Error();
		const stack = error.stack?.split('\n') ?? [];
		const callerLine = stack[3];
		const match = callerLine?.match(/at (\S+)/);

		return match ? match[1] : 'UnknownContext';
	}
}

export const singletonLogger = new ConsoleLogger('Global');
