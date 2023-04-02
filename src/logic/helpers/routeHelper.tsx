import React from "react";
import { Route, Routes } from "react-router-dom";

const Home = React.lazy(() => import("@pages/Home"));
const About = React.lazy(() => import("@pages/About"));
const Awards = React.lazy(() => import("@pages/Awards"));
const Menu = React.lazy(() => import("@pages/Menu"));
const Events = React.lazy(() => import("@pages/Events"));
const Catering = React.lazy(() => import("@pages/Catering"));
const Contact = React.lazy(() => import("@pages/Contact"));

export const homePath = "/";
export const aboutPath = "/about";
export const awardsPath = "/awards";
export const menuPath = "/menu";
export const eventsPath = "/events";
export const cateringPath = "/catering";
export const contactPath = "/contact";

export default function MainSwicth() {
    return (
        <React.Suspense fallback={<div>Loading...</div>}>
            <Routes>
                <Route path={homePath} element={<Home />} />
                <Route path={aboutPath} element={<About />} />
                <Route path={awardsPath} element={<Awards />} />
                <Route path={menuPath} element={<Menu />} />
                <Route path={eventsPath} element={<Events />} />
                <Route path={cateringPath} element={<Catering />} />
                <Route path={contactPath} element={<Contact />} />
            </Routes>
        </React.Suspense>
    );
}
