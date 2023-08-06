import Container from "@components/Container";
import CardPost from "@components/CardPost";
import Layout from "@components/Layout";
import mockPosts from "../utils/Post.json";
import { useState } from "react";
import SectionHeader from "../components/SectionHeader";

export default function Posts() {
  const [posts, setPosts] = useState([]);
  return (
    <Layout>
      <Container>
        <SectionHeader>UI Design</SectionHeader>
        {!posts.length ? (
          <div className="text-center py-20">
            <h2 className="text-6xl">No Result 😢</h2>
            <p className="text-xl mt-4 text-white/60 w-8/12 mx-auto">We couldn't find any post with the keyword "lol".Please try another keyword.</p>
          </div>
        ) : (
          <div className="flex -mx-4 flex-wrap mt-6">
            {posts.map((post) => (
              <div key={post.id} className="md:w-4/12 w-full px-4 py-6">
                <CardPost {...post} />
              </div>
            ))}
          </div>
        )}
      </Container>
    </Layout>
  );
}
