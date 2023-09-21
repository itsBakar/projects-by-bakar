import Filter from "@/components/Filter";
import Header from "@/components/Header";
import ProjectCard from "@/components/ProjectCard";
import SearchForm from "@/components/SearchForm";
import { getProjects } from "@/sanity/actions";
import React from "react";

export const revalidate = 1;

interface Props {
  searchParams: { [key: string]: string | undefined };
}

const page = async ({ searchParams }: Props) => {
  const projects = await getProjects({
    query: searchParams?.query || "",
    category: searchParams?.category || "",
    page: "1",
  });
  return (
    <main className="flex-center paddings mx-auto w-full max-w-screen-2xl flex-col">
      <section className="nav-padding w-full">
        <div className="flex-center relative min-h-[274px] w-full flex-col rounded-xl bg-banner bg-cover bg-center text-center">
          <h1 className="sm:heading1 heading2 mb-6 text-center text-white">
            Projects
          </h1>
        </div>
        <SearchForm />
      </section>
      <Filter />
      {(searchParams?.query || searchParams?.category) && (
        <section className="flex-center mt-6 w-full flex-col sm:mt-20">
          <Header
            query={searchParams?.query || ""}
            category={searchParams?.category || ""}
          />
          <div className="mt-12 flex w-full flex-wrap justify-center gap-16 sm:justify-start">
            {projects?.length > 0 ? (
              projects.map((project: any) => (
                <ProjectCard
                  key={project._id}
                  title={project.title}
                  id={project._id}
                  image={project.image}
                  githubLink={project.githubLink}
                  demoLink={project.demoLink}
                />
              ))
            ) : (
              <p className="body-regular text-white-400">No Project found</p>
            )}
          </div>
        </section>
      )}
    </main>
  );
};

export default page;
