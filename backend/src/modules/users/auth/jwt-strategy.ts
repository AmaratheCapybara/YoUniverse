import type { JwtPayload } from '@/typings';
import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
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

	async validate(payload: JwtPayload) {
		const user = await this.usersService.getUserByEmail(payload.email);
		if (!user) {
			throw new HttpException({}, HttpStatus.UNAUTHORIZED);
		}

		return user;
	}
}
