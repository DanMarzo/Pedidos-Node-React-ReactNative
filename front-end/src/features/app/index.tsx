import { RouterProvider } from "react-router-dom";
import routesWeb from "../../routes/routes";
import { LoadingOutlined } from "@ant-design/icons";
import { ThemeProvider } from "styled-components";
import light from "../../shared/styles/theme/light";

const App = () => {
  return (
    <ThemeProvider theme={light}>
      <RouterProvider
        fallbackElement={<LoadingOutlined />}
        router={routesWeb}
      />
    </ThemeProvider>
  );
};

export default App;
