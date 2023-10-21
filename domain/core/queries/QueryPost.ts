import Post from "../../models/Post";
import IQueryPostRepository from "../../ports/queryRepository/IQueryPostRepository";
import QueryData from "./AbstractQuery";

class QueryPost extends QueryData<Post> {
  constructor(private postQueryRepository: IQueryPostRepository) {
    super(postQueryRepository);
  }

  public async searchPosts(): Promise<Post[]> {
    return await this.postQueryRepository.searchPost();
  }
}

export default QueryPost;
