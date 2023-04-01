import React from "react";
import "./Footer.scss";
import szomszedLogo from "@resources/imgs/szomszed-logo.png";
import { FiFacebook, FiInstagram } from "react-icons/fi";
import useTranslation from "@logic/hooks/useTranslation";

function Footer(props: {}) {
    const { t } = useTranslation();

    const openingHours = [
        {
            className: "bar",
            title: t("footer.openingHours.bar.title"),
            openTime: [
                {
                    day: t("footer.openingHours.bar.openTime.Monday-Thursday"),
                    time: t(
                        "footer.openingHours.bar.openTime.Monday-Thursday-time"
                    ),
                },
                {
                    day: t("footer.openingHours.bar.openTime.Friday-Saturday"),
                    time: t(
                        "footer.openingHours.bar.openTime.Friday-Saturday-time"
                    ),
                },
                {
                    day: t("footer.openingHours.bar.openTime.Sunday"),
                    time: t("footer.openingHours.bar.openTime.Sunday-time"),
                },
            ],
        },
        {
            className: "kitchen",
            title: t("footer.openingHours.kitchen.title"),
            openTime: [
                {
                    day: t(
                        "footer.openingHours.kitchen.openTime.Monday-Thursday"
                    ),
                    time: t(
                        "footer.openingHours.kitchen.openTime.Monday-Thursday-time"
                    ),
                },
                {
                    day: t(
                        "footer.openingHours.kitchen.openTime.Friday-Saturday"
                    ),
                    time: t(
                        "footer.openingHours.kitchen.openTime.Friday-Saturday-time"
                    ),
                },
                {
                    day: t("footer.openingHours.kitchen.openTime.Sunday"),
                    time: t("footer.openingHours.kitchen.openTime.Sunday-time"),
                },
            ],
        },
    ];

    return (
        <div className="footer">
            <div className="footer-container">
                <div className="contact-session">
                    <h1>{t("footer.contact.title")}</h1>
                    <p>{t("footer.contact.info.address")}</p>
                    <p>{t("footer.contact.info.email")}</p>
                </div>

                <div className="logo-session">
                    <img src={szomszedLogo} alt="footer_logo" />
                    <p>"{t("footer.quote")}"</p>
                    <div className="social-links">
                        <a
                            target="_blank"
                            href="https://www.facebook.com/Szomszed.Gyor"
                            rel="noreferrer"
                        >
                            <FiFacebook />
                        </a>
                        <a
                            target="_blank"
                            href="https://www.instagram.com/szomszed_gyor"
                            rel="noreferrer"
                        >
                            <FiInstagram />
                        </a>
                    </div>
                </div>

                <div className="opening-hours-session">
                    <h1>{t("footer.openingHours.title")}</h1>
                    <div className="opens">
                        {openingHours.map((cateringType, index) => {
                            return (
                                <div
                                    className={cateringType.className}
                                    key={index}
                                >
                                    <h2>{cateringType.title}</h2>
                                    {cateringType.openTime.map(
                                        (openTime, index) => {
                                            return (
                                                <div key={index}>
                                                    <p>{openTime.day}</p>
                                                    <p>{openTime.time}</p>
                                                </div>
                                            );
                                        }
                                    )}
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;
