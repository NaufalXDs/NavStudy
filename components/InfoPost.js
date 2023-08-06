export default function InfoPost({
    category,
    date,
    title,
    shortDescription,
    authorAvatar,
    authorName,
}) {
  return (
    <>
      {/* <div className="flex items-center text-white/60 space-x-4">
        <div className="uppercase">
            {category}
        </div>
      </div> */}
      {/* <h2 className="text-2xl mt-4 text-white/90 font-bold">{title}</h2>
      <p className="text-[#8a8a8b] mt-5 w-10/12">{shortDescription}</p>
      <div className="flex items-center mt-5">
        <img src={authorAvatar} alt="" height={40} width={40} decoding="async" className="rounded-full object-cover" />
        <div className="ml-4 inline-block">
          <h3>{authorName}</h3>
          <span className="text-[#8a8a8b] text-m">{date}</span>
          <span className="ml-3 mr-3">&bull;</span>
          <span className="uppercase">{category}</span>
        </div>
      </div> */}
      <div class="p-4 md:p-5">
        <h3 class="mt-2 text-lg font-medium text-gray-800 group-hover:text-blue-600 dark:text-gray-300 dark:group-hover:text-white">
          {category}
        </h3>
        <p class="mt-2 text-xs uppercase text-gray-600 dark:text-gray-400">
          {title}
        </p>
      </div>
    </>
  );
}
