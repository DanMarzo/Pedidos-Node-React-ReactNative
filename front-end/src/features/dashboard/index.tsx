import { Button, Tooltip } from "antd";
import { Main } from "../../shared/components/Main";
import { SubTitle, TitleStyled } from "../../shared/components/Typograph";
import { IconReloadOutlined } from "../../shared/components/Icons";
import { useMutation } from "@tanstack/react-query";
import { obterOrdersServices } from "./dashboard.service";
import { useEffect } from "react";

const Dashboard = () => {
  const obterOrders = useMutation({ mutationFn: () => obterOrdersServices() });
  useEffect(() => {
    obterOrders.mutate();
  }, []);

  return (
    <Main>
      <TitleStyled>Painel</TitleStyled>
      <SubTitle>
        Últimos pedidos{" "}
        <Tooltip title="Recarregar">
          <Button type="text" icon={<IconReloadOutlined />} />
          <article>
            <section></section>
          </article>
        </Tooltip>
      </SubTitle>
    </Main>
  );
};

export default Dashboard;
