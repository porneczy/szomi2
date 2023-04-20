import "@pages/Pages.scss";
import { FiFacebook, FiInstagram } from "react-icons/fi";
import awardsImg from "../resources/imgs/Awards/team1.jpg";

function Awards(props: {}) {
    return (
        <div className="page-container">
            <div className="awards-container">
                <div className="awards-info-container">
                    <div className="left-side">
                        <h1>Eredményeink</h1>
                        <p>
                            Egy kis rövid összefoglalója és egyben öröm
                            felsorolása, azoknak a munkával és gyakorlással
                            töltött napoknak, heteknek, hónapoknak, amik
                            lehetővé tették, hogy ilyen szép számmal érjünk el
                            helyezéseket különböző versenyeken!
                        </p>
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
                        <div className="awards-img">
                            <img src={awardsImg} alt="" />
                        </div>
                    </div>
                </div>
                <div className="awards-list-container"></div>
            </div>
        </div>
    );
}

export default Awards;
