// import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux/es/exports";

import App from "./App.tsx";
import "./styles/reset.css";
import "./styles/index.css";
import { BrowserRouter } from "react-router-dom";
import store, { persistor } from "./redux/store.ts";
import { PersistGate } from "redux-persist/integration/react";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
    // <React.StrictMode>
    <BrowserRouter>
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                <App />
            </PersistGate>
        </Provider>
    </BrowserRouter>
    // </React.StrictMode>
);
