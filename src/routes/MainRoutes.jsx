import { lazy } from "react";

import AuthGuard from "../utils/route-guard/AuthGuard";
import Loadable from "../ui-components/Loadable";
import MainLayout from "../layout/MainLayout";

const AdminDashboard = Loadable(
  lazy(() => import("../views/pages/dashboard/adminDashboard"))
);
const DataAdmin = Loadable(lazy(() => import("../views/pages/dataAdmin")));
const EBookPage = Loadable(lazy(() => import("../views/pages/ebook")));
const ERaport = Loadable(lazy(() => import("../views/pages/eRaport")));

// ==============================|| MAIN ROUTING ||============================== //

const MainRoutes = {
  path: "/",
  element: (
    <AuthGuard>
      <MainLayout />
    </AuthGuard>
  ),
  children: [
    {
      path: "/admin-dashboard",
      element: <AdminDashboard />,
    },
    {
      path: "/data-admin",
      element: <DataAdmin />,
    },
    {
      path: "/e-book",
      element: <EBookPage />,
    },
    {
      path: "/e-Raport",
      element: <ERaport />,
    },
  ],
};

export default MainRoutes;
