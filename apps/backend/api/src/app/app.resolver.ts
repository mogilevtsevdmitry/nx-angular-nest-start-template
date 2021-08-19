import { Query, Resolver } from '@nestjs/graphql';

@Resolver()
export class AppResolver {

  @Query()
  async test() {
    return 'graphql resolvers method'
  }
}
