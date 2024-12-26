"use client"
import { useGetAllProjectsQuery } from "@/redux/features/project/projectApi";
import ProjectDisplay from "./ProjectDisplay";


const AllProject = () => {
  const { data: projectsData } = useGetAllProjectsQuery("");

  const projects = projectsData?.data;
console.log(projects,"check all");

  return (
    <div className="m-10 space-y-6 flex justify-center">
      
      <div className="">
        <h1 className="text-center text-3xl font-semibold text-white mb-8">
          Projects
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-5xl">
          {projects?.map((project: any) => (
            <ProjectDisplay project={project} key={project?._id} />
          ))}
        </div>
      </div>
      
    </div>
  );
};

export default AllProject;