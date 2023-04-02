import {
    aboutPath,
    awardsPath,
    cateringPath,
    contactPath,
    eventsPath,
    homePath,
    menuPath,
} from "@logic/helpers/routeHelper";
import szomszedLogo from "@resources/imgs/szomszed-logo.png";
import useTranslation from "@logic/hooks/useTranslation";
import { useNavigate } from "react-router-dom";
import "@components/Navbar/Navbar.scss";

const items = (t: Function) => {
    return [
        {
            title: t("navbar.home"),
            path: homePath,
        },
        {
            title: t("navbar.about"),
            path: aboutPath,
        },
        {
            title: t("navbar.awards"),
            path: awardsPath,
        },
        {
            title: t("navbar.menu"),
            path: menuPath,
        },
        {
            title: t("navbar.events"),
            path: eventsPath,
        },
        {
            title: t("navbar.catering"),
            path: cateringPath,
        },
        {
            title: t("navbar.contact"),
            path: contactPath,
        },
    ];
};

const NavbarItem = (props: { onClick: Function; title: string }) => {
    return (
        <div className="navbar-item" onClick={() => props.onClick()}>
            <span>{props.title}</span>
        </div>
    );
};

function Navbar(props: {}) {
    const { t } = useTranslation();
    const navigate = useNavigate();
    return (
        <div className="navbar-container">
            <nav className="navbar">
                <div
                    className="navbar-logo"
                    onClick={() => {
                        navigate(homePath);
                    }}
                >
                    <img src={szomszedLogo} alt="navbar-logo" />
                </div>
                <div className="navbar-item-container">
                    {items(t).map((item: any, index: number) => (
                        <NavbarItem
                            key={"navbaritem" + index.toString()}
                            title={item.title}
                            onClick={() => {
                                navigate(item.path);
                            }}
                        />
                    ))}
                </div>
                <div className="navbar-language-switcher">
                    <p>webshop</p>
                    <p>nyelv</p>
                </div>
            </nav>
        </div>
    );
}

export default Navbar;
