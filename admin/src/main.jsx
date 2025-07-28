import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import {AdminContextProvider} from "./contexts/Admin.context.jsx";
import {DoctorContextProvider} from "./contexts/Doctor.context.jsx";
import {AppContextProvider} from "./contexts/App.context.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <AdminContextProvider>
        <DoctorContextProvider>
          <AppContextProvider>
            <App />
          </AppContextProvider>
        </DoctorContextProvider>
      </AdminContextProvider>
    </BrowserRouter>
  </StrictMode>
);
