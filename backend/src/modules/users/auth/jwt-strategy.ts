import type { JwtPayload } from '@/typings';
import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy, VerifiedCallback } from 'passport-jwt';
import { UsersService } from '../users.service';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
	constructor(
		private readonly usersService: UsersService,
		configService: ConfigService
	) {
		super({
			jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
			secretOrKey: configService.get<string>('jwtPrivateKey')
		});
	}

	async validate(payload: JwtPayload, done: VerifiedCallback) {
		const user = await this.usersService.getUserByEmail(payload.email);
		if (!user) {
			return done(new HttpException({}, HttpStatus.UNAUTHORIZED), false);
		}

		return done(null, user, payload.iat);
	}
}
