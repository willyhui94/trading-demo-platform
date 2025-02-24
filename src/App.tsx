import "./App.css";
import { BrowserRouter } from "react-router";
import { store } from "./store";
import { Provider } from "react-redux";
import { DashboardLayout } from "./layout/DashboardLayout.tsx";

export const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <DashboardLayout />
      </BrowserRouter>
    </Provider>
  );
};
