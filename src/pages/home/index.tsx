import { NavLink } from "react-router-dom";
import { Layout } from "../../components/layout";
import { PATHS } from "../../constants/paths";

export const Home = () => {
  return (
    <Layout hideFooter={true} hideNav={true}>
      <div className="flex flex-col pt-52">
        <div className="text-center text-4xl font-extrabold">My Portfolio</div>

        <div className="flex justify-center space-x-10 py-16 font-bold">
        <NavLink to={PATHS.CURRENTPROJECT} className="flex flex-col p-5 border-solid border-black border-2 rounded-xl bg-green-600 hover:scale-105">
            <div>Current Project</div>
          </NavLink>

          <NavLink to={PATHS.PREVIOUSPROJECTS} className="flex flex-col p-5 border-solid border-black border-2 rounded-xl bg-green-600 hover:scale-105">
            <div>Previous Projects</div>
          </NavLink>
        </div>
        <div className="flex justify-center space-x-10">
          <a href="https://github.com/Joeet33?tab=repositories">
          <img className="w-10" src="https://cdn-icons-png.flaticon.com/512/25/25231.png" alt="github" />
          </a>
          <a href="https://www.linkedin.com/in/joe-ellul-turner-683481194/">
          <img className="w-10" src="https://cdn-icons-png.flaticon.com/512/174/174857.png" alt="linkedin" />
          </a>
          <a href="https://twitter.com/joeetweb3">
          <img className="w-10" src="https://www.freepnglogos.com/uploads/twitter-logo-png/twitter-logo-vector-png-clipart-1.png" alt="twitter" />
          </a>
        </div>
      </div>
    </Layout>
  );
};
