import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/authContext";

const Logout = () => {
  const { dispatch } = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    dispatch({ type: "LOGOUT" });
    navigate("/login");
  }, [dispatch, navigate]);

  return null;
};

export default Logout;
