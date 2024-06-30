import React from 'react'
import styles from './Kargomat.module.scss'
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



const Kargomat = () => {

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
            <div className={styles.kargomat}>
                <div className={styles.container}>
                    <div className={styles.kargomatTopTexts}>
                        <h2>Kargomat</h2>
                        <div className={styles.homePageTexts}>
                            <a href="/homepage">Ana səhifə</a>
                            <li><IoIosArrowForward /></li>
                            <p>Kargomat</p>
                        </div>
                    </div>
                    <div className={styles.kargomatTexts}>
                        <h2>KARGOMAT-dan istifadə ödənişlidir?</h2>
                        <p>KARGOMAT xidmətindən istifadə haqqı 1 azn təşkil edir</p>
                        <h2>KARGOMAT-dan necə istifadə edə bilərəm?</h2>
                        <p>Sifariş edilən bağlamanın çatdırılma məntəqəsi olaraq sizə ən yaxın ünvanda yerləşən KARGOMAT-ı seçirsiniz.</p>
                        <h2>Sifariş KARGOMAT-a hansı zaman ərzində çatdırılacaq?</h2>
                        <p>“Anbar” statusu alan bağlamalarınız 24 saat ərzində KARGOMAT səbətlərinə yerləşdiriləcək.</p>
                        <h2>Bağlamanı KARGOMAT-dan necə götürmək olar?</h2>
                        <p>Sifarişiniz KARGOMAT-a yerləşdirildikdən sonra sizə SMS vasitəsi ilə unikal kod göndərilir. 24 saat ərzində KARQOMAT-a yaxınlaşıb <br /> bağlamanızı götürə bilərsiniz.</p>
                        <h2>Bağlamamı KARGOMAT-dan 24 saat ərzində götürə bilməsəm,nə edim?</h2>
                        <p>KARGOMAT-da 24 saatdan artıq qalan bağlamalar anbara geri qaytarılır. Ödənilən məbləğ geri qaytarılmır. Bağlamanız "Anbar" statusu <br /> aldıqdan sonra təkrar KARGOMAT sifarişi verə bilərsiniz.</p>
                        <h2>Başqa şəxs sifarişi mənim əvəzimə ala bilərmi?</h2>
                        <p>SMS vasitəsi ilə nömrənizə göndərilən unikal kodu təqdim etdiyiniz hər bir şəxs bağlamanızı KARGOMAT-dan əldə edə bilər. <br />!Qeyd edək ki, fərdi kodun başqa şəxsə ötürülməsi halında <br />bütün məsuliyyət sizin və ya bağlamanı alan şəxsin üzərinə düşür!</p>
                        <h2>Əgər unikal kodu silmişəmsə və ya itirmişəmsə nə etməliyəm?</h2>
                        <p>Yeni kodun göndərilməsi üçün texniki dəstək mərkəzimizə zəng etməyiniz zəruridir. Mərkəzin nömrəsi: +99410 724 0 724</p>
                        <h2>KARGOMAT-daki bağlama mənə aid deyilsə nə etməliyəm?</h2>
                        <p>Əgər səbətin içindəki bağlamanın sizə aid olmadığını düşünürsünüzsə,<br />birbaşa Limak müştəri xidmətləri(link formatı) ilə əlaqə saxlayın.</p>
                        <h2>Qutu açılmırsa nə etməliyəm?</h2>
                        <p>Karqomat açılmadığı halda, problemin həlli üçün texniki dəstək mərkəzinin əməkdaşı ilə əlaqə saxlamağınız zəruridir. Telefon nömrəsi <br /> KARGOMAT-ın üzərində qeyd olunub.</p>
                        <h2>KARGOMAT-daki bağlamalar siğortalanırmı ?</h2>
                        <p>Dəyəri 500 AZN - ə qədər olan bağlamalar xidməti göstərən şirkət tərəfindən siğortalanır.</p>
                        <h2>KARGOMAT-ın üstünlükləri nədir?</h2>
                        <p>- sürətli çatdırılma; <br />- növbələrin olmaması; <br />- 24/7 iş prinsipi; <br />-sizə ən yaxın çatdırılma məntəqəsindən sifarişi götürmək imkanı.</p>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Kargomat
