import { Modal, ModalProps, Spin } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { selectOrderId } from "../dashboard.selector";
import { dashboardAction } from "../dashboard.state";
import { useMutation } from "@tanstack/react-query";
import { obterOrderDetailServices } from "../dashboard.service";
import { useEffect } from "react";

interface Props extends ModalProps {}

const ModalDetalhes: React.FC<Props> = ({ ...props }) => {
  const orderIdStore = useSelector(selectOrderId);

  const dispatch = useDispatch();
  const handleCancelDetails = () =>
    dispatch(dashboardAction.setOrderId(undefined));

  const obterOrderDetails = useMutation({
    mutationFn: (orderId: string) => obterOrderDetailServices(orderId),
  });

  useEffect(() => {
    if (orderIdStore) {
      obterOrderDetails.mutate(orderIdStore);
    }
  }, []);

  return (
    <>
      {orderIdStore && (
        <Modal
          onCancel={handleCancelDetails}
          open={orderIdStore != undefined}
          title="Detalhes"
          {...props}
        >
          <Spin spinning={obterOrderDetails.isPending}>
            {obterOrderDetails.data && <></>}
          </Spin>
        </Modal>
      )}
    </>
  );
};

export default ModalDetalhes;
