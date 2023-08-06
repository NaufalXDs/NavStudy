import { useState, ReactNode } from "react";
import FeaturedPost from "@components/FeaturedPost";
import CardPost from "@components/CardPost";
import Container from "../components/Container";
import Layout from "../components/Layout";
import mockPosts from "../utils/Post.json"
import Head from "next/head";
import FeaturedCount from "../components/FeaturedCount";
import Hero from "../components/Hero";

export default function Home() {
  const [posts, setPosts] = useState(mockPosts);
  return (
    <Layout >
      <Head>
        <title>Home &mdash; NavStudy</title>
      </Head>
      <Hero />
      <Container className="container mx-auto px-10">
        <div class="max-w-[85rem] w-[85%] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
          <div class="max-w-2xl text-center mx-auto mb-10 lg:mb-14">
            <h2 class="text-2xl font-bold md:text-4xl md:leading-tight dark:text-white">Read our latest article</h2>
            <p class="mt-1 text-gray-600 dark:text-gray-400">Lorem ipsum dolor sit amet consectetur adipisicing.</p>
          </div>
          <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10 lg:mb-14">
            {posts.slice(0, 4).map((post) => (
              <div className="">
                <CardPost {...post} />
              </div>
            ))}
          </div>

          <div class="text-center">
            <div class="inline-block bg-white border shadow-sm rounded-full dark:bg-[#1f2937] dark:border-gray-800">
              <div class="py-3 px-4 flex items-center gap-x-2">
                <p class="text-gray-600 dark:text-gray-400">
                  Want to read more?
                </p>
                <a class="inline-flex items-center gap-x-1.5 text-blue-600 decoration-2 hover:underline font-medium" href="/article">
                  Go here
                  <svg class="w-2.5 h-2.5" width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M5.27921 2L10.9257 7.64645C11.1209 7.84171 11.1209 8.15829 10.9257 8.35355L5.27921 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div class="max-w-[85rem] w-[85%] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
          <div class="max-w-2xl text-center mx-auto mb-10 lg:mb-14">
            <h2 class="text-2xl font-bold md:text-4xl md:leading-tight dark:text-white">Read our latest blog</h2>
            <p class="mt-1 text-gray-600 dark:text-gray-400">Lorem ipsum dolor sit amet consectetur adipisicing.</p>
          </div>
          <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10 lg:mb-14">
            {posts.slice(0, 4).map((post) => (
              <div className="">
                <CardPost {...post} />
              </div>
            ))}
          </div>

          <div class="text-center">
            <div class="inline-block bg-white border shadow-sm rounded-full dark:bg-[#1f2937] dark:border-gray-800">
              <div class="py-3 px-4 flex items-center gap-x-2">
                <p class="text-gray-600 dark:text-gray-400">
                  Want to read more?
                </p>
                <a class="inline-flex items-center gap-x-1.5 text-blue-600 decoration-2 hover:underline font-medium" href="/article">
                  Go here
                  <svg class="w-2.5 h-2.5" width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M5.27921 2L10.9257 7.64645C11.1209 7.84171 11.1209 8.15829 10.9257 8.35355L5.27921 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
        <FeaturedCount />
      </Container>
    </Layout>
  );
}
