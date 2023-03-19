import { Route, Routes } from "react-router-dom";
// import About from "../components/about/About";
import Homepage from "../components/homepage/Homepage";
import About from "../components/about/About";
import { PathNames } from "./PathNames";

const RouteController = () => {
  return (
    <Routes>
      <Route path={PathNames.HOME_PAGE} element={<Homepage />} />
      <Route path={PathNames.ABOUT} element={<About />} />
    </Routes>
  );
};
export default RouteController;
