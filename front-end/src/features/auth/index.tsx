import { Outlet } from "react-router-dom";
import { Background } from "../../shared/components/background";

const LayoutAuth = () => {
  return (
    <Background>
      <Outlet />
    </Background>
  );
};

export default LayoutAuth;
