import { useNavigate } from "react-router";
import { NavbarItem } from "./NavbarItem";
import { RiArrowDropDownLine } from "react-icons/ri";

export const NavbarMenuGroup = (props: {
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
