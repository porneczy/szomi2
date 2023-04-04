export const NavbarItem = (props: {
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
