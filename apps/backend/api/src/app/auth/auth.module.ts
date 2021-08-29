import { PassportModule } from '@nestjs/passport'
import { Module } from '@nestjs/common'
import { JwtModule } from '@nestjs/jwt'

import { environment } from '../../environments/environment'
import { UsersModule } from '../users/users.module'
import { GqlAuthGuard } from './gql-auth.guard'
import { AuthResolver } from './auth.resolver'
import { AuthService } from './auth.service'
import { JwtStrategy } from './jwt.strategy'


@Module({
  imports: [
    UsersModule, PassportModule,
    JwtModule.register({
      privateKey: environment.jwt.secret,
      signOptions: {
        expiresIn: environment.jwt.expiresIn,
      },
    }),
  ],
  providers: [AuthService, AuthResolver, JwtStrategy, GqlAuthGuard],
  exports: [AuthService],
})
export class AuthModule {
}
