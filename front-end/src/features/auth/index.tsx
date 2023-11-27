import { Outlet } from "react-router-dom";
import { BackgroundCentered } from "./auth.styled";

const LayoutAuth = () => {
  return (
    <BackgroundCentered>
      <Outlet />
    </BackgroundCentered>
  );
};

export default LayoutAuth;
