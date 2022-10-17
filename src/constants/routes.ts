import { FC } from "react";
import { Home } from "../pages/home";
import { PATHS } from "./paths";

interface Route {
  path: string;
  element: FC;
}

export const routes: Route[] = [
  {
    path: PATHS.ROOT,
    element: Home,
  },
];
