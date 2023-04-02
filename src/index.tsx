import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { store } from "@logic/store";
import "@src/index.scss";
import Navbar from "@components/Navbar/Navbar";
import Footer from "@components/Footer/Footer";
import { BrowserRouter } from "react-router-dom";
import MainSwicth from "@logic/helpers/routeHelper";

const root = ReactDOM.createRoot(
    document.getElementById("root") as HTMLElement
);
root.render(
    <React.StrictMode>
        <Provider store={store}>
            <BrowserRouter>
                <Navbar />
                <MainSwicth />
                <Footer />
            </BrowserRouter>
        </Provider>
    </React.StrictMode>
);
