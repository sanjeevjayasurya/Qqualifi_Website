import { Route, Routes } from "react-router-dom";
// import About from "../components/about/About";
import Homepage from "../components/homepage/Homepage";
import About from "../components/about/About";
import { PathNames } from "./PathNames";
import Plans from "../components/plans/Plans";
import Products from "../components/Products/Products";

const RouteController = () => {
  return (
    <Routes>
      <Route path={PathNames.HOME_PAGE} element={<Homepage />} />
      <Route path={PathNames.ABOUT} element={<About />} />
      <Route path={PathNames.PLANS} element={<Plans />} />
      <Route path={PathNames.PRODUCTS} element={<Products />} />
    </Routes>
  );
};
export default RouteController;
