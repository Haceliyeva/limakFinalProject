import React from 'react'
import styles from './Conditions.module.scss'
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
import { useNavigate } from 'react-router-dom';
import Footer from '../../HomePage/Footer/Footer';
import { FaHeart } from "react-icons/fa";
import ToggleMenu from '../../ToggleMenu/ToggleMenu';


const Conditions = () => {

    const navugate = useNavigate()

    const reg = () => {
        navugate('/register')
    }

    const navigation = useNavigate()

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
            <div className={styles.conditions}>
                <div className={styles.container}>
                    <div className={styles.countriesTopTexts}>
                        <h2>Gizlilik şərtləri</h2>
                        <div className={styles.homePageTexts}>
                            <a href="/homepage">Ana səhifə</a>
                            <li><IoIosArrowForward /></li>
                            <p>Xəbərlər</p>
                        </div>
                    </div>
                    <div className={styles.texts}>
                        <h2>"Limak AZ" MMC məsuliyyət daşıyır!</h2>
                        <p>"Limak AZ" MMC istifadəçilərin şirkətə təqdim etdikləri şəxsi məlumatların qorunmasına zəmanət verir.</p>
                        <p>Şirkət şəxsi məlumatların qorunması üçün təhlükəsizliyin təmin edilməsinə, bununla bağlı bütün texniki tədbirlərin görülməsinə <br /> görə öhdəlik daşıyır.</p>
                        <p>Şirkət istifadəçinin şəxsi məlumatlarını onun icazəsi olmadan üçüncü tərəfə təqdim etməyəcəyinə dair öhdəlik götürür.</p>
                        <p>Bu məlumatlardan "Limak AZ" MMC-nin eyni istifadəçiyə yönəldiyi təbliğat-təşviqat, reklam xarakterli məlumatlarda istifadə <br /> oluna bilər.</p>
                        <p>Eyni zamanda şəxsi məlumatlar istifadəçi ilə yaranmış hüquqi problemin həllində məhkəmə qərarı ilə açıqlana bilər.</p>
                        <h2>"Limak AZ" MMC istifadəçinin məxfi kart məlumatlarına malik deyil, onlari özündə saxlamır</h2>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Conditions
