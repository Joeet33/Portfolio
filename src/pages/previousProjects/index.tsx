import { Layout } from "../../components/layout";
import { ProjectCard } from "../../components/projectCard";
import { projects } from "../../constants/projects";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

export const PreviousProjects = () => {
  return (
    <Layout hideFooter={true}>
      <div className="flex justify-center pb-8 pt-36 font-extrabold text-2xl">
        Previous Projects
      </div>
      <div className="flex">
        <Carousel
          className="m-auto"
          infiniteLoop={true}
          showIndicators={false}
          showStatus={false}
        >
          {projects.map(({ name, img, description, github }, index) => (
            <ProjectCard
              key={index}
              name={name}
              img={img}
              description={description}
              github={github}
            />
          ))}
        </Carousel>
      </div>
    </Layout>
  );
};
