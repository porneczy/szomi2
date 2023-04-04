import {
    aboutPath,
    awardsPath,
    cateringPath,
    contactPath,
    eventsPath,
    galleryPath,
    homePath,
    menuPath,
} from "@logic/helpers/routeHelper";
import szomszedLogo from "@resources/imgs/szomszed-logo.png";
import { RiArrowDropDownLine } from "react-icons/ri";
import { FaHamburger } from "react-icons/fa";
import { IoMdRestaurant } from "react-icons/io";
import useTranslation from "@logic/hooks/useTranslation";
import { useNavigate } from "react-router-dom";
import "@components/Navbar/Navbar.scss";
import { useEffect, useRef, useState } from "react";

declare const document: Document;

const items = (t: Function) => {
    return [
        {
            title: t("navbar.about"),
            submenu: [
                {
                    title: t("navbar.about"),
                    path: aboutPath,
                },
                {
                    title: t("navbar.awards"),
                    path: awardsPath,
                },
                {
                    title: t("navbar.events"),
                    path: eventsPath,
                },
                {
                    title: t("navbar.gallery"),
                    path: galleryPath,
                },
            ],
        },
        {
            title: t("navbar.menu"),
            path: menuPath,
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

const NavbarItem = (props: {
    onClick: Function;
    title: string;
    isSubmenu?: boolean;
}) => {
    return (
        <div
            className={
                props.isSubmenu ? "navbar-menu-group-item" : "navbar-item"
            }
            onClick={() => props.onClick()}
        >
            <span>{props.title}</span>
        </div>
    );
};

const NavbarMenuGroup = (props: {
    onClick: Function;
    submenu: any;
    title: string;
    isMenuOpen: boolean;
}) => {
    const navigate = useNavigate();

    return (
        <div
            className={
                "navbar-item dropdown" + (props.isMenuOpen ? " active" : "")
            }
            onClick={() => props.onClick()}
        >
            <span>{props.title}</span>
            <RiArrowDropDownLine className={props.isMenuOpen ? "active" : ""} />
            <div
                className={
                    "navbar-menu-group" + (props.isMenuOpen ? " active" : "")
                }
            >
                {props.submenu.map((item: any, index: number) => {
                    return (
                        <NavbarItem
                            key={"navbarmenugroupitem" + index.toString()}
                            title={item.title}
                            onClick={() => {
                                navigate(item.path);
                            }}
                            isSubmenu={true}
                        />
                    );
                })}
            </div>
        </div>
    );
};

function Navbar(props: {}) {
    const { t } = useTranslation();
    const navigate = useNavigate();
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isHamburgerMenuOpen, setIsHamburgerMenuOpen] = useState(false);
    const navbarRef = useRef(null);

    const handleClickOutside = (event: MouseEvent) => {
        const dropdownMenu = (document as Document).querySelector(
            ".navbar-item "
        );
        const hamburgerMenu = (document as Document).querySelector(
            ".hamburger-menu"
        );

        if (dropdownMenu?.contains(event.target as HTMLElement) === false) {
            setIsMenuOpen(false);
        }
        if (hamburgerMenu?.contains(event.target as HTMLElement) === false) {
            setIsHamburgerMenuOpen(false);
        }
    };

    useEffect(() => {
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    return (
        <div className="navbar-container" ref={navbarRef}>
            <nav className="navbar">
                <div
                    className="navbar-logo"
                    onClick={() => {
                        navigate(homePath);
                    }}
                >
                    <img src={szomszedLogo} alt="navbar-logo" />
                </div>
                <div
                    className={
                        "navbar-item-container" +
                        (isHamburgerMenuOpen ? " hamburger-menu" : "")
                    }
                >
                    {items(t).map((item: any, index: number) =>
                        item.submenu ? (
                            <NavbarMenuGroup
                                key={"navbaritem" + index.toString()}
                                title={item.title}
                                submenu={item.submenu}
                                onClick={() => setIsMenuOpen(!isMenuOpen)}
                                isMenuOpen={isMenuOpen}
                            />
                        ) : (
                            <NavbarItem
                                key={"navbaritem" + index.toString()}
                                title={item.title}
                                onClick={() => {
                                    navigate(item.path);
                                }}
                            />
                        )
                    )}
                </div>
                <div className="navbar-language-switcher">
                    <p>webshop</p>
                    <p>nyelv</p>
                </div>
                <div className="navbar-hamburger-menu">
                    {isHamburgerMenuOpen ? (
                        <IoMdRestaurant
                            onClick={() =>
                                setIsHamburgerMenuOpen(!isHamburgerMenuOpen)
                            }
                        />
                    ) : (
                        <FaHamburger
                            onClick={() =>
                                setIsHamburgerMenuOpen(!isHamburgerMenuOpen)
                            }
                        />
                    )}
                </div>
            </nav>
        </div>
    );
}

export default Navbar;
