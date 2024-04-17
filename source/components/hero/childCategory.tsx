import { Url } from "next/dist/shared/lib/router/router";
import Link from "next/link";

type Props = {
  item: { _id: string; name: string; subcategory: string };
  href: Url;
};
function ChildCategory({ href, item }: Props) {
  return (
    <Link
      href={href}
      className="group/child-active flex justify-between items-center text-slate-600 py-[2px] px-2  cursor-pointer hover:bg-slate-200"
    >
      <span className="text-sm leading-none">{item.name}</span>
      <span className="group-hover/child-active:visible invisible">
        <i className="bi bi-caret-right"></i>
      </span>
    </Link>
  );
}

export default ChildCategory;
