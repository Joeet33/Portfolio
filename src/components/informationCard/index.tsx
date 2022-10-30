import { FC, PropsWithChildren } from "react";

export const InformationCard: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className="flex flex-col w-96 border-solid border-black border-2 rounded-xl bg-black text-white">
      {children}
    </div>
  );
};
