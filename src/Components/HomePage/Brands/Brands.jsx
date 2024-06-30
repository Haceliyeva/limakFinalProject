import React, { useState, useRef } from 'react';
import styles from './Brands.module.scss';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";

const Brands = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const sliderRef = useRef(null);

    const NextArrow = (props) => {
        const { onClick } = props;
        return (
            <div className={`${styles.arrow} ${styles.next}`} onClick={onClick}>
                <IoIosArrowForward />
            </div>
        );
    };

    const PrevArrow = (props) => {
        const { onClick } = props;
        return (
            <div className={`${styles.arrow} ${styles.prev}`} onClick={onClick}>
                <IoIosArrowBack />
            </div>
        );
    };

    const settings = {
        dots: false,
        infinite: true,
        speed: 1000,
        autoplay: true,
        autoplaySpeed: 3000,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        beforeChange: (current, next) => setCurrentSlide(next)
    };

    const handleDotClick = (index) => {
        setCurrentSlide(index);
        sliderRef.current.slickGoTo(index);
    };

    return (
        <div className={styles.brands}>
            <div className={styles.container}>
                <Slider ref={sliderRef} {...settings}>
                    <div className={styles.brand}>
                        <img src="https://limakaz.s3.eu-west-2.amazonaws.com/sliders/image-1714989370.jpg" alt="Slide 1" />
                    </div>
                    <div className={styles.brand}>
                        <img src="https://limakaz.s3.eu-west-2.amazonaws.com/sliders/image-1717507839.jpg" alt="Slide 2" />
                    </div>
                    <div className={styles.brand}>
                        <img src="https://limakaz.s3.eu-west-2.amazonaws.com/sliders/image-1713870477.jpg" alt="Slide 3" />
                    </div>
                    <div className={styles.brand}>
                        <img src="https://limakaz.s3.eu-west-2.amazonaws.com/sliders/image-1715943889.jpg" alt="Slide 4" />
                    </div>
                    <div className={styles.brand}>
                        <img src="https://limakaz.s3.eu-west-2.amazonaws.com/sliders/image-1711087913.jpg" alt="Slide 5" />
                    </div>
                    <div className={styles.brand}>
                        <img src="https://limakaz.s3.eu-west-2.amazonaws.com/sliders/image-1711091680.jpg" alt="Slide 6" />
                    </div>
                    <div className={styles.brand}>
                        <img src="https://limakaz.s3.eu-west-2.amazonaws.com/sliders/image-1711098434.jpg" alt="Slide 7" />
                    </div>
                    <div className={styles.brand}>
                        <img src="https://limakaz.s3.eu-west-2.amazonaws.com/sliders/image-1711084157.jpg" alt="Slide 8" />
                    </div>
                </Slider>
                <div className={styles.customDots}>
                    {[...Array(8)].map((_, index) => (
                        <div
                            key={index}
                            className={`${styles.dot} ${currentSlide === index ? styles.active : ''}`}
                            onClick={() => handleDotClick(index)}
                        ></div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Brands;
