import { Button, Spin, Tooltip } from "antd";
import { Main } from "../../shared/components/Main";
import { SubTitle, TitleStyled } from "../../shared/components/Typograph";
import { IconReloadOutlined } from "../../shared/components/Icons";
import { useMutation } from "@tanstack/react-query";
import { obterOrdersServices } from "./dashboard.service";
import { useEffect } from "react";
import { Article, Section } from "../../shared/components/Article";

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
          <Button
            onClick={() => obterOrders.mutate()}
            type="text"
            icon={<IconReloadOutlined />}
          />
        </Tooltip>
      </SubTitle>
      <Spin spinning={obterOrders.isPending}>
        <Article>
          {obterOrders.data &&
            obterOrders.data.map((item) => (
              <Section key={item.id}>Mesa: {item.table}</Section>
            ))}
        </Article>
      </Spin>
    </Main>
  );
};

export default Dashboard;
