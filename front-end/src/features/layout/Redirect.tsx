import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { userProps } from "../auth/auth.selector";
import { authWebRoutes, homeWebRoutes } from "../../routes/webRoutes";

const Redirect = () => {
  const userState = useSelector(userProps);
  return (
    <Navigate
      to={
        userState == undefined
          ? `${authWebRoutes.auth}/${authWebRoutes.login}`
          : homeWebRoutes.home
      }
    />
  );
};
export default Redirect;
