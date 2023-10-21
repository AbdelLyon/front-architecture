"use client";
import { useEffect, useState } from "react";
import QueryPost from "../domain/core/queries/QueryPost";
import QueryPostService from "../services/queryService/QueryPostService";
import Post from "../domain/models/Post";

export default function Home() {
  const post = new QueryPost(new QueryPostService());

  const [data, setData] = useState<Post[]>([]);

  const fetchData = async () => {
    const data = await post.getAll();
    setData(data);
  };
  useEffect(() => {
    fetchData();
  }, []);
  console.log(data);

  return <div className="container">test</div>;
}
