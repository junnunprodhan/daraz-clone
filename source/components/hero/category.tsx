import {childCategories} from "@/source/constant/dummy";
import Subcategory from "./subcategory";

type Props = {
  item: {
    name: string;
    _id: number;
  };
  subcategory: {
    _id: string;
    name: string;
    category: number;
  }[];
};
function Category({ item, subcategory }: Props) {
  return (
    <li className="group/cat overflow-hidden md:flex justify-between items-center text-slate-600 py-[2px] px-2  cursor-pointer hover:bg-slate-200">
      <span className="text-sm leading-none">{item.name}</span>
      <span className="group-hover/cat:visible invisible">
        <i className="bi bi-caret-right"></i>
      </span>
      {/* Sub - Category */}
      <div className="md:absolute relative top-0 left-0 md:left-full hidden group-hover/cat:block z-40 border-x bg-white md:w-[200px] w-full h-full">
        {subcategory.map((item, i) => {
          const childCat = childCategories.filter(
            (x) => x.subcategory === item._id
          );
          return (
            <Subcategory item={item} childCat={childCat} key={i} />
          );
        })}
      </div>
    </li>
  );
}

export default Category;
