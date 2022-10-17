import { BrowserRouter, Routes, Route } from "react-router-dom";
import { routes } from "./constants/routes";

export const Router = (): JSX.Element => {
  return (
    <BrowserRouter>
      <Routes>
        {routes.map(({ path, element: Component }, index) => (
          <Route key={index} path={path} element={<Component />} />
        ))}
      </Routes>
    </BrowserRouter>
  );
};
