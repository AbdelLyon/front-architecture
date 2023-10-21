"use client";
import { ReactElement } from "react";
import Post from "@/domain/models/Post";
import { useQuery } from "@tanstack/react-query";
import { List } from "@/components/shared/List";
import queryPost from "@/services/memory/posts/QueryPostService";

export const Posts = ({ posts }: { posts: Post[] }): ReactElement => {
  const { data, error, isLoading } = useQuery({
    queryKey: ["posts"],
    queryFn: () => queryPost.getAll(),
    initialData: posts,
  });

  if (error) {
    throw new Error("Erreur de chargement des données");
  }

  if (isLoading) {
    return <small>Chargement... </small>;
  }

  return (
    <div>
      <List<Post>
        data={data}
        path="posts"
        classNameContainer={
          "grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3"
        }
      />
    </div>
  );
};
