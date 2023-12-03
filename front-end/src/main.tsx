import React from "react";
import ReactDOM from "react-dom/client";
import App from "./features/app";
import GlobalStyled from "./shared/styles/GlobalStyled";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import initRedux from "./init-redux";
import { Provider } from "react-redux";
import { persistStore } from "redux-persist";
import { PersistGate } from "redux-persist/integration/react";
import { injectStore } from "./infra/axios";

const store = initRedux();
const persistor = persistStore(store);
injectStore(store);
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <PersistGate persistor={persistor}>
      <Provider store={store}>
        <App />
        <ToastContainer />
        <GlobalStyled />
      </Provider>
    </PersistGate>
  </React.StrictMode>
);
