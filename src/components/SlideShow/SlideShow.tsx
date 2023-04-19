import img2 from "@resources/imgs/SlideShow/dodo.jpg";
import img3 from "@resources/imgs/SlideShow/felesek.jpg";
import img4 from "@resources/imgs/SlideShow/kaveIntro.JPG";
import img5 from "@resources/imgs/SlideShow/kaveIntroDesktop.jpg";
import img6 from "@resources/imgs/SlideShow/kajaIntro.jpg";
import img7 from "@resources/imgs/SlideShow/kajaIntroDesktop.JPG";
import "./SlideShow.scss";
import { useEffect, useRef, useState } from "react";
import useTranslation from "@logic/hooks/useTranslation";

function SlideShow(props: {}) {
    const { t } = useTranslation();

    let responseIMG1 = img4;
    let responseIMG2 = img6;
    if (window.innerWidth > 1024) {
        responseIMG1 = img5;
        responseIMG2 = img7;
    } else {
        responseIMG1 = img4;
        responseIMG2 = img6;
    }

    const images = [responseIMG1, responseIMG2, img2, img3];
    const content = [
        {
            title: t("slideShowContent.title1"),
            description: t("slideShowContent.description1"),
        },
        {
            title: t("slideShowContent.title2"),
            description: t("slideShowContent.description2"),
        },
        {
            title: t("slideShowContent.title3"),
            description: t("slideShowContent.description3"),
        },
        {
            title: t("slideShowContent.title4"),
            description: t("slideShowContent.description4"),
        },
    ];
    const [currentSlide, setCurrentSlide] = useState(0);
    const [activeTitle, setActiveTitle] = useState(true);
    // useRef does not cause a re-render
    let sliderInterval = useRef<any | null>("");
    let switchImages = () => {
        if (currentSlide < images.length - 1) {
            setCurrentSlide(currentSlide + 1);
        } else {
            setCurrentSlide(0);
        }
    };
    useEffect(() => {
        sliderInterval.current = setInterval(() => {
            switchImages();
            setActiveTitle(true);
        }, 15000);

        const timer = setInterval(() => {
            setActiveTitle(false);
        }, 15000 / 2);

        return () => {
            clearInterval(sliderInterval.current);
            clearInterval(timer);
            setActiveTitle(true);
        };
        // eslint-disable-next-line
    }, [currentSlide]);

    return (
        <>
            <div className="bubblesContainer">
                {images.map((img, index) => {
                    const handleClick = () => {
                        setCurrentSlide(index);
                        setActiveTitle(true);
                    };
                    return (
                        <button
                            key={"slide" + index}
                            className={
                                index === currentSlide
                                    ? "bubbleActive bubble"
                                    : "bubble"
                            }
                            onClick={handleClick}
                            type="submit"
                        >
                            <span className="accessible_elem">
                                Show Slide{index}
                            </span>
                        </button>
                    );
                })}
            </div>
            <div className="imgWrapper">
                {images.map((img, index) => {
                    return (
                        <div key={"homeImg" + index}>
                            <img
                                src={img}
                                alt={"homeImg" + index}
                                className={
                                    index === currentSlide
                                        ? "imageActive homeImage"
                                        : "image"
                                }
                            />
                            <div
                                className={
                                    index === currentSlide
                                        ? "inner current"
                                        : "inner"
                                }
                            >
                                {activeTitle && index === currentSlide ? (
                                    <h1>{content[index].title}</h1>
                                ) : (
                                    <p>{content[index].description}</p>
                                )}
                            </div>
                        </div>
                    );
                })}
            </div>
        </>
    );
}

export default SlideShow;
