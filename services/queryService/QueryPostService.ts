import Post from "@/domain/models/Post";
import IQueryPostRepository from "@/domain/ports/queryRepository/IQueryPostRepository";
import QueryService from "./AbstractQueryService";

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

  public async searchPost(): Promise<Post[]> {
    try {
      const response = await this.api.get<Post[]>(this.pathname);
      return response.data;
    } catch (error) {
      throw new Error("Failed to fetch data");
    }
  }
}

export default QueryPostService;
