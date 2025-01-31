import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

import PropTypes from "prop-types";

// ==============================|| AUTH GUARD ||============================== //

/**
 * Authentication guard for routes
 * @param {PropTypes.node} children children element/node
 */

const AuthGuard = ({ children }) => {
  const tempAccount = useSelector((state) => state.account);
  const isLoggedIn = tempAccount.isLoggedIn;
  const navigate = useNavigate();

  useEffect(() => {
    if (!isLoggedIn) {
      navigate("login-form", { replace: true });
    }
  }, [isLoggedIn, navigate]);

  return children;
};

AuthGuard.propTypes = {
  children: PropTypes.node,
};

export default AuthGuard;
