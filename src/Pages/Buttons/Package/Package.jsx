import React from 'react'
import styles from './Package.module.scss'
import { IoIosLink } from "react-icons/io";
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
import { useNavigate } from 'react-router-dom';
import { IoIosArrowForward } from "react-icons/io";
import Footer from '../../../Components/HomePage/Footer/Footer';



const Package = () => {

    const navugate = useNavigate()

    const reg = () => {
        navugate('/register')
    }

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
                                <button>Bağlamam haradadır?</button>
                                <div className={styles.order}>
                                    <button>SİFARİŞ ET</button>
                                </div>
                            </ul>
                        </div>
                        <div className={styles.userBars}>
                            <div className={styles.headerBottomRight}>
                                <ul>
                                    <li><a href="#"><RiSearchLine /></a></li>
                                    <li><a href="#"><FaCartShopping /></a></li>
                                    <div className={styles.user}>
                                        <li><a href="#"><FaRegUser /></a></li>
                                    </div>
                                </ul>
                                <div className={styles.button}>
                                    <p onClick={reg} >DAXİL OL</p>
                                </div>
                            </div>
                            <div className={styles.bars}>
                                <FaBars />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.storesTopTexts}>
                <h2>Bağlamam haradadır?</h2>
                <div className={styles.homePageTexts}>
                    <a href="/homepage">Ana səhifə</a>
                    <li><IoIosArrowForward /></li>
                    <p>Bağlamam haradadır?</p>
                </div>
            </div>
            <div className={styles.package}>
                <div className={styles.container}>
                    <p>Bağlamam<br /> haradadır?</p>
                    <div className={styles.inputButton}>
                        <input type="text" placeholder='İzləmə kodu' />
                        <li><IoIosLink /></li>
                        <button>Axtar</button>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Package
