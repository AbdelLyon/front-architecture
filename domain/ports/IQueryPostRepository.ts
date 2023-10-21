import Post from "../models/Post";
import IQueryRepository from "./IQueryRepository";
interface IQueryPostRepository extends IQueryRepository<Post> {
  searchPosts: () => Promise<Post[]>;
}

export default IQueryPostRepository;
