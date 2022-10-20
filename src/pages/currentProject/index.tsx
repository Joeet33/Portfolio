import { Layout } from "../../components/layout";
import { ProjectCard } from "../../components/projectCard";
import { projects } from "../../constants/projects";

export const CurrentProject = () => {
  return (
    <Layout>
      {projects.map(({ name, img, description }, index) => (
        <ProjectCard
          key={index}
          name={name}
          img={img}
          description={description}
        />
      ))}
    </Layout>
  );
};
