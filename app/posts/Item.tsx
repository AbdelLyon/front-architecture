import { ReactElement } from "react";
import { DataModel } from "@/core/models/DataModel";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../../components/ui/card";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "../../components/ui/avatar";
import Link from "next/link";

interface PostProps<T> {
  item: T;
  path?: string;
}

const Item = <T extends DataModel>({
  item,
  path,
}: PostProps<T>): ReactElement => {
  return (
    <Link href={`${path}/${item.id}`}>
      <Card className="h-full">
        <CardHeader>
          <Avatar className="mb-4">
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback className="text-xs">CN</AvatarFallback>
          </Avatar>
          <CardTitle>{item?.title}</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-gray-600 mb-2">{item?.body}</p>
        </CardContent>
        <CardFooter>
          <p className="text-gray-600 mb-2">{item?.email}</p>
        </CardFooter>
      </Card>
    </Link>
  );
};

export default Item;
