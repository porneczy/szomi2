import React from "react";
import Icons from "@logic/Icon/Icons";

export type IconName = keyof typeof Icons;

type IconProps = {
    name: IconName;

    className?: string;
    fill?: string;
    onClick?: Function;
    opacity?: number;
    style?: React.CSSProperties;
    title?: string;
};

const Icon = (props: IconProps) => {
    const { name, ...extraProps } = props;

    const element = Icons[name as IconName];

    return React.cloneElement(element, extraProps);
};

export default Icon;
