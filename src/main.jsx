import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./style/index.css";
import router from "./app/router.jsx";
import { RouterProvider } from "react-router-dom";
import store from "./app/store.js";
import { Provider } from "react-redux";
import { AuthGuard } from "./components/shared";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <AuthGuard>
        <RouterProvider router={router} />
      </AuthGuard>
    </Provider>
  </StrictMode>
);
