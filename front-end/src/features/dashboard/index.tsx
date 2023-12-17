import { Button, Spin, Tooltip } from "antd";
import { Main } from "../../shared/components/Main";
import { SubTitle, TitleStyled } from "../../shared/components/Typograph";
import { IconReloadOutlined } from "../../shared/components/Icons";
import { useMutation } from "@tanstack/react-query";
import { obterOrdersServices } from "./dashboard.service";
import { useEffect } from "react";
import { Article, Section } from "../../shared/components/Article";
import { useDispatch } from "react-redux";
import { dashboardAction } from "./dashboard.state";
import ModalDetalhes from "./modalDetails";

const Dashboard = () => {
  const obterOrders = useMutation({ mutationFn: () => obterOrdersServices() });
  const dispatch = useDispatch();

  useEffect(() => {
    obterOrders.mutate();
  }, []);

  const handleSelectOrderId = (orderId: string) =>
    dispatch(dashboardAction.setOrderId(orderId));
  return (
    <>
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
                <Section
                  onClick={() => handleSelectOrderId(item.id)}
                  key={item.id}
                >
                  Mesa: {item.table}
                </Section>
              ))}
          </Article>
        </Spin>
      </Main>
      <ModalDetalhes />
    </>
  );
};

export default Dashboard;
