import {
    aboutPath,
    awardsPath,
    cateringPath,
    contactPath,
    eventsPath,
    galleryPath,
    menuPath,
} from "@logic/helpers/routeHelper";

export const items = (t: Function) => {
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
