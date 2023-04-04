import szomszedLogo from "@resources/imgs/szomszed-logo.png";
import { FaHamburger } from "react-icons/fa";
import { IoMdRestaurant } from "react-icons/io";
import useTranslation from "@logic/hooks/useTranslation";
import { useNavigate } from "react-router-dom";
import "@components/Navbar/Navbar.scss";
import { useEffect, useRef, useState } from "react";
import { items } from "@components/Navbar/NavbarMenuOptions";
import { homePath } from "@logic/helpers/routeHelper";
import { NavbarItem } from "@components/Navbar/NavbarComponents/NavbarItem";
import { NavbarMenuGroup } from "@components/Navbar/NavbarComponents/NavbarMenuGroup";

declare const document: Document;

function Navbar(props: {}) {
    const { t } = useTranslation();
    const navigate = useNavigate();
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isHamburgerMenuOpen, setIsHamburgerMenuOpen] = useState(false);
    const navbarRef = useRef(null);

    let prevScrollPos = window.pageYOffset;

    function handleScroll() {
        const currentScrollPos = window.pageYOffset;
        const navbar = document.querySelector(
            ".navbar-container"
        ) as HTMLElement | null;
        if (navbar) {
            if (prevScrollPos > currentScrollPos) {
                navbar.style.top = "0";
            } else {
                navbar.style.top = "-152px";
            }
        }
        prevScrollPos = currentScrollPos;
    }

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
        window.addEventListener("scroll", handleScroll);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
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
