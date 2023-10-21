import { ReactElement } from "react";
import { DataModel } from "@/core/models/DataModel";
import Item from "../../app/posts/Item";

interface DataListProps<T extends DataModel> {
  data: T[];
  path?: string;
  classNameContainer?: string;
}

export const List = <T extends DataModel>({
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
