import { ReactElement } from "react";
import Item from "../../app/posts/Item";
import Post from "../../domain/models/Post";

interface DataListProps<T extends Post> {
  data: T[];
  path?: string;
  classNameContainer?: string;
}

export const List = <T extends Post>({
  data,
  path,
  classNameContainer,
}: DataListProps<T>): ReactElement => {
  return (
    <div className={classNameContainer}>
      {data.length > 0 &&
        data.map(
          (item: T): ReactElement => (
            <Item key={item.id} item={item} path={path ?? ""} />
          )
        )}
    </div>
  );
};
