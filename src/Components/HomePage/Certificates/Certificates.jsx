import React, { useEffect, useState } from 'react';
import styles from './Certificates.module.scss';

const photos = [
    {
        url: 'https://limakaz.s3.eu-west-2.amazonaws.com/sliders/1678780898.png',
        link: 'https://limaklogistic.com/tr'
    },
    {
        url: 'https://limakaz.s3.eu-west-2.amazonaws.com/sliders/1678780922.png',
        link: 'https://www.turkishairlines.com/'
    },
    {
        url: 'https://limakaz.s3.eu-west-2.amazonaws.com/sliders/1678780947.png',
        link: 'https://www.silkwaywest.com/'
    },
    {
        url: 'https://limakaz.s3.eu-west-2.amazonaws.com/sliders/1678795184.png',
        link: 'https://apagroup.az/az'
    },
    {
        url: 'https://limakaz.s3.eu-west-2.amazonaws.com/sliders/1678795449.png',
        link: 'https://norma.az/'
    },
    {
        url: 'https://limakaz.s3.eu-west-2.amazonaws.com/sliders/1678795496.png',
        link: 'https://vesti.az/'
    },
    {
        url: 'https://limakaz.s3.eu-west-2.amazonaws.com/sliders/1678795545.png',
        link: 'https://lent.az/'
    },
    {
        url: 'https://limakaz.s3.eu-west-2.amazonaws.com/sliders/1678795621.png',
        link: 'https://www.kapitalbank.az/en'
    },
    {
        url: 'https://limakaz.s3.eu-west-2.amazonaws.com/sliders/1681299204.png',
        link: 'https://pintravel.az/'
    },
    {
        url: 'https://limakaz.s3.eu-west-2.amazonaws.com/sliders/1678780850.png',
        link: 'https://www.iata.org/'
    },
    {
        url: 'https://limakaz.s3.eu-west-2.amazonaws.com/sliders/1678780875.png',
        link: 'https://limak.az/Fiata'
    }
];

const PhotoSlider = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % photos.length);
        }, 3000);

        return () => clearInterval(interval);
    }, []);

    const handleClick = (url) => {
        window.open(url, '_blank');
    };

    return (
        <div className={styles.certificates}>
            <div className={styles.container}>
                <h2>SERTİFİKATLARIMIZ VƏ TƏRƏFDAŞLARIMIZ</h2>
                <div className={styles.photoSlider}>
                    {photos.map((photo, index) => (
                        <div key={index} className={styles.photoItem} onClick={() => handleClick(photo.link)}>
                            <img src={photo.url} alt={`slide-${index}`} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default PhotoSlider;
