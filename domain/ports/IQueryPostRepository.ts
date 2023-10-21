import Post from "../models/Post";
import IQueryRepository from "./IQueryRepository";
interface IQueryPostRepository extends IQueryRepository<Post> {
  searchPost: () => Promise<Post[]>;
}

export default IQueryPostRepository;
