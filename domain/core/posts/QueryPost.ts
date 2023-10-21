import Post from "@/domain/models/Post";
import IQueryPostRepository from "@/domain/core/posts/QueryPost";
import QueryData from "../Query";

class QueryPost extends QueryData<Post> {
  constructor(private postQueryRepository: IQueryPostRepository) {
    super(postQueryRepository);
  }

  public async searchPosts(): Promise<Post[]> {
    return await this.postQueryRepository.searchPosts();
  }
}

export default QueryPost;
