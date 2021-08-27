import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'

import { UserResolver } from './resolvers/user.resolver'
import { UserService } from './services/user.service'
import { UserEntity } from './entities/user.entity'

@Module({
  imports: [
    TypeOrmModule.forFeature([UserEntity]),
  ],
  providers: [UserService, UserResolver],
  exports: [UserService],
})
export class UsersModule {
}
