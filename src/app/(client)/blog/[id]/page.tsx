"use client"
import { useGetBlogByIdQuery } from "@/redux/features/blog/blogApi";
import { useParams } from "next/navigation";

const page = () => {
  const { id } = useParams();
  const { data: blog } = useGetBlogByIdQuery(id);

  if (!blog) {
    return (
      <div className="text-center mt-8 text-gray-500">Blog not found.</div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto bg-gray-900 rounded-lg shadow-lg overflow-hidden">
        {/* Blog Image */}
        <div className="relative w-full h-64 sm:h-80 md:h-96 overflow-hidden">
          <img
            src={blog?.data?.image}
            alt="Blog Image"
            className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-300 hover:scale-105"
          />
        </div>

        {/* Content Section */}
        <div className="p-6">
          {/* Blog Name */}
          <h1 className="text-2xl md:text-3xl font-bold text-white mb-4">
            {blog?.data?.name}
          </h1>

          {/* Blog Content */}
          <p
            className="text-gray-300 text-sm md:text-base leading-relaxed"
            dangerouslySetInnerHTML={{ __html: blog?.data?.blog }}
          />
        </div>
      </div>
    </div>
  );
};

export default page;