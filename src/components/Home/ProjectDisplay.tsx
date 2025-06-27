"use client";

import { Globe } from "lucide-react";
import { Button } from "../ui/button";
import Link from "next/link";
import { BsGithub } from "react-icons/bs";
import Image from "next/image";

const ProjectDisplay = ({ project }: any) => {
  return (
    <div className=" text-black bg-white p-2 rounded-lg shadow-lg  flex flex-col items-center">
      {/* Project Image */}
      <Image
        width={300}
        height={200}
        src={project?.image || "/bNr.JPG"} 
        alt={project?.name || "Project"}
        className="w-full h-48 object-cover rounded-lg mb-4"
      />
      {/* Project Title */}
      <h3 className="text-lg font-bold mb-2">{project?.name || "Untitled Project"}</h3>
      {/* Project Description */}
      {/* * <p className="text-sm  mb-4 text-center"
      dangerouslySetInnerHTML={{ __html: project?.description }}
      />  */}
      {/* Buttons */}
      <div className="flex space-x-6 items-center">
        <div className="flex space-x-2">
          {/* Live Site Link */}
          {project?.liveSite ? (
            <Link href={project.liveSite}>
              <Globe />
            </Link>
          ) : null}
          {/* Client Code Link */}
          {project?.clientCode ? (
            <Link href={project.clientCode}>
              <BsGithub />
            </Link>
          ) : null}
        </div>
        {/* Details Link */}
        {project?._id ? (
          <Link href={`project/${project._id}`}>
            <Button>Details</Button>
          </Link>
        ) : null}
      </div>
    </div>
  );
};

export default ProjectDisplay;
