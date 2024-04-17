import ChildCategory from "./childCategory";

type Props = {
  item: { _id: string; name: string; category: number };
  childCat: {
    _id: string;
    name: string;
    subcategory: string;
  }[];
};
function Subcategory({ item,  childCat }: Props) {
  return (
    <div className="group/sub md:flex  justify-between items-center text-slate-600 py-[2px] px-2  cursor-pointer hover:bg-slate-200">
      <span className="text-sm leading-none">{item.name}</span>
      <span className="group-hover/cat:visible invisible">
        <i className="bi bi-caret-right"></i>
      </span>
      {/* Sub - Category */}
      <div className="md:absolute top-0 left-full md:ml-0 ml-5 hidden group-hover/sub:block z-50 border-x bg-white w-full md:w-[200px] h-full">
        {childCat.map((item, i) => {
          return <ChildCategory href={"/"} item={item} key={i} />;
        })}
      </div>
    </div>
  );
}

export default Subcategory;
