import React from 'react'
import styles from './About.module.scss'
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


const About = () => {

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
                                        <li><a href="#"><FaRegUser /></a></li>
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
            <div className={styles.about}>
                <div className={styles.container}>
                    <div className={styles.countriesTopTexts}>
                        <h2>Suallar</h2>
                        <div className={styles.homePageTexts}>
                            <a href="/homepage">Ana səhifə</a>
                            <li><IoIosArrowForward /></li>
                            <p>Xəbərlər</p>
                        </div>
                    </div>
                    <div className={styles.textsImage}>
                        <div className={styles.texts}>
                            <p>"Limak.az" məsuliyyət daşıyır!</p>
                            <p>"Limak.az" sürətli poçtdaşıma və kuryer şirkətidir. Şirkət Beynəlxalq Hava Nəqliyyatı Asossiasiyasının (İATA) akredditə olunmuş yük agentidir. (İATA Accredited Cargo Agent)</p>
                            <p>"Limak.az" həmçinin FİATA-nın (Beynəlxalq Yük Ekspeditorları Assosasiyaları Federasiyası - International Federation of Freight Forwarders Associations) üzvüdür.  Dünyanın 150 ölkəsinin milli ekspeditor birliklərini birləşdirən bu  beynəlxalq təşkilat BMT-nin İqtisadi və Sosial Şurasında, Ticarət və İnkişaf üzrə Konfransında, BMT-nin Beynəlxalq Ticarət Hüquqları Komissiyasında məsləhətçi statusuna malikdir.</p>
                            <p>2019-cu ildə fəaliyyətə başlamış şirkətin Bakı və Azərbaycanın əksər bölgələrində lisenziyalı regional ofisləri fəaliyyət göstərir. Limak.az 7/24 rejimdə fəaliyyət göstərən heyəti ilə bu günə qədər 50 mindən artıq istifadəçinin 300 mindən çox bağlamasını təhvil verib. Şirkətin peşəkar müştəri xidmətləri  *9595 çağrı mərkəzi və bütün sosial platformalardakı online xidmətləri ilə yüksək müştəri məmnuniyyətini təmin edir.</p>
                            <p>Şirkət Azərbaycan qanunvericiliyi ilə qadağan olunmamış hər növ yükün xarici ölkələrdən Azərbaycana və ölkə daxilində müxtəlif istiqamətlərə qapıya çatdırılması ilə məşğul olur. Eyni zamanda İATA akredditə olunmuş yük agenti olaraq, Azərbaycandan daşınması xüsusi sertifikat tələb edən yüklərin İATA zəmanəti altında daşınmasını təmin edir.</p>
                            <p>"Limak.az" kargo şirkəti müştərilərinə anbar, ünvanda təhvil vermə, havayolu karqo, kütləvi göndərişlərin və poçtdaşımalarının çatdırılması və qida maddələrinin daşınması xidmətlərini təklif edir.</p>
                            <h3>“Sifariş et” xidməti</h3>
                            <p>"Limak.az" müştərilərinə “Sifariş et” xidmətini təklif edir.  Bu xidmətdən istifadə edən istifadəçilər xarici elektron ticarət platformalarından rahat və tam təminatlı alış-veriş edir. Bağlamaların Azərbaycanda seçilmiş anbara, KARGOMAT ağıllı poçt terminalına çatdırılması və ya ölkədaxili kuryer xidməti vasitəsilə ünvana təslim edilməsi təmin edilir.

                                “Limak.az" saytı vasitəsilə rəsmiləşdirilən bütün sifarişlərdə təhlükəsizlik qaydalarına tam əməl edilməsi, məlumatların qorunmasına təminat verilir. İstifadəçilər "Limak.az"ın yaratdığı imkanlarla alış-veriş və bağlamanın çatdırılma prosesini izləyə bilirlər.</p>
                            <h3>Anbar xidməti</h3>
                            <p>"Limak.az" xarici elektron ticarət platformalarından alış-veriş edən şəxslərə bu ölkələrdə anbar xidməti göstərir. Hazırda şirkətin Türkiyə və Amerika Birləşmiş Ştatlarında anbarları fəaliyyət göstərir.

                                Şirkət Azərbaycan qanunvericiliyi ilə qadağan olunmayan istənilən növ yükün qəbulu, çeşidlənməsi, təkrar qablaşdırılması, göndərilməsi və çatdırılması xidmətini təklif edir. Şirkət bağlamaların tam təhlükəsiz, peşəkar qablaşdırma və çatdırılma qaydaları ilə təhvil verilməsinə zəmanət verir.  İstifadəçilərə bağlamaların təhlükəsizliklə yanaşı, həm də ən qısa müddət ərzində təhvil verilməsinə zəmanət verilir.</p>
                            <h3>Ünvanda təhvil verilmə xidməti</h3>
                            <p>"Limak.az"  Azərbaycan qanunvericiliyi ilə qadağan olunmamış yüklərin ölkə daxilində təhlükəsiz və sürətli çatdırılmasını təmin edir. Azərbaycanda lisenziyalı bölgə ofisləri fəaliyyət göstərən yeganə yükdaşıma şirkəti olaraq, "Limak.az" müştərilərinə xarici ölkələrdən olan göndərişlərin ölkənin istənilən bölgəsinə ən qısa zamanda çatdırılmasını təmin edir.

                                "Limak.az" müştərilərinə eyni zamanda xüsusi kuryer xidməti də təklif edir.  Ölkədaxili və ölkələrarası olaraq təklif edilən bu xidmətdən istifadə edənlərə xüsusi təhkim olunmuş peşəkar kuryerlər vasitəsilə bağlamaların birbaşa, tam təhlükəsiz və qısa zamanda çatdırılmasına zəmanət verilir.

                                Şirkətimiz, həmçinin, kütləvi poçt göndərişlərinin qısa müddətdə ölkənin bütün bölgələrinə çatdırılmasını təmin edir. Kütləvi göndərişləri üçün korporativ müştərilərə xüsusi tariflər təqdim olunur.</p>
                            <h3>Havayolu karqo xidməti</h3>
                            <p>"Limak.az" hava nəqliyyatı yükdaşımaları ilə məşğul olan şirkətlərin beynəlxalq standartlarını müəyyən edən Beynəlxalq Hava Nəqliyyatı Asossiasiyasının (İATA) akredditə olunmuş yük agenti olaraq, dünyada Azərbaycan qanunvericiliyi ilə qadağan olunmayan hər növ və çəkidə yükün hava yolu ilə dünyanın istənilən ölkəsinə göndərilməsini təmin edir.

                                Şirkətimiz dünya standartlarına uyğun daşıma təcrübəsinə malik peşəkar heyəti ilə bağlamaların Azərbaycanda istənilən ünvandan təhvil alaraq xaricdəki istənilən ünvana təhvil verilməsini təmin etmək əzmindədir.

                                Eyni zamanda İATA və FİATA sertifikatlarına malik peşəkar heyətimiz müxtəlif kateqoriyadan olan məhsulların daşınması xidmətlərini təklif edir. Beynəlxalq treninqlərdə iştirak etmiş əməkdaşlarımız xüsusi qablaşdırmanın və təcili daşınmanın təhlükəsiz şəkildə həyata keçirməsini təmin edirlər.</p>
                        </div>
                        <div className={styles.image}>
                            <img src="https://limak.az/new_front/assets/img/mascot-full.svg" alt="img" />
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default About
