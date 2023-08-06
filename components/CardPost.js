import InfoPost from "@components/InfoPost";

export default function CardPost({ thumbnail, ...infoPost }) {
  return (
    // <a className="rounded-md border-black p-3 shadow-lg bg-[#1b1d1b] has-shadow compact boldests">
    <a className="group shadow-orange-500 flex flex-col bg-white border shadow-sm rounded-xl hover:shadow-md transition dark:bg-[#1b1d1b] dark:border-gray-800">
      <img src={thumbnail} alt="" className=" w-full rounded mb-4" />
      <InfoPost {...infoPost} />
    </a>
  );
}
