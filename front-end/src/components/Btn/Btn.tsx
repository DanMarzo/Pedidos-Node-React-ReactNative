import { BtnLogin } from "@/app/page.styled";
import { LoadingOutlined } from "@ant-design/icons";
import React, { ButtonHTMLAttributes, ReactNode } from "react";

interface BtnProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  loading: boolean;
  children: ReactNode;
}

const BtnWithLoading: React.FC<BtnProps> = ({ children, loading, ...rest }) => {
  return (
    <BtnLogin {...rest}>
      <>{loading ? <LoadingOutlined /> : <>{children}</>}</>
    </BtnLogin>
  );
};

export default BtnWithLoading;
