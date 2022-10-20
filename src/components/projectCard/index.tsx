import { CardDetailTypes } from "../../interface/cardDetailTypes";

export const ProjectCard = ({ name, img, description }: CardDetailTypes) => {
  return (
    <div className="flex flex-col w-96 border-solid border-black border-2 rounded-xl text-center">
      <div className="py-3">{name}</div>
      <img className="w-72 m-auto" src={`${img}`} alt="Project" />
      <div className="py-2">{description}</div>
    </div>
  );
};
