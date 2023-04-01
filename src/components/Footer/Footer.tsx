import React from "react";
import "./Footer.scss";
import szomszedLogo from "../../resources/imgs/szomszed-logo.png";
import { FiFacebook, FiInstagram } from "react-icons/fi";
import useTranslation from "../../logic/hooks/useTranslation";

function Footer(props: {}) {
    const { t } = useTranslation();
    return (
        <div className="footer">
            <div className="footer-container">
                <div className="contact-session">
                    <h1>{t("footer.contact.title")}</h1>
                    <p>Kisfaludy utca 26. Győr 9021</p>
                    <p>kavebar01@gmail.com</p>
                </div>

                <div className="logo-session">
                    <img src={szomszedLogo} alt="footer_logo" />
                    <p>"Mert Együtt Lenni Jó!"</p>
                    <div className="social-links">
                        <FiFacebook />
                        <FiInstagram />
                    </div>
                </div>

                <div className="opening-hours-session">
                    <h1>nyitvatartás</h1>
                    <div className="opens">
                        <div className="bar">
                            <p>nitdksjfgk</p>
                            <p>nitdksjfgk</p>
                            <p>nitdksjfgk</p>
                        </div>
                        <div className="kitchen">
                            <p>nitdksjfgk</p>
                            <p>nitdksjfgk</p>
                            <p>nitdksjfgk</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;
