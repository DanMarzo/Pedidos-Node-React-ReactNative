import { LoadingOutlined } from "@ant-design/icons";
import React, { ButtonHTMLAttributes, ReactNode } from "react";
import { BtnLogin } from "./buton.styled";

interface BtnProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  loading: boolean;
  children: ReactNode;
}

const BtnWithLoading: React.FC<BtnProps> = ({ children, loading, ...rest }) => {
  return (
    <BtnLogin {...rest} disabled={loading}>
      <>{loading ? <LoadingOutlined /> : <>{children}</>}</>
    </BtnLogin>
  );
};

export default BtnWithLoading;
