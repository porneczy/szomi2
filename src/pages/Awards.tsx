import "@pages/Pages.scss";
import { FiFacebook, FiInstagram } from "react-icons/fi";
import awardsImg from "@resources/imgs/Awards/team1.jpg";
import { awardsList, topAwardsList } from "@resources/data/awards";
import Icon from "@logic/Icon/Icon";

function Awards(props: {}) {
    const AwardCard = ({
        imgUrl,
        title,
        year,
        subtitle,
    }: {
        imgUrl: any;
        title: string;
        year: number;
        subtitle?: string;
    }) => {
        return (
            <div className="awards-card">
                <Icon name={imgUrl} />
                <div className="card-info">
                    <p className="title">{title}</p>
                    <p className="subtitle">
                        {year} {subtitle}
                    </p>
                </div>
            </div>
        );
    };

    awardsList.sort((a, b) => b.year - a.year);
    topAwardsList.sort((a, b) => b.year - a.year);

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
                <div className="awards-list-container">
                    <div className="list">
                        {awardsList.map((award, index) => (
                            <AwardCard {...award} key={index} />
                        ))}
                    </div>
                    <div className="list">
                        {topAwardsList.map((award, index) => (
                            <AwardCard {...award} key={index} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Awards;
