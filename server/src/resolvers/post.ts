import { Ctx, Query, Resolver } from 'type-graphql';
import { Post } from '../entities/Post';
import { MyContext } from 'src/types';

@Resolver()
export class PostResolver {
  @Query(() => [Post])
  posts(
    @Ctx() { em }: MyContext //{}にする前はctx
  ): Promise<Post[]> {
    return em.find(Post, {});
  }
}
