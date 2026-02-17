"use client";
import React from "react";
import ArticleCard from "./ArticleCard";
import { getFeaturedArticles } from "@/constant/data";
import { Button, buttonVariants } from "./ui/button";
import Link from "next/link";
import { cn } from "@/lib/utils";

const Article = () => {
  const featured = getFeaturedArticles();
  return (
    <section id="blogs" className="container mx-auto px-4 py-16">
      <div className="text-center mb-12 sm:mb-16 animate-slide-up">
        <h2 className="text-4xl lg:text-6xl font-playfair font-bold text-stone mb-4 sm:mb-6">
          Featured Articles
        </h2>
        <p className="text-lg sm:text-xl text-stone/80 font-poppins">
          We&apos;ve got answers to all your questions for a seamless glamping
          adventure
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {featured.slice(0, 3).map((article) => (
          <ArticleCard key={article.slug} article={article} featured />
        ))}
      </div>
      <div className="w-full flex justify-center items-center mt-16">
        <Link
          href={"/blog"}
          className={cn(
            buttonVariants(),
            "hidden md:flex bg-moss hover:bg-moss/90 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-2xl font-semibold shadow-lg text-sm sm:text-base cursor-pointer",
          )}
        >
          Read More
        </Link>
      </div>
    </section>
  );
};

export default Article;
