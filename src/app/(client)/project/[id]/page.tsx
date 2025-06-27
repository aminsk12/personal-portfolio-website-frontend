
"use client";
import { useGetProjectByIdQuery } from "@/redux/features/project/projectApi";
import {  Globe } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import { FaGithub } from "react-icons/fa";

const Page = () => {
  const { id } = useParams();
  console.log(id);

  const { data: project } = useGetProjectByIdQuery(id);
  console.log(project, "project");

  if (!project) {
    return (
      <div className="text-center mt-8 text-gray-500">Project not found.</div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto bg-gray-900 rounded-lg shadow-lg overflow-hidden">

        {/* Project Image */}
        <Image
          width={500}
          height={500}
          src={project?.data?.image || "/bd.png"}
          alt="Project Image"
          className="w-full h-64 object-cover"
        />

        {/* Content Section */}
        <div className="p-6">
          {/* Project Description */}
          <h1 className="text-2xl font-bold text-white mb-4">
            {project?.data?.name}
          </h1>

           <p className="text-gray-300 text-sm leading-relaxed mb-4">
            {project?.data?.description}
          </p> 

           <p className="text-gray-400 text-sm leading-relaxed mb-6">
            {project?.data?.details}
          </p> 

          {/* Links Section */}
          <div className="flex items-center space-x-4">
            {project?.data?.liveUrl && (
              <Link href={project?.data?.liveUrl}
              className="flex items-center space-x-2 text-sm text-gray-200 hover:text-blue-500 transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
              >
                
                  <Globe className="w-5 h-5" />
                  <span>Live Site</span>
                
              </Link>
            )}
            {project?.data?.frontendUrl&& (
              <Link href={project?.data?.frontendUrl}
              className="flex items-center space-x-2 text-sm text-gray-200 hover:text-blue-500 transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
              >
                  <FaGithub className="w-5 h-5" />
                  <span>Client Code</span>
                
              </Link>
            )}
            {project?.data?.backendUrl&& (
              <Link href={project.data.backendUrl}
               className="flex items-center space-x-2 text-sm text-gray-200 hover:text-blue-500 transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
              >
                  <FaGithub className="w-5 h-5" />
                  <span>Server Code</span>
                
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;