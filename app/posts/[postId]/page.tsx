"use client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "next/navigation";
import queryPost from "@/services/posts/QueryPostService";

const PostDetails = () => {
  const { postId } = useParams();
  const { data, error, isLoading } = useQuery({
    queryKey: ["post", postId],
    queryFn: () => queryPost.getById(postId as string),
  });

  if (error) {
    throw new Error("Erreur de chargement des données");
  }

  if (isLoading) {
    return <small>Chargement... </small>;
  }

  return (
    <Card className="h-full">
      <CardHeader>
        <Avatar className="mb-4">
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback className="text-xs">CN</AvatarFallback>
        </Avatar>
        <CardTitle>{data?.title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-gray-600 mb-2">{data?.body}</p>
      </CardContent>
    </Card>
  );
};

export default PostDetails;
