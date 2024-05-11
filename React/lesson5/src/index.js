import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { WishlistProvider } from "react-use-wishlist";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import i18next from './i18n/i18next'


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <WishlistProvider>
        <App />
      </WishlistProvider>
    </Provider>
  </React.StrictMode>
);
