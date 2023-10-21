import Post from "@/domain/models/Post";
import QueryPost from "@/domain/core/posts/QueryPost";
import IQueryPostRepository from "@/domain/ports/IQueryPostRepository";
import QueryService from "../QueryService";
import { postsStub } from "../../../stubs/posts";

class QueryPostService
  extends QueryService<Post>
  implements IQueryPostRepository
{
  public async searchPosts(): Promise<Post[]> {
    return this.data;
  }
}

const queryPost = new QueryPost(new QueryPostService(postsStub));
export default queryPost;
