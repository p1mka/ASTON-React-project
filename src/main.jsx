import App from "./App.jsx";
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { ErrorBoundary } from "./features";
import { Provider } from "react-redux";
import { store } from "./redux";
import "./index.css";
import "./db/db";

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <Provider store={store}>
            <ErrorBoundary>
                <BrowserRouter>
                    <App />
                </BrowserRouter>
            </ErrorBoundary>
        </Provider>
    </React.StrictMode>
);
