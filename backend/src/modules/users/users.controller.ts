import { Controller, Get, UseGuards, Req, Body, Post, Query, HttpCode } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { ApiBearerAuth, ApiOkResponse, ApiOperation } from '@nestjs/swagger';
import { UsersService } from './users.service';
import { UserTokenResponseDTO } from './dto/user-token-response.dto';
import { UserLoginRequestDTO } from './dto/user-login-request.dto';
import { UserRegisterRequestDTO } from './dto/user-register-request.dto';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}


  @ApiBearerAuth()
	@UseGuards(AuthGuard('jwt'))
  @Get('@me')
  getProtected(@Req() req: any) {
    return req.user;
  }

  @Get()
  @ApiBearerAuth()
	@UseGuards(AuthGuard('jwt'))
  async getAllUsers(@Query('search') search?: string) {
    return this.usersService.findAllUsers(search);
  }

  @Post('register')
	@ApiOperation({ summary: 'Register a new user' })
	@HttpCode(201)
	@ApiOkResponse({ type: UserTokenResponseDTO })
	register(@Body() createUserDto: UserRegisterRequestDTO): Promise<UserTokenResponseDTO> {
		return this.usersService.create(createUserDto);
	}

  @Post('login')
	@ApiOperation({ summary: 'Logs the user in' })
	@HttpCode(200)
	@ApiOkResponse({ type: UserTokenResponseDTO })
	login(@Body() userLoginRequestDto: UserLoginRequestDTO): Promise<UserTokenResponseDTO> {
		return this.usersService.login(userLoginRequestDto);
	}
}
