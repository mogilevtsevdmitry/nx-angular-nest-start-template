import { Module } from '@nestjs/common'
import { GraphQLModule } from '@nestjs/graphql'
import { TypeOrmModule } from '@nestjs/typeorm'
import GraphQLJSON from 'graphql-type-json'

import { environment } from '../environments/environment'
import { UsersModule } from './users/users.module'
import { AppController } from './app.controller'
import { AuthModule } from './auth/auth.module'
import { DateScalar } from './app.resolver'

@Module({
  imports: [
    TypeOrmModule.forRoot({
      ...environment.connection,
    }),
    GraphQLModule.forRoot({
      typePaths: ['./**/*.graphql'],
      context: ({ req }) => ({ req }),
      playground: true,
      debug: true,
      resolvers: [
        { JSON: GraphQLJSON },
      ],
    }),
    UsersModule,
    AuthModule,
  ],
  controllers: [AppController],
  providers: [DateScalar],
})
export class AppModule {
}
