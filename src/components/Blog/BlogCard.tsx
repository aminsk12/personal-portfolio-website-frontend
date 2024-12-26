"use client"
import { Bookmark, Clock, Tag } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
interface  IBlog {
    _id:string;
    image: string;
     name: string;
     blog:string;
   
  }

const BlogCard = ({ blog }: { blog: IBlog }) => {
 
  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden transition hover:shadow-lg">
      {/* Blog Image */}
      <Image
        src={blog.image}
        alt="blogCard"
        className="w-[300px] h-auto"
        layout="responsive"
        width={0}
        height={0}
      />

      {/* Blog Content */}
      <div className="p-6 space-y-4">
        {/* Blog Metadata */}
        <div className="flex flex-wrap gap-4 text-sm text-gray-500">
          <span className="flex items-center gap-2">
            <Clock size={16} className="text-[#7fad39] " />
            {blog.name}
          </span>
          <span className="flex items-center gap-2">
            <Bookmark size={16} className="text-[#7fad39]" />
         
          </span>
          <span className="flex items-center gap-2">
            <Tag size={16} className="text-[#7fad39]" />
          
          </span>
        </div>

        {/* Blog Title */}
        <h2 className="text-2xl font-semibold text-gray-800 hover:text-[#7fad39] transition">
        {blog.name}
        </h2>

        {/* Blog Paragraph */}
        <p className="text-gray-600 line-clamp-3 mb-4" dangerouslySetInnerHTML={{ __html: blog?.blog }} />

        <Link href={`blog/${blog._id}`} className="bg-gray-300 px-2 py-1 rounded mt-3">See Details</Link>
      </div>
    </div>
  );
};

export default BlogCard;
