import { CardDetailTypes } from "../../interface/cardDetailTypes";

export const ProjectCard = ({
  name,
  img,
  description,
  github,
}: CardDetailTypes) => {
  const handleClick = () => {
    window.open(`${github}`);
  };

  return (
    <div
      onClick={handleClick}
      className="flex flex-col w-64 lg:w-96 border-solid border-black border-2 rounded-xl text-center bg-black text-white m-auto cursor-pointer"
    >
      <div className="p-3 font-extrabold text-lg">{name}</div>
      <img className="!w-44 !h-44 lg:!w-72 m-auto" src={`${img}`} alt="Project" />
      <div className="p-3">{description}</div>
    </div>
  );
};
