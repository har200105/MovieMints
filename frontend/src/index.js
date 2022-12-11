import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";

import "./index.css";
import ContextProviders from "./context";
import { Provider } from "react-redux";
import store from "./redux/store";

const rootElement = document.getElementById("root");
const root = ReactDOM.createRoot(rootElement);

root.render(
  <BrowserRouter>
    <Provider store={store}>
    <ContextProviders>
      <App />
      </ContextProviders>
      </Provider>
  </BrowserRouter>
);
