import { RouteTypes } from "../interface/routeTypes";
import { CurrentProject } from "../pages/currentProject";
import { Home } from "../pages/home";
import { PreviousProjects } from "../pages/previousProjects";
import { PATHS } from "./paths";

export const routes: RouteTypes[] = [
  {
    path: PATHS.ROOT,
    element: Home,
  },
  {
    path: PATHS.CURRENTPROJECT,
    element: CurrentProject,
  },
  {
    path: PATHS.PREVIOUSPROJECTS,
    element: PreviousProjects,
  },
];
