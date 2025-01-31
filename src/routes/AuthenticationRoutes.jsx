// project imports
import { lazy } from "react";

import MinimalLayout from "../layout/MinimalLayout";
import NavMotion from "../layout/NavMotion";
import Loadable from "../ui-components/Loadable";

const LoginForm = Loadable(
  lazy(() => import("../views/pages/authentication/loginForm"))
);
const Register = Loadable(
  lazy(() => import("../views/pages/authentication/register"))
);
const NewPassword = Loadable(
  lazy(() => import("../views/pages/authentication/newPassword"))
);
const OTPForm = Loadable(
  lazy(() => import("../views/pages/authentication/resetPassOTP"))
);

// ==============================|| AUTHENTICATION ROUTING ||============================== //

const AuthenticationRoutes = {
  path: "/",
  element: (
    <NavMotion>
      <MinimalLayout />
    </NavMotion>
  ),
  children: [
    {
      path: "/login-form",
      element: <LoginForm />,
    },
    {
      path: "/register",
      element: <Register />,
    },
    {
      path: "/reset-password-otp",
      element: <OTPForm />,
    },
    {
      path: "/new-password",
      element: <NewPassword />,
    },
  ],
};

export default AuthenticationRoutes;
