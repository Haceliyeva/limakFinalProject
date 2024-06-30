import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styles from './News.module.scss'; 

const News = () => {

    const navigation = useNavigate()

    const newsList = [
        {
            id: 1,
            title: "Xarici onlayn saytla...",
            imageUrl: "https://limakaz.s3.eu-west-2.amazonaws.com/public/news/news-171768033940340.png.jpeg",
            date: "2024-06-06 17:25:39",
            content: "Haber içeriği 1"
        },
        {
            id: 2,
            title: "Məşhur markaların gü...",
            imageUrl: "https://limakaz.s3.eu-west-2.amazonaws.com/public/news/news-171690338367025.png.jpeg",
            date: "2024-05-28 17:36:24",
            content: "Haber içeriği 2"
        },
        {
            id: 3,
            title: "Trend eynəklər onlayn...",
            imageUrl: "https://limakaz.s3.eu-west-2.amazonaws.com/public/news/news-169504100263443.png.jpeg",
            date: "2024-05-08 17:32:04",
            content: "Haber içeriği 3"
        },
        {
            id: 4,
            title: "Kargomat xidmətindən...",
            imageUrl: "https://limakaz.s3.eu-west-2.amazonaws.com/public/news/news-169277271683791.png.jpeg",
            date: "2024-04-25 17:48:49",
            content: "Haber içeriği 4"
        }
    ];

    return (
        <div className={styles.news}>
            <div className={styles.container}>
                <h2>YENİLİKLƏR VƏ ELANLAR</h2>
                <div className={styles.newsCarts}>
                    {newsList.map(news => (
                        <Link key={news.id} to={`/news/${news.id}`} className={styles.newsCart}>
                            <img src={news.imageUrl} alt="Haber Resmi" />
                            <div className={styles.bottomTexts}>
                                <h2>{news.title}</h2>
                                <div className={styles.newsTexts}>
                                    <img src="https://limak.az/new_front/assets/img/icons/calendar.svg" alt="Tarih" />
                                    <p>{news.date}</p>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
                <div className={styles.button}>
                    <button onClick={() => navigation('/updates')}>Daha Çox</button>
                </div>
            </div>
        </div>
    );
};

export default News;


