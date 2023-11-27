import { RouterProvider } from "react-router-dom";
import routesWeb from "../../routes/routes";
import { LoadingOutlined } from "@ant-design/icons";
import { ThemeProvider } from "styled-components";
import light from "../../shared/styles/theme/light";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const client = new QueryClient({
  defaultOptions: { queries: { refetchOnWindowFocus: false } },
});

const App = () => {
  return (
    <QueryClientProvider client={client}>
      <ThemeProvider theme={light}>
        <RouterProvider
          fallbackElement={<LoadingOutlined />}
          router={routesWeb}
        />
      </ThemeProvider>
    </QueryClientProvider>
  );
};

export default App;
