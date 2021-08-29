import { Args, ID, Query, Resolver } from '@nestjs/graphql'
import { UseGuards } from '@nestjs/common'

import { GqlAuthGuard } from '../auth/gql-auth.guard'
import { UserService } from './user.service'
import { UserEntity } from './user.entity'

@Resolver('User')
export class UserResolver {
  constructor(
    private readonly userService: UserService,
  ) {
  }

  @UseGuards(GqlAuthGuard)
  @Query('user')
  async user(@Args('id', { type: () => ID }) id: number): Promise<UserEntity> {
    return this.userService.getById(id)
  }
}
