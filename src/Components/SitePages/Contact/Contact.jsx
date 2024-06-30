import styles from './Contact.module.scss'
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
import { FaLocationDot } from "react-icons/fa6";
import { FaMap } from "react-icons/fa";
import { FaWarehouse } from "react-icons/fa6";
import { FaShoppingBag } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { TfiHeadphoneAlt } from "react-icons/tfi";
import Footer from '../../HomePage/Footer/Footer';
import React, { useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import { FaMapMarkerAlt } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { FaHeart } from "react-icons/fa";
import ToggleMenu from '../../ToggleMenu/ToggleMenu';



delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
    iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png').default,
    iconUrl: require('leaflet/dist/images/marker-icon.png').default,
    shadowUrl: require('leaflet/dist/images/marker-shadow.png').default
});

const Contact = () => {

    const navugate = useNavigate()

    const reg = () => {
        navugate('/register')
    }

    const navigation = useNavigate()

    const [showMap, setShowMap] = useState(false);

    const position = [40.3767, 49.8382];

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
            <div className={styles.contacts}>
                <div className={styles.container}>
                    <div className={styles.contactTopTexts}>
                        <h2>Əlaqə</h2>
                        <div className={styles.homePageTexts}>
                            <a href="/homepage">Ana səhifə</a>
                            <li><IoIosArrowForward /></li>
                            <p>Əlaqə</p>
                        </div>
                    </div>
                    <div className={styles.aboutContacts}>
                        <div className={styles.aboutContact}>
                            <div className={styles.contact}>
                                <div className={styles.iconText}>
                                    <li><FaLocationDot /></li>
                                    <h3>Bakı - İçərişəhər</h3>
                                </div>
                                <p>Səbail rayonu, Lermontov küç. 40A</p>
                                <div className={styles.iconText}>
                                    <li><FaMap /></li>
                                    <a href="https://www.google.com/maps/place/Limak+-+S%C3%BCr%C9%99tli+kargo+xidm%C9%99ti/@40.365779,49.829251,16z/data=!4m6!3m5!1s0x40307d164e83a7d9:0x899cce04d36a5797!8m2!3d40.3657793!4d49.8292506!16s%2Fg%2F11h5qqbb44?hl=az&entry=ttu"
                                        target="_blank" rel="noopener noreferrer">
                                        <h3>Xəritəyə bax</h3>
                                    </a>                                </div>
                            </div>
                            <div className={styles.contact}>
                                <div className={styles.iconText}>
                                    <li><FaWarehouse /></li>
                                    <h3>Anbar</h3>
                                </div>
                                <p>Bazar ertəsi-şənbə</p>
                                <p>Saat 09:00 - 21:00</p>
                                <div className={styles.iconText}>
                                    <li><FaShoppingBag /></li>
                                    <h3>Sifariş et xidməti</h3>
                                </div>
                                <p>24 saat</p>
                            </div>
                            <div className={styles.contact}>
                                <div className={styles.iconText}>
                                    <li><FaPhoneAlt /></li>
                                    <h3>*9595</h3>
                                </div>
                                <div className={styles.iconText}>
                                    <li><MdEmail /></li>
                                    <h3>info@limak.az</h3>
                                </div>
                                <div className={styles.iconText}>
                                    <li><TfiHeadphoneAlt /></li>
                                    <h3>Müştəri xidməti</h3>
                                </div>
                                <p>24 saat</p>
                            </div>
                        </div>
                        <div className={styles.aboutContact}>
                            <div className={styles.contact}>
                                <div className={styles.iconText}>
                                    <li><FaLocationDot /></li>
                                    <h3>Bakı - Xalqlar Dostluğu</h3>
                                </div>
                                <p>Nizami rayonu, Qara Qarayev <br /> prospekti,125a (Səhhət klinikasının <br /> yaxınlığı)</p>
                                <div className={styles.iconText}>
                                    <li><FaMap /></li>
                                    <a href="https://www.google.com/maps/place/Limak+-+S%C3%BCr%C9%99tli+kargo+xidm%C9%99ti/@40.365779,49.829251,16z/data=!4m6!3m5!1s0x40307d164e83a7d9:0x899cce04d36a5797!8m2!3d40.3657793!4d49.8292506!16s%2Fg%2F11h5qqbb44?hl=az&entry=ttu"
                                        target="_blank" rel="noopener noreferrer">
                                        <h3>Xəritəyə bax</h3>
                                    </a>                                </div>
                            </div>
                            <div className={styles.contact}>
                                <div className={styles.iconText}>
                                    <li><FaWarehouse /></li>
                                    <h3>Anbar</h3>
                                </div>
                                <p>Bazar ertəsi-şənbə</p>
                                <p>Saat 09:00 - 20:00</p>
                                <div className={styles.iconText}>
                                    <li><FaShoppingBag /></li>
                                    <h3>Sifariş et xidməti</h3>
                                </div>
                                <p>24 saat</p>
                            </div>
                            <div className={styles.contact}>
                                <div className={styles.iconText}>
                                    <li><FaPhoneAlt /></li>
                                    <h3>*9595</h3>
                                </div>
                                <div className={styles.iconText}>
                                    <li><MdEmail /></li>
                                    <h3>info@limak.az</h3>
                                </div>
                                <div className={styles.iconText}>
                                    <li><TfiHeadphoneAlt /></li>
                                    <h3>Müştəri xidməti</h3>
                                </div>
                                <p>24 saat</p>
                            </div>
                        </div>
                        <div className={styles.aboutContact}>
                            <div className={styles.contact}>
                                <div className={styles.iconText}>
                                    <li><FaLocationDot /></li>
                                    <h3>Xırdalan</h3>
                                </div>
                                <p>Abşeron rayonu, Xırdalan şəhəri,<br /> H.Əliyev prospekti 54A</p>
                                <div className={styles.iconText}>
                                    <li><FaMap /></li>
                                    <a href="https://www.google.com/maps/place/Limak+-+S%C3%BCr%C9%99tli+kargo+xidm%C9%99ti/@40.365779,49.829251,16z/data=!4m6!3m5!1s0x40307d164e83a7d9:0x899cce04d36a5797!8m2!3d40.3657793!4d49.8292506!16s%2Fg%2F11h5qqbb44?hl=az&entry=ttu"
                                        target="_blank" rel="noopener noreferrer">
                                        <h3>Xəritəyə bax</h3>
                                    </a>                                </div>
                            </div>
                            <div className={styles.contact}>
                                <div className={styles.iconText}>
                                    <li><FaWarehouse /></li>
                                    <h3>Anbar</h3>
                                </div>
                                <p>Bazar ertəsi-şənbə</p>
                                <p>Saat 09:00 - 20:00</p>
                                <div className={styles.iconText}>
                                    <li><FaShoppingBag /></li>
                                    <h3>Sifariş et xidməti</h3>
                                </div>
                                <p>24 saat</p>
                            </div>
                            <div className={styles.contact}>
                                <div className={styles.iconText}>
                                    <li><FaPhoneAlt /></li>
                                    <h3>*9595</h3>
                                </div>
                                <div className={styles.iconText}>
                                    <li><MdEmail /></li>
                                    <h3>info@limak.az</h3>
                                </div>
                                <div className={styles.iconText}>
                                    <li><TfiHeadphoneAlt /></li>
                                    <h3>Müştəri xidməti</h3>
                                </div>
                                <p>24 saat</p>
                            </div>
                        </div>
                        <div className={styles.aboutContact}>
                            <div className={styles.contact}>
                                <div className={styles.iconText}>
                                    <li><FaLocationDot /></li>
                                    <h3>Sumqayıt</h3>
                                </div>
                                <p>Sumqayıt şəhəri, 36-cı məhəllə <br />7/11-5</p>
                                <div className={styles.iconText}>
                                    <li><FaMap /></li>
                                    <a href="https://www.google.com/maps/place/Limak+-+S%C3%BCr%C9%99tli+kargo+xidm%C9%99ti/@40.365779,49.829251,16z/data=!4m6!3m5!1s0x40307d164e83a7d9:0x899cce04d36a5797!8m2!3d40.3657793!4d49.8292506!16s%2Fg%2F11h5qqbb44?hl=az&entry=ttu"
                                        target="_blank" rel="noopener noreferrer">
                                        <h3>Xəritəyə bax</h3>
                                    </a>                                </div>
                            </div>
                            <div className={styles.contact}>
                                <div className={styles.iconText}>
                                    <li><FaWarehouse /></li>
                                    <h3>Anbar</h3>
                                </div>
                                <p>Bazar ertəsi-şənbə</p>
                                <p>Saat 09:00 - 20:00</p>
                                <div className={styles.iconText}>
                                    <li><FaShoppingBag /></li>
                                    <h3>Sifariş et xidməti</h3>
                                </div>
                                <p>24 saat</p>
                            </div>
                            <div className={styles.contact}>
                                <div className={styles.iconText}>
                                    <li><FaPhoneAlt /></li>
                                    <h3>*9595</h3>
                                </div>
                                <div className={styles.iconText}>
                                    <li><MdEmail /></li>
                                    <h3>info@limak.az</h3>
                                </div>
                                <div className={styles.iconText}>
                                    <li><TfiHeadphoneAlt /></li>
                                    <h3>Müştəri xidməti</h3>
                                </div>
                                <p>24 saat</p>
                            </div>
                        </div>
                        <div className={styles.aboutContact}>
                            <div className={styles.contact}>
                                <div className={styles.iconText}>
                                    <li><FaLocationDot /></li>
                                    <h3>Gəncə</h3>
                                </div>
                                <p>Gəncə şəhəri, Kəpəz rayonu,<br /> Əziz Əliyev prospekti,<br /> 5A. (Köhnə Yevlax avtovağzalı və<br /> Neon dəyirmanının <br />yaxınlığı)</p>
                                <div className={styles.iconText}>
                                    <li><FaMap /></li>
                                    <a href="https://www.google.com/maps/place/Limak+-+S%C3%BCr%C9%99tli+kargo+xidm%C9%99ti/@40.365779,49.829251,16z/data=!4m6!3m5!1s0x40307d164e83a7d9:0x899cce04d36a5797!8m2!3d40.3657793!4d49.8292506!16s%2Fg%2F11h5qqbb44?hl=az&entry=ttu"
                                        target="_blank" rel="noopener noreferrer">
                                        <h3>Xəritəyə bax</h3>
                                    </a>                                </div>
                            </div>
                            <div className={styles.contact}>
                                <div className={styles.iconText}>
                                    <li><FaWarehouse /></li>
                                    <h3>Anbar</h3>
                                </div>
                                <p>Bazar ertəsi-şənbə</p>
                                <p>Saat 10:00 - 19:00</p>
                                <div className={styles.iconText}>
                                    <li><FaShoppingBag /></li>
                                    <h3>Sifariş et xidməti</h3>
                                </div>
                                <p>24 saat</p>
                            </div>
                            <div className={styles.contact}>
                                <div className={styles.iconText}>
                                    <li><FaPhoneAlt /></li>
                                    <h3>*9595</h3>
                                </div>
                                <div className={styles.iconText}>
                                    <li><MdEmail /></li>
                                    <h3>info@limak.az</h3>
                                </div>
                                <div className={styles.iconText}>
                                    <li><TfiHeadphoneAlt /></li>
                                    <h3>Müştəri xidməti</h3>
                                </div>
                                <p>24 saat</p>
                            </div>
                        </div>
                        <div className={styles.aboutContact}>
                            <div className={styles.contact}>
                                <div className={styles.iconText}>
                                    <li><FaLocationDot /></li>
                                    <h3>Zaqatala</h3>
                                </div>
                                <p>Zaqatala şəhəri,<br /> Heydər Əliyev prospekti 145A</p>
                                <div className={styles.iconText}>
                                    <li><FaMap /></li>
                                    <a href="https://www.google.com/maps/place/Limak+-+S%C3%BCr%C9%99tli+kargo+xidm%C9%99ti/@40.365779,49.829251,16z/data=!4m6!3m5!1s0x40307d164e83a7d9:0x899cce04d36a5797!8m2!3d40.3657793!4d49.8292506!16s%2Fg%2F11h5qqbb44?hl=az&entry=ttu"
                                        target="_blank" rel="noopener noreferrer">
                                        <h3>Xəritəyə bax</h3>
                                    </a>                                </div>
                            </div>
                            <div className={styles.contact}>
                                <div className={styles.iconText}>
                                    <li><FaWarehouse /></li>
                                    <h3>Anbar</h3>
                                </div>
                                <p>Bazar ertəsi-şənbə</p>
                                <p>Saat 09:00 - 18:00</p>
                                <div className={styles.iconText}>
                                    <li><FaShoppingBag /></li>
                                    <h3>Sifariş et xidməti</h3>
                                </div>
                                <p>24 saat</p>
                            </div>
                            <div className={styles.contact}>
                                <div className={styles.iconText}>
                                    <li><FaPhoneAlt /></li>
                                    <h3>*9595</h3>
                                </div>
                                <div className={styles.iconText}>
                                    <li><MdEmail /></li>
                                    <h3>info@limak.az</h3>
                                </div>
                                <div className={styles.iconText}>
                                    <li><TfiHeadphoneAlt /></li>
                                    <h3>Müştəri xidməti</h3>
                                </div>
                                <p>24 saat</p>
                            </div>
                        </div>
                        <div className={styles.aboutContact}>
                            <div className={styles.contact}>
                                <div className={styles.iconText}>
                                    <li><FaLocationDot /></li>
                                    <h3>Balakən</h3>
                                </div>
                                <p>Balakən şəhəri, H. Əliyev <br /> prospekti 20 a, Loqedex <br /> dayanacağı, Yusif <br /> Aptekin yaxınlığı</p>
                                <div className={styles.iconText}>
                                    <li><FaMap /></li>
                                    <a href="https://www.google.com/maps/place/Limak+-+S%C3%BCr%C9%99tli+kargo+xidm%C9%99ti/@40.365779,49.829251,16z/data=!4m6!3m5!1s0x40307d164e83a7d9:0x899cce04d36a5797!8m2!3d40.3657793!4d49.8292506!16s%2Fg%2F11h5qqbb44?hl=az&entry=ttu"
                                        target="_blank" rel="noopener noreferrer">
                                        <h3>Xəritəyə bax</h3>
                                    </a>                                </div>
                            </div>
                            <div className={styles.contact}>
                                <div className={styles.iconText}>
                                    <li><FaWarehouse /></li>
                                    <h3>Anbar</h3>
                                </div>
                                <p>Bazar ertəsi-şənbə</p>
                                <p>Saat 10:00 - 18:00</p>
                                <div className={styles.iconText}>
                                    <li><FaShoppingBag /></li>
                                    <h3>Sifariş et xidməti</h3>
                                </div>
                                <p>24 saat</p>
                            </div>
                            <div className={styles.contact}>
                                <div className={styles.iconText}>
                                    <li><FaPhoneAlt /></li>
                                    <h3>*9595</h3>
                                </div>
                                <div className={styles.iconText}>
                                    <li><MdEmail /></li>
                                    <h3>info@limak.az</h3>
                                </div>
                                <div className={styles.iconText}>
                                    <li><TfiHeadphoneAlt /></li>
                                    <h3>Müştəri xidməti</h3>
                                </div>
                                <p>24 saat</p>
                            </div>
                        </div>
                        <div className={styles.aboutContact}>
                            <div className={styles.contact}>
                                <div className={styles.iconText}>
                                    <li><FaLocationDot /></li>
                                    <h3>Bakı - Gənclik</h3>
                                </div>
                                <p>Bakı şəhəri, Nərimanov <br /> rayonu, Akademik <br /> Həsən Əliyev küçəsi, 96</p>
                                <div className={styles.iconText}>
                                    <li><FaMap /></li>
                                    <a href="https://www.google.com/maps/place/Limak+-+S%C3%BCr%C9%99tli+kargo+xidm%C9%99ti/@40.365779,49.829251,16z/data=!4m6!3m5!1s0x40307d164e83a7d9:0x899cce04d36a5797!8m2!3d40.3657793!4d49.8292506!16s%2Fg%2F11h5qqbb44?hl=az&entry=ttu"
                                        target="_blank" rel="noopener noreferrer">
                                        <h3>Xəritəyə bax</h3>
                                    </a>                                </div>
                            </div>
                            <div className={styles.contact}>
                                <div className={styles.iconText}>
                                    <li><FaWarehouse /></li>
                                    <h3>Anbar</h3>
                                </div>
                                <p>Bazar ertəsi-şənbə</p>
                                <p>Saat 09:00 - 20:00</p>
                                <div className={styles.iconText}>
                                    <li><FaShoppingBag /></li>
                                    <h3>Sifariş et xidməti</h3>
                                </div>
                                <p>24 saat</p>
                            </div>
                            <div className={styles.contact}>
                                <div className={styles.iconText}>
                                    <li><FaPhoneAlt /></li>
                                    <h3>*9595</h3>
                                </div>
                                <div className={styles.iconText}>
                                    <li><MdEmail /></li>
                                    <h3>info@limak.az</h3>
                                </div>
                                <div className={styles.iconText}>
                                    <li><TfiHeadphoneAlt /></li>
                                    <h3>Müştəri xidməti</h3>
                                </div>
                                <p>24 saat</p>
                            </div>
                        </div>
                        <div className={styles.aboutContact}>
                            <div className={styles.contact}>
                                <div className={styles.iconText}>
                                    <li><FaLocationDot /></li>
                                    <h3>Bakıxanov</h3>
                                </div>
                                <p>Bakı şəhəri, Sabunçu rayonu, <br /> Bakıxanov qəsəbəsi, Sülh küçəsi, <br /> 179A (Z Premium Studio <br /> Gözəllik salonunun <br /> yaxınlığı)</p>
                                <div className={styles.iconText}>
                                    <li><FaMap /></li>
                                    <a href="https://www.google.com/maps/place/Limak+-+S%C3%BCr%C9%99tli+kargo+xidm%C9%99ti/@40.365779,49.829251,16z/data=!4m6!3m5!1s0x40307d164e83a7d9:0x899cce04d36a5797!8m2!3d40.3657793!4d49.8292506!16s%2Fg%2F11h5qqbb44?hl=az&entry=ttu"
                                        target="_blank" rel="noopener noreferrer">
                                        <h3>Xəritəyə bax</h3>
                                    </a>                                </div>
                            </div>
                            <div className={styles.contact}>
                                <div className={styles.iconText}>
                                    <li><FaWarehouse /></li>
                                    <h3>Anbar</h3>
                                </div>
                                <p>Bazar ertəsi-şənbə</p>
                                <p>Saat 09:00 - 21:00</p>
                                <div className={styles.iconText}>
                                    <li><FaShoppingBag /></li>
                                    <h3>Sifariş et xidməti</h3>
                                </div>
                                <p>24 saat</p>
                            </div>
                            <div className={styles.contact}>
                                <div className={styles.iconText}>
                                    <li><FaPhoneAlt /></li>
                                    <h3>*9595</h3>
                                </div>
                                <div className={styles.iconText}>
                                    <li><MdEmail /></li>
                                    <h3>info@limak.az</h3>
                                </div>
                                <div className={styles.iconText}>
                                    <li><TfiHeadphoneAlt /></li>
                                    <h3>Müştəri xidməti</h3>
                                </div>
                                <p>24 saat</p>
                            </div>
                        </div>
                        <div className={styles.aboutContact}>
                            <div className={styles.contact}>
                                <div className={styles.iconText}>
                                    <li><FaLocationDot /></li>
                                    <h3>Xətai</h3>
                                </div>
                                <p>Bakı şəhəri, Xətai rayonu, <br /> Xocalı prospekti 34-40 <br /> (6 saylı Notariat-ın yaxınlığı)</p>
                                <div className={styles.iconText}>
                                    <li><FaMap /></li>
                                    <a href="https://www.google.com/maps/place/Limak+-+S%C3%BCr%C9%99tli+kargo+xidm%C9%99ti/@40.365779,49.829251,16z/data=!4m6!3m5!1s0x40307d164e83a7d9:0x899cce04d36a5797!8m2!3d40.3657793!4d49.8292506!16s%2Fg%2F11h5qqbb44?hl=az&entry=ttu"
                                        target="_blank" rel="noopener noreferrer">
                                        <h3>Xəritəyə bax</h3>
                                    </a>                                </div>
                            </div>
                            <div className={styles.contact}>
                                <div className={styles.iconText}>
                                    <li><FaWarehouse /></li>
                                    <h3>Anbar</h3>
                                </div>
                                <p>Bazar ertəsi-şənbə</p>
                                <p>Saat 10:00 - 20:00</p>
                                <div className={styles.iconText}>
                                    <li><FaShoppingBag /></li>
                                    <h3>Sifariş et xidməti</h3>
                                </div>
                                <p>24 saat</p>
                            </div>
                            <div className={styles.contact}>
                                <div className={styles.iconText}>
                                    <li><FaPhoneAlt /></li>
                                    <h3>*9595</h3>
                                </div>
                                <div className={styles.iconText}>
                                    <li><MdEmail /></li>
                                    <h3>info@limak.az</h3>
                                </div>
                                <div className={styles.iconText}>
                                    <li><TfiHeadphoneAlt /></li>
                                    <h3>Müştəri xidməti</h3>
                                </div>
                                <p>24 saat</p>
                            </div>
                        </div>
                        <div className={styles.aboutContact}>
                            <div className={styles.contact}>
                                <div className={styles.iconText}>
                                    <li><FaLocationDot /></li>
                                    <h3>İnşaatçılar</h3>
                                </div>
                                <p>Bakı şəhəri, Yasamal rayonu, <br /> A.M. Şərifzadə küçəsi 168 A <br /> (Kolorit restoranının yaxınlığı)</p>
                                <div className={styles.iconText}>
                                    <li><FaMap /></li>
                                    <a href="https://www.google.com/maps/place/Limak+-+S%C3%BCr%C9%99tli+kargo+xidm%C9%99ti/@40.365779,49.829251,16z/data=!4m6!3m5!1s0x40307d164e83a7d9:0x899cce04d36a5797!8m2!3d40.3657793!4d49.8292506!16s%2Fg%2F11h5qqbb44?hl=az&entry=ttu"
                                        target="_blank" rel="noopener noreferrer">
                                        <h3>Xəritəyə bax</h3>
                                    </a>                                </div>
                            </div>
                            <div className={styles.contact}>
                                <div className={styles.iconText}>
                                    <li><FaWarehouse /></li>
                                    <h3>Anbar</h3>
                                </div>
                                <p>Bazar ertəsi-şənbə</p>
                                <p>Saat 09:00 - 20:00</p>
                                <div className={styles.iconText}>
                                    <li><FaShoppingBag /></li>
                                    <h3>Sifariş et xidməti</h3>
                                </div>
                                <p>24 saat</p>
                            </div>
                            <div className={styles.contact}>
                                <div className={styles.iconText}>
                                    <li><FaPhoneAlt /></li>
                                    <h3>*9595</h3>
                                </div>
                                <div className={styles.iconText}>
                                    <li><MdEmail /></li>
                                    <h3>info@limak.az</h3>
                                </div>
                                <div className={styles.iconText}>
                                    <li><TfiHeadphoneAlt /></li>
                                    <h3>Müştəri xidməti</h3>
                                </div>
                                <p>24 saat</p>
                            </div>
                        </div>
                        <div className={styles.aboutContact}>
                            <div className={styles.contact}>
                                <div className={styles.iconText}>
                                    <li><FaLocationDot /></li>
                                    <h3>Badamdar</h3>
                                </div>
                                <p>Bakı şəhəri, Səbail rayonu, <br /> Əziz Nəzərov küçəsi 4. <br /> (Komagene Badamdar -ın <br />yaxınlığı)</p>
                                <div className={styles.iconText}>
                                    <li><FaMap /></li>
                                    <a href="https://www.google.com/maps/place/Limak+-+S%C3%BCr%C9%99tli+kargo+xidm%C9%99ti/@40.365779,49.829251,16z/data=!4m6!3m5!1s0x40307d164e83a7d9:0x899cce04d36a5797!8m2!3d40.3657793!4d49.8292506!16s%2Fg%2F11h5qqbb44?hl=az&entry=ttu"
                                        target="_blank" rel="noopener noreferrer">
                                        <h3>Xəritəyə bax</h3>
                                    </a>                                </div>
                            </div>
                            <div className={styles.contact}>
                                <div className={styles.iconText}>
                                    <li><FaWarehouse /></li>
                                    <h3>Anbar</h3>
                                </div>
                                <p>Bazar ertəsi-şənbə</p>
                                <p>Saat 09:00 - 20:00</p>
                                <div className={styles.iconText}>
                                    <li><FaShoppingBag /></li>
                                    <h3>Sifariş et xidməti</h3>
                                </div>
                                <p>24 saat</p>
                            </div>
                            <div className={styles.contact}>
                                <div className={styles.iconText}>
                                    <li><FaPhoneAlt /></li>
                                    <h3>*9595</h3>
                                </div>
                                <div className={styles.iconText}>
                                    <li><MdEmail /></li>
                                    <h3>info@limak.az</h3>
                                </div>
                                <div className={styles.iconText}>
                                    <li><TfiHeadphoneAlt /></li>
                                    <h3>Müştəri xidməti</h3>
                                </div>
                                <p>24 saat</p>
                            </div>
                        </div>
                        <div className={styles.aboutContact}>
                            <div className={styles.contact}>
                                <div className={styles.iconText}>
                                    <li><FaLocationDot /></li>
                                    <h3>Həzi Aslanov</h3>
                                </div>
                                <p>Bakı şəhəri, Xətai rayonu, <br /> Məhəmməd Hadi küçəsi, <br /> məhəllə 2944A (Masal <br /> restoranının yaxınlığı)</p>
                                <div className={styles.iconText}>
                                    <li><FaMap /></li>
                                    <a href="https://www.google.com/maps/place/Limak+-+S%C3%BCr%C9%99tli+kargo+xidm%C9%99ti/@40.365779,49.829251,16z/data=!4m6!3m5!1s0x40307d164e83a7d9:0x899cce04d36a5797!8m2!3d40.3657793!4d49.8292506!16s%2Fg%2F11h5qqbb44?hl=az&entry=ttu"
                                        target="_blank" rel="noopener noreferrer">
                                        <h3>Xəritəyə bax</h3>
                                    </a>                                </div>
                            </div>
                            <div className={styles.contact}>
                                <div className={styles.iconText}>
                                    <li><FaWarehouse /></li>
                                    <h3>Anbar</h3>
                                </div>
                                <p>Bazar ertəsi-şənbə</p>
                                <p>Saat 09:00 - 20:00</p>
                                <div className={styles.iconText}>
                                    <li><FaShoppingBag /></li>
                                    <h3>Sifariş et xidməti</h3>
                                </div>
                                <p>24 saat</p>
                            </div>
                            <div className={styles.contact}>
                                <div className={styles.iconText}>
                                    <li><FaPhoneAlt /></li>
                                    <h3>*9595</h3>
                                </div>
                                <div className={styles.iconText}>
                                    <li><MdEmail /></li>
                                    <h3>info@limak.az</h3>
                                </div>
                                <div className={styles.iconText}>
                                    <li><TfiHeadphoneAlt /></li>
                                    <h3>Müştəri xidməti</h3>
                                </div>
                                <p>24 saat</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Contact

