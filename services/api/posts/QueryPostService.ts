import Post from "@/domain/models/Post";
import QueryPost from "@/domain/core/posts/QueryPost";
import IQueryPostRepository from "@/domain/ports/IQueryPostRepository";
import QueryService from "../QueryService";

// Constantes d'URL
const API_URL = "https://jsonplaceholder.typicode.com";
const API_PATH = "/posts";

class QueryPostService
  extends QueryService<Post>
  implements IQueryPostRepository
{
  constructor() {
    super(API_URL, API_PATH);
  }

  public async searchPosts(): Promise<Post[]> {
    try {
      const response = await this.api.get<Post[]>(this.pathname);
      return response.data;
    } catch (error: any) {
      this.handleError(error);
      throw error;
    }
  }
}

const queryPost = new QueryPost(new QueryPostService());
export default queryPost;
