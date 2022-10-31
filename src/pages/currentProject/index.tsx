import { Layout } from "../../components/layout";
import { ProjectCard } from "../../components/projectCard";
import { projects } from "../../constants/projects";

export const CurrentProject = () => {
  return (
    <Layout hideFooter={true}>
      <div className="flex justify-center pb-8 font-extrabold pt-28 text-2xl">
        Current Projects
      </div>
      <div className="flex">
        <ProjectCard
          name={projects[0].name}
          img={projects[0].img}
          description={projects[0].description}
          github={projects[0].github}
        />
      </div>
    </Layout>
  );
};
