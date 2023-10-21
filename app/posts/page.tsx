import { Posts } from "./Posts";
import queryPost from "../../services/posts/QueryPostService";

export default async function PostsPage() {
  const initialData = await queryPost.getAll();
  return <Posts posts={initialData} />;
}
