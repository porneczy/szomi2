import {
    aboutPath,
    awardsPath,
    cateringPath,
    contactPath,
    eventsPath,
    homePath,
    menuPath,
} from "@logic/helpers/routeHelper";
import useTranslation from "@logic/hooks/useTranslation";
import { useNavigate } from "react-router-dom";

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
        <nav className="navbar">
            <div className="navbar-logo">logo</div>
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
        </nav>
    );
}

export default Navbar;
