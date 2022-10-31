import { NavLink } from "react-router-dom";
import { PATHS } from "../../constants/paths";
import { FC, PropsWithChildren, ReactNode } from "react";

interface LayoutProps extends PropsWithChildren {
  children: ReactNode;
  hideFooter?: boolean;
}

export const Layout: FC<LayoutProps> = ({ children, hideFooter = false }) => {
  return (
    <>
      <nav className="absolute w-full sm:px-4 py-2.5 bg-green-600 rounded-b-md">
        <div className="container flex flex-wrap justify-between text-black items-center mx-auto">
          <NavLink to={PATHS.ROOT} className="flex items-center">
            <img
              src="https://images.vexels.com/media/users/3/140673/isolated/lists/68ff7023a9804bb6e5e12d53f6044c4c-laptop-cartoon-icon.png"
              className="mr-3 h-12 sm:h-12"
              alt="Portfolio Logo"
            />
            <span className="self-center text-2xl font-bold whitespace-nowrap">
              Portfolio
            </span>
          </NavLink>
          <button
            data-collapse-toggle="navbar-default"
            type="button"
            className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
            aria-controls="navbar-default"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-6 h-6"
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clipRule="evenodd"
              ></path>
            </svg>
          </button>
          <div className="hidden w-full md:block md:w-auto" id="navbar-default">
            <ul className="flex flex-col p-4 mt-4 rounded-lg border border-gray-100 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0">
              <li>
                <NavLink
                  to={PATHS.CURRENTPROJECT}
                  className="block py-2 pr-4 pl-3 text-black rounded md:bg-transparent md:text-black md:p-0 font-bold text-lg hover:text-gray-600"
                >
                  Current Project
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={PATHS.PREVIOUSPROJECTS}
                  className="block py-2 pr-4 pl-3 text-black rounded md:bg-transparent md:text-black md:p-0 font-bold text-lg hover:text-gray-600"
                >
                  Previous Projects
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div className="bg-gray-900 pb-20 min-h-screen overflow-x-hidden">
        {children}
      </div>

      {!hideFooter && (
        <footer className="w-screen fixed bottom-0 p-4-lg shadow rounded-t-sm md:flex md:items-center md:justify-between md:p-6 bg-green-600">
          <span className="text-sm text-gray-900 sm:text-center">
            © 2022{" "}
            <NavLink to="#" className="hover:underline">
              Joe's Portfolio™
            </NavLink>
          </span>
        </footer>
      )}
    </>
  );
};
