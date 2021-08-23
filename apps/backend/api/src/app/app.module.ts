import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { TypeOrmModule } from '@nestjs/typeorm';

import { AppController } from './app.controller';
import { environment } from '../environments/environment';
import { AppResolver } from './app.resolver';
import { UsersModule } from './users/users.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      ...environment.connection
    }),
    GraphQLModule.forRoot({
      typePaths: ['./**/*.graphql'],
      context: ({ req }) => ({ req }),
      playground: true
    }),
    UsersModule
  ],
  controllers: [AppController],
  providers: [AppResolver]
})
export class AppModule {
}
