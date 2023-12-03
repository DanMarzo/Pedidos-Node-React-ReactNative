import { ReactNode, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { userProps } from "../auth/auth.selector";
import { Background } from "../../shared/components/background";

interface Props {
  children: ReactNode;
}

const ValidateToken: React.FC<Props> = ({ children }) => {
  const navigate = useNavigate();
  const userPropsView = useSelector(userProps);

  const [validate, setValidate] = useState(false);
  useEffect(() => {
    if (!userPropsView) {
      localStorage.clear();
      sessionStorage.clear();
      navigate("/auth/login");
    } else {
      setValidate(true);
    }
    return () => {
      setValidate(false);
    };
  }, []);

  return <>{validate ? children : <Background />}</>;
};

export default ValidateToken;
