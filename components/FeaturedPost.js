import InfoPost from "@components/InfoPost";

export default function FeaturedPost() {
  return (
    <article>
      <div className="flex mx-auto items-center flex-wrap py-4 rounded-lg w-full md:w-[60%] has-shadow compact boldest bg-[#1b1d1b] mt-4 ">
        <div className="px-4 lg:w-8/12 md:w-7/12">
          <a href="/posting">
            <img src="/featured-thumbnail.png" className="rounded-xl" />
          </a>
        </div>
        <div className="lg:w-4/12 md:w-5/12 w-full px-4 rounded-lg">
          <InfoPost
            category="UI Design"
            date="September 30, 2022"
            title="Understanding color theory: the color wheel and finding complementary colors"
            shortDescription="Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco cillum dolor. Voluptate exercitation incididunt aliquip deserunt reprehenderit elit laborum."
            authorAvatar="/author-1.png"
            authorName="Leslie Alexander"
            authorJob="UI Designer"
          />
        </div>
      </div>
    </article>
  );
}
