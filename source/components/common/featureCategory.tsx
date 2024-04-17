import Image from "next/image";

type Props = {
  item: { _id: string; name: string; image: string };
};
function FeatureCategory({ item }: Props) {
  return (
    <div className="flex gap-2 border border-slate-200 hover:shadow-lg col-span-1 items-center justify-between flex-col py-5 ">
      <div className="flex items-center justify-center">
        <Image className='w-auto h-auto' src={item.image} alt={item.name} width={50} height={50} />
      </div>
      <h2 className="text-center text-sm text-slate-800">{item.name}</h2>
    </div>
  );
}

export default FeatureCategory;
