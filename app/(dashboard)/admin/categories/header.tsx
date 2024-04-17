function PageHeader({ title }: { title: string }) {
  return (
    <div className="">
      <div className="flex">
        <h2 className="text-xl">{title}</h2>
      </div>
      <div className="h-[1px] my-2 bg-slate-200 w-full"></div>
    </div>
  );
}

export default PageHeader;
