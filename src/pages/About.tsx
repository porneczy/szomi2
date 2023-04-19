import useTranslation from "@logic/hooks/useTranslation";
import { FiFacebook, FiInstagram } from "react-icons/fi";
import "@pages/Pages.scss";
import aboutImg from "../resources/imgs/About/welcome.jpg";

function About(props: {}) {
    const { t } = useTranslation();
    return (
        <div className="page-container">
            <div className="about-container">
                <div className="left-side">
                    <h1>{t("about.title")}</h1>
                    {t("about.text").map((text: any, index: number) => {
                        return <p key={index}>{text.paragraph}</p>;
                    })}
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
                <div className="right-side">
                    <div className="about-img">
                        <img src={aboutImg} alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;
