import { lazy } from "react";
import { useRoutes } from "react-router-dom";

import AuthenticationRoutes from "./AuthenticationRoutes";
import MainRoutes from "./MainRoutes";
import Loadable from "../ui-components/Loadable";

const OpeningPage = Loadable(lazy(() => import("../views/pages/openingPage")));

// ==============================|| ROUTING RENDER ||============================== //

export default function ThemeRoutes() {
  return useRoutes([
    { path: "/", element: <OpeningPage /> },
    AuthenticationRoutes,
    MainRoutes,
  ]);
}
