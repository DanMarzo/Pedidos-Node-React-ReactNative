import { RouterProvider } from "react-router-dom";
import routesWeb from "../../routes/routes";
import { LoadingOutlined } from "@ant-design/icons";

const App = () => {
  return (
    <RouterProvider fallbackElement={<LoadingOutlined />} router={routesWeb} />
  );
};

export default App;
