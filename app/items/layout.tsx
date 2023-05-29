import { PropsWithChildren} from "react";
import { Search } from "./items/search";
import { AddItemButton } from "./AddItemButton";

export default ({ children }: PropsWithChildren) => {
  return (
    <div className="flex flex-col items-stretch p-3">
      <div className="flex flex-col justify-between md:flex-row">
        <div className="md:w-1/3">
          <Search />
        </div>
        <div className="">
          <AddItemButton>Add new item</AddItemButton>
        </div>
      </div>
      {children}
    </div>
  );
};
