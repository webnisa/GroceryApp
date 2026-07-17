import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import AppProvider from "./context/AppContext.jsx";
import { ClerkProvider } from "@clerk/clerk-react";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';

const clerkPubKey = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

createRoot(document.getElementById("root")).render(
  <ClerkProvider publishableKey={clerkPubKey}>
    <BrowserRouter>
      <AppProvider>
        <App />
          <ToastContainer />
      </AppProvider>
    </BrowserRouter>
  </ClerkProvider>
);