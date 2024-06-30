import React from 'react'
import styles from './Updates.module.scss'
import { IoLocationSharp } from "react-icons/io5";
import { FaClock } from "react-icons/fa";
import { FaPhoneVolume } from "react-icons/fa";
import { IoLogoFacebook } from "react-icons/io";
import { FaInstagram } from "react-icons/fa6";
import { FaTelegram } from "react-icons/fa";
import { AiFillYoutube } from "react-icons/ai";
import { RiSearchLine } from "react-icons/ri";
import { FaBars } from "react-icons/fa6";
import { FaRegUser } from "react-icons/fa6";
import { FaCartShopping } from "react-icons/fa6";
import { IoIosArrowForward } from "react-icons/io";
import { Link, useNavigate } from 'react-router-dom';
import Footer from '../../HomePage/Footer/Footer';
import { FaHeart } from "react-icons/fa";
import ToggleMenu from '../../ToggleMenu/ToggleMenu';




const Updates = () => {

    const navugate = useNavigate()

    const reg = () => {
        navugate('/register')
    }

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
            title: "Trend eynəklər onlay...",
            imageUrl: "https://limakaz.s3.eu-west-2.amazonaws.com/public/news/news-169504100263443.png.jpeg",
            date: "2023-10-25 11:28:27",
            content: "Haber içeriği 3"
        },
        {
            id: 4,
            title: "Kargomat xidmətindən...",
            imageUrl: "https://limakaz.s3.eu-west-2.amazonaws.com/public/news/news-169277271683791.png.jpeg",
            date: "2023-10-25 10:38:36",
            content: "Haber içeriği 4"
        },
        {
            id: 5,
            title: "Qurban bayraminda qe...",
            imageUrl: "https://limakaz.s3.eu-west-2.amazonaws.com/public/news/news-171827962798462.png.jpeg",
            date: "2024-06-13 15:53:47",
            content: "Haber içeriği 1"
        },
        {
            id: 6,
            title: "Ramazan bayraminda q...",
            imageUrl: "https://limakaz.s3.eu-west-2.amazonaws.com/public/news/news-171256877480420.png.jpeg",
            date: "2024-04-08 13:32:56",
            content: "Haber içeriği 2"
        },
        {
            id: 7,
            title: "Biznes qadınları üçü...",
            imageUrl: "https://limakaz.s3.eu-west-2.amazonaws.com/public/news/news-170869741148645.png.jpeg",
            date: "2024-02-23 18:10:11",
            content: "Haber içeriği 3"
        },
        {
            id: 8,
            title: "Yeni il bayramınız m...",
            imageUrl: "https://limakaz.s3.eu-west-2.amazonaws.com/public/news/news-170383622116394.png.jpeg",
            date: "2024-12-29 11:50:21",
            content: "Haber içeriği 4"
        },
        {
            id: 9,
            title: "Limak anbarlarında q...",
            imageUrl: "https://limakaz.s3.eu-west-2.amazonaws.com/public/news/news-170383551669065.png.jpeg",
            date: "2023-12-29 11:34:46",
            content: "Haber içeriği 4"
        },
        {
            id: 10,
            title: "Axtardığınız kitabla...",
            imageUrl: "https://limakaz.s3.eu-west-2.amazonaws.com/public/news/news-170350665917947.png.jpeg",
            date: "2023-12-25 16:05:33",
            content: "Haber içeriği 4"
        },
        {
            id: 11,
            title: "Yeni ünvanlarda xidm...",
            imageUrl: "https://limakaz.s3.eu-west-2.amazonaws.com/public/news/news-170229001039888.png.jpeg",
            date: "2023-12-11 12:19:45",
            content: "Haber içeriği 4"
        },
        {
            id: 12,
            title: "Yeni il atmosferini...",
            imageUrl: "https://limakaz.s3.eu-west-2.amazonaws.com/public/news/news-170229681812672.png.jpeg",
            date: "2023-12-11 15:58:26",
            content: "Haber içeriği 4"
        },
        {
            id: 13,
            title: "Trendyoldan birbaş...",
            imageUrl: "https://limakaz.s3.eu-west-2.amazonaws.com/public/news/news-170186316192085.png.jpeg",
            date: "2023-12-06 15:18:21",
            content: "Haber içeriği 4"
        },
        {
            id: 14,
            title: "Amerikadan Azərbayca...",
            imageUrl: "https://limakaz.s3.eu-west-2.amazonaws.com/public/news/news-170106901117608.png.jpeg",
            date: "2023-11-27 11:02:09",
            content: "Haber içeriği 4"
        },
        {
            id: 15,
            title: "Limak anbarlarında...",
            imageUrl: "https://limakaz.s3.eu-west-2.amazonaws.com/public/news/news-169943015026639.png.jpeg",
            date: "2023-11-08 11:55:50",
            content: "Haber içeriği 4"
        },
    ];



    return (
        <div className={styles.sections}>
            <div className={styles.header}>
                <div className={styles.headerTop}>
                    <div className={styles.container}>
                        <div className={styles.iconTexts}>
                            <div className={styles.iconText}>
                                <li><IoLocationSharp /></li>
                                <p>Səbail rayonu, Lermontov küç. 40A</p>
                            </div>
                            <div className={styles.iconText}>
                                <li><FaClock /></li>
                                <p>Bazar ertəsi-şənbə</p>
                            </div>
                            <div className={styles.iconText}>
                                <li><FaPhoneVolume /></li>
                                <a href="#">*9595</a>
                            </div>
                        </div>
                        <div className={styles.icons}>
                        <a href="https://www.facebook.com/Limakaz/"><IoLogoFacebook /></a>
                        <a href="https://www.instagram.com/limak.az/"><FaInstagram /></a>
                        <a href="https://t.me/limak_az"><FaTelegram /></a>
                        <a href="https://www.youtube.com/channel/UCz0okQvJ53Ml9agfGGjgyVg"><AiFillYoutube /></a>
                        </div>
                    </div>
                </div>
                <div className={styles.headerBottom}>
                    <div className={styles.container}>
                        <img src="https://limak.az/new_front/assets/logo.svg" alt="img" />
                        <div className={styles.nav}>
                            <ul>
                                <li><a href="/tariffs">TARİFLƏR</a></li>
                                <li><a href="/calculator">KALKULYATOR</a></li>
                                <li><a href="/stores">MAĞAZALAR</a></li>
                                <li><a href="/updates">XƏBƏRLƏR</a></li>
                                <li><a href="/contact">ƏLAQƏ</a></li>
                                <li><a href="/kargomat">KARGOMAT</a></li>
                                <div className={styles.order}>
                                </div>
                            </ul>
                        </div>
                        <div className={styles.userBars}>
                            <div className={styles.headerBottomRight}>
                                <ul>
                                    <li onClick={() => navigation('/basket')}><a href="#"><FaCartShopping /></a></li>
                                    <div className={styles.user}>
                                        <li onClick={() => navigation('/profile')}><a href="#"><FaRegUser /></a></li>
                                    </div>
                                </ul>
                                <div className={styles.button}>
                                <p onClick={reg} >DAXİL OL</p>
                            </div>
                            </div>
                            <div className={styles.bars}>
                            <ToggleMenu />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.updates}>
                <div className={styles.container}>
                    <div className={styles.updatesTopTexts}>
                        <h2>Xəbərlər və yeniliklər</h2>
                        <div className={styles.homePageTexts}>
                            <a href="/homepage">Ana səhifə</a>
                            <li><IoIosArrowForward /></li>
                            <p>Tariflər</p>
                        </div>
                    </div>
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
                </div>
            </div>
            <Footer/>
        </div>
    )
}

export default Updates


