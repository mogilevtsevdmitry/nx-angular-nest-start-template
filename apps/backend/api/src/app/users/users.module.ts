import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'

import { UserResolver } from './user.resolver'
import { UserService } from './user.service'
import { UserEntity } from './user.entity'

@Module({
  imports: [
    TypeOrmModule.forFeature([UserEntity]),
  ],
  providers: [UserService, UserResolver],
  exports: [UserService],
})
export class UsersModule {
}
