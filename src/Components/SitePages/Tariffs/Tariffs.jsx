import React from 'react'
import styles from './Tariffs.module.scss'
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



const Tariffs = () => {

    const navugate = useNavigate()

    const reg = () => {
        navugate('/register')
    }

    const navigation = useNavigate()

    return (
        <div>
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
                <div className={styles.countries}>
                    <div className={styles.container}>
                        <div className={styles.countriesTopTexts}>
                            <h2>ÖLKƏLƏR ÜZRƏ TARİFLƏR</h2>
                            <div className={styles.homePageTexts}>
                                <a href="/homepage">Ana səhifə</a>
                                <li><IoIosArrowForward /></li>
                                <p>Tariflər</p>
                            </div>
                        </div>
                        <div className={styles.tables}>
                            <div className={styles.country}>
                                <div className={styles.flag}>
                                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b4/Flag_of_Turkey.svg/1200px-Flag_of_Turkey.svg.png" alt="img" />
                                    <h2>Türkiyə</h2>
                                </div>
                                <div className={styles.regions}>
                                    <ul>
                                        <li>Bakı-İçərişəhər</li>
                                        <li>Bakı-Xalqlar Dostluğu</li>
                                        <li>Xırdalan</li>
                                        <li>Sumqayıt</li>
                                        <li>Gəncə</li>
                                        <li>Zaqatala</li>
                                        <li>Balakən</li>
                                        <li>Bakı-Gənclik</li>
                                        <li>Bakıxanov</li>
                                        <li>Xətai</li>
                                        <li>İnşaatçılar</li>
                                        <li>Badamdar</li>
                                        <div className={styles.region}>
                                            <li>Həzi Aslanov</li>
                                        </div>
                                    </ul>
                                    <div className={styles.weights}>
                                        <div className={styles.kilos}>
                                            <h2>0 - 0.1 kq</h2>
                                            <h2>1.70 AZN | 1.00 $</h2>
                                        </div>
                                        <div className={styles.kilos}>
                                            <h2>0.101 - 0.25 kq</h2>
                                            <h2>3.40 AZN | 2.00 $</h2>
                                        </div>
                                        <div className={styles.kilos}>
                                            <h2>0.251 - 0.5 kq</h2>
                                            <h2>5.10 AZN | 3.00 $</h2>
                                        </div>
                                        <div className={styles.kilos}>
                                            <h2>0.501 - 0.7 kq</h2>
                                            <h2>6.80 AZN | 4.00 $</h2>
                                        </div>
                                        <div className={styles.kilos}>
                                            <h2>0.701 - 0.1 kq</h2>
                                            <h2>1.65 AZN | 4.50 $</h2>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className={styles.country}>
                                <div className={styles.flag}>
                                    <img src="https://cdn.britannica.com/79/4479-050-6EF87027/flag-Stars-and-Stripes-May-1-1795.jpg" alt="img" />
                                    <h2>Amerika</h2>
                                </div>
                                <div className={styles.regions}>
                                    <ul>
                                        <div className={styles.region}>
                                            <li>Bakı-İçərişəhər</li>
                                        </div>
                                        <li>Bakı-Xalqlar Dostluğu</li>
                                        <li>Xırdalan</li>
                                        <li>Sumqayıt</li>
                                        <li>Gəncə</li>
                                        <li>Zaqatala</li>
                                        <li>Balakən</li>
                                        <li>Bakı-Gənclik</li>
                                        <li>Bakıxanov</li>
                                        <li>Xətai</li>
                                        <li>İnşaatçılar</li>
                                        <li>Badamdar</li>
                                        <li>Həzi Aslanov</li>
                                    </ul>
                                    <div className={styles.weights}>
                                        <div className={styles.kilos}>
                                            <h2>0 - 0.1 kq</h2>
                                            <h2>4.17 AZN | 2.45 $</h2>
                                        </div>
                                        <div className={styles.kilos}>
                                            <h2>0.101 - 0.25 kq</h2>
                                            <h2>6.71 AZN | 3.95 $</h2>
                                        </div>
                                        <div className={styles.kilos}>
                                            <h2>0.251 - 0.5 kq</h2>
                                            <h2>10.12 AZN | 5.95 $</h2>
                                        </div>
                                        <div className={styles.kilos}>
                                            <h2>0.501 - 0.7 kq</h2>
                                            <h2>11.81 AZN | 6.95 $</h2>
                                        </div>
                                        <div className={styles.kilos}>
                                            <h2>0.701 - 0.1 kq</h2>
                                            <h2>13.52 AZN | 7.95 $</h2>
                                        </div>
                                        <div className={styles.kilos}>
                                            <h2>1.001 - 10 kq - hər kq üçün</h2>
                                            <h2>13.52 AZN | 7.95 $</h2>
                                        </div>
                                        <div className={styles.kilos}>
                                            <h2>10 - kq - dan artıq hər kq üçün</h2>
                                            <h2>12.24 AZN | 7.20 $</h2>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        </div>
    )
}

export default Tariffs
