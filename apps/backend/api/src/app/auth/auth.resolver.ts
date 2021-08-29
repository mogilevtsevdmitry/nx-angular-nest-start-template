import { Mutation, Query, Resolver } from '@nestjs/graphql'
import { ISignAuthPayload, ISignAuthResponse } from '@mda/shared/data-access/interfaces'

import { UserEntity } from '../users/user.entity'
import { SignIn } from './sign-in.decorator'
import { AuthService } from './auth.service'

@Resolver('Auth')
export class AuthResolver {

  constructor(
    private readonly authService: AuthService,
  ) {
  }

  @Query('login')
  async login(@SignIn() payload: ISignAuthPayload): Promise<ISignAuthResponse> {
    return await this.authService.login(payload)
  }

  @Query('logout')
  async logout(): Promise<boolean> {
    return true
  }

  @Mutation('register')
  async register(@SignIn() user: Partial<UserEntity>): Promise<UserEntity> {
    return await this.authService.register(user)
  }

}
