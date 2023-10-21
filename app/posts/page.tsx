import queryPost from "../../services/api/posts/QueryPostService";
import { Posts } from "./Posts";

export default async function PostsPage() {
  const initialData = await queryPost.getAll();
  return <Posts posts={initialData} />;
}
