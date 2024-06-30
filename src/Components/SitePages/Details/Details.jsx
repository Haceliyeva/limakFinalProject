import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import styles from './NewsDetail.module.scss';
import Footer from '../Footer/Footer';
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
import { FaHeart } from "react-icons/fa";
import ToggleMenu from '../../ToggleMenu/ToggleMenu';



const NewsDetail = () => {
    const { id } = useParams();

    const newsDetail = {
        1: {
            id: 1,
            title: "Xarici onlayn saytlardan düzgün hədiyyə seçimi",
            content: "Sevdiklərimizi hədiyyələrlə sevindirək. Ətrafımızdakı insanlara sevgimizi və dəyərimizi göstərməyin ən gözəl yollarından biri onlara hədiyyə almaqdır. Hədiyyə vermək qarşıdakı insanı xoşbəxt etmək və münasibətimizi gücləndirmək üçün ideal yoldur. Hədiyyə seçimi insanın qarşı tərəfi nə qədər yaxından tanıdığına, onun maraqlarına və zövqünə uyğun olmalıdır. Birlikdə keçirilən zaman, həmin insanın maraq və hobbiləri, onun üçün ən uyğun hədiyyənin hansı olduğunu göstərən işarələrdəndir.\n\nDüzgün hədiyyə seçməyin yolları\n\nYaxınlarımıza hədiyyə seçərkən nəyi nəzərə almalıyıq? Gəlin, birlikdə nəzər salaq:Hobbi və maraqlar: İnsanların hobbi və maraqlarına uyğun hədiyyələr seçmək. Məsələn, musiqini sevən biri üçün sevdiyi müğənninin konsertinə bilet ala bilərik.Şəxsi yaddaşlar: Özəl anlar və paylaşılan xatirələr ən qiymətli hədiyyələrdən biridir. Birlikdə çəkilmiş şəkillərdən hazırlanmış albom və ya xüsusi bir şəxsi əşyadan hədiyyələr çox unikal və xoş təəssürat bağışlayır. Təcrübələr: Qeyri-standart hədiyyələr də düşünə bilərik. Spa günləri, yemək dəvətləri, idman kursları və s. insanların yeni təcrübələr yaşamasına kömək edir. Bu cür sürprizlər insanların yaddaşında bir ömür qalaraq onları xüsusi hiss etdirir.\n\nMəişət və texnologiya: Hədiyyə alarkən praktik və istifadəsi asan olan əşyaları nəzərdə saxlaya bilərik. Bu, məsələn, məişət cihazları, mobil aksesuarlar və s. ola bilər.\n\nHədiyyə seçimində əsas olaraq hədiyyənin özündəki məna vacibdir. Bir marka seçərkən məhsulun keyfiyyəti, müştəri xidməti və rəylərə əhəmiyyət verilməliyik. Türkiyə saytlarından ideal hədiyyələr\n\nHər kəsə məlumdur ki, online alış-veriş günü-gündən artmaqdadır. Artıq insanların əksəriyyəti ehtiyaclarını mağazalardan deyil, internet vasitəsi ilə asanlıqla əldə edirlər. Çiçek sepeti: Türkiyənin ən məşhur saytlarından biridir. Burada hədiyyə, çiçək, şokolad setləri və hədiyyə alacağımız insanın adına özəl məhsullar sifariş etmək olur. Trendyol: Hər növ məhsulu asanlıqla tapmaq mümkündür. Alıcıların məhsul barədə göndərdikləri şəkil və fikirlər sayəsində sifarişin bizə uyğun olub-olmadığını asanlıqla müəyyən edə bilərik.Hediye sepeti: Hər növ kreativ hədiyyələr var. Bu saytda kimə hədiyyə alacağımızdan tutmuş, (ana, uşaq, həkim, mühəndis və s.) nə alacağımıza qədər bol hədiyyə seçimləri təklif edilir. Muhiku.com: 50-dən çox kateqoriya, 2000-dən çox hədiyyə ilə axtardığımız kreativ məhsulları əldə edə bilərik. Limak.az ilə Amerikadan kreativ hədiyyə sifarişi.Amerikadan məhsul sifariş etmək indi çox asandır. Çünki Limak karqo şirkəti olaraq Amerika sifarişlərinizi güvənli və sürətli şəkildə çatdırırıq. Sizə Amerikadan hədiyyə ala biləcəyiniz ən məşhur markaları topladıq: Shein: Milyonlarla insanın istifadə etdiyi bu saytda hər növ geyim, ayaqqabı, aksesuar, makiyaj vasitələri və s. tapmaq mümkündür.ASOS: 800 brenddən çox bu saytda axtardığımız geyim, ayaqqabı, üz-bədən məhsulları və digər məhsullar ala bilərik.Etsy: Kreativ və standart olmayan hədiyyələrin ünvanı Etsy saytındadır. Burada bir-birindən maraqlı uşaqlar və böyüklər üçün unikal, əl işi hədiyyələr var. Amazon: Amerikanın ən məşhur saytı Amazonda geyim, ayaqqabılardan əlavə, video oyunlar, ev dekorasiyaları və s. uyğun qiymətə əldə etmək olar. Wallmart: Hədiyyə seçimi üçün çox fikirləşməyin. Axtardığımız istənilən məhsulu münasib qiymətə Wallmart-dan tapa bilərik. Əzizlərinizi sevindirmək üçün xüsusi günləri gözləməyin. İstədiyiniz hədiyyələri seçin, Limak.az sürətli sizə çatdırsın! Seçdiyiniz məhsulların linkini bizə göndərməklə sifarişlərinizi SifarişEt xidmətimizə həvalə edin. Amerika və Türkiyədən gələn bağlamalarınızı filiallardan, kuryerlərimizdən və ya kargomatlardan təhvil ala bilərsiniz. Trendyolsifarişlərinizin də birbaşa ünvana çatdırılmasında güvənli və sürətli Limak sizinlədir. Uzağı yaxın etdik!",
            imageUrl: "https://limakaz.s3.eu-west-2.amazonaws.com/public/news/news-171768033940340.png.jpeg",
            date: "2024-06-06 17:25:39",

        },
        2: {
            id: 2,
            imageUrl: "https://limakaz.s3.eu-west-2.amazonaws.com/public/news/news-171690338367025.png.jpeg",
            title: "Məşhur markaların gün eynəkləri",
            date: "2024-05-28 17:36:24",
            content: "Niyə gün eynəyi taxmalıyıq? Günəş eynəyi yalnız günəş işığının zərərli təsirlərindən qorunmaq üçün deyil, həm də insanın üslubunu əks etdirən əvəzolunmaz bir parçadır. Günəşin yaydığı ultrabənövşəyi şüalar göz sağlamlığına təhlükəlidir. Bu təhlükədən qorunmaq üçün gün eynəyindən mütləq istifadə etməliyik. Aksesuar olaraq da istifadə edilən gün eynəkləri arasından tərzimizə uyğun modeli seçərək həm riskləri azalda, həm də stilimizi qoruyub saxlaya bilərik. Original günəş eynəklərini necə müəyyən edə bilərik?  İlk növbədə eynək alarkən tanınmış brendlərin satış mağazalarına müraciət etməliyik. Gucci, Calvin&Klein, Armani, Ray-Ban, Prada, Miu Miu, Burberry, Versace kimi markalar original və ən çox tələb olunan markalardır. CE işarəsi onun Avropa İttifaqı standartlarına uyğun istehsal edildiyi barədə məlumat verir. Original gün eynəklərində bu işarənin olduğundan əmin ola bilərik. Günəş eynəyi seçərkən UV təbəqəsi və polarizasiya sistemli şüşə xüsusiyyətli eynəkləri nəzərə almalıyıq. Çünki onlar gözlərimizi günəşin zərərli şüalarından qoruyur. Orijinal eynəklər şaquli obyektləri qırılmalara səbəb olmadan görməyə imkan verir. Eynəyin orijinal olub-olmadığını yoxlamaq üçün şaquli naxışa baxa bilərik. Üstəlik, keyfiyyətli eynəklər üzə mükəmməl uyğunlaşır. Ən yaxşı günəş eynəyi markalarının üzərində marka loqosu var. Çox kiçik bir loqo olsa belə, onu işığa tutduğunuz anda görə bilərik. 2024-cü ilin trend eynəkləri hansılardır? Trendə uyğun gün eynəkləri arasında üz formamıza uyğun olanları seçməliyik. Bu, həm stilimizi tamamlayacaq, həm də üz cizgilərimizi balanslaşdıracaq. Sizin üçün fərqli üz formalarına uyğun trenddə olan günəş eynəyi modellərini aşağıda sıralamışıq: Kvadrat və ya Düzbucaqlı Çərçivələr: Bucaq çərçivələr üzümüzün dəyirmi strukturunu tarazlaşdırmaq üçün çox yaxşı seçim ola bilər.Böyük və ya Görkəmli Çərçivələr: Üzümüzün daha incə və uzun görünməsi üçün böyük çərçivələr mütləqdir. Eni və Hündürlük balansı: Dəyirmi və ya oval çərçivələr üzümüzün kəskin xəttlərini yumşaltmaq üçün çox yaxşı seçimdir. Çərçivə Kənarındakı Detallar: Çərçivə kənarında yuvarlaqlaşdırılmış və ya oval detalları olan modellər üz cizgilərimiz üçün daha uyğundur. Xaricdən eynək sifarişi | Ən son texnologiyalar və Limak.az ilə sürətli daşınma xidməti Xəyallarınızdakı eynəkləri tapmaq artıq çox asandır! Eynək seçiminizi daha asan və əyləncəli etmək üçün ən son texnologiyalar və yenilikləri bu məqalədə oxuya bilərsiniz. Virtual sınaqdan reallığa qədər hər şey barədə məlumat toplaya və Limak.az ilə eynəklərinizi sürətli və etibarlı şəkildə əldə edə bilərsiniz. Artıq mağazalara getmədən, eynəkləri üzərinizdə necə göründüyünü yoxlaya bilərsiniz. Warby Parker və Zenni Optical kimi onlayn mağazalarda bu texnologiya mövcuddur. İstədiyimiz eynəyi seçib, üzümüzdə necə göründüyünü vizual olaraq test edə bilərik.  Amazon və eynəklər üzrə ixtisaslaşmış saytlar 3D modelləşdirmə texnologiyasından istifadə edərək, eynəklərin fərqli baxış bucaqlarından necə göründüyünü göstərir. Artırılmış reallıq (AR) texnologiyası ilə eynəkləri real vaxtda üzümüzdə sınaqdan keçirə bilərik. Bu texnologiya, xüsusilə tətbiqlər vasitəsilə mobil cihazlarda istifadə edilir. Keyfiyyətli və rahat eynəkləri necə seçmək olar? 1. Keyfiyyət və Marka: Tanınmış brendlərdən eynək seçmək, həm üslub, həm də göz sağlamlığı baxımından vacibdir. Gucci, Calvin&Klein, Armani, Ray-Ban və Prada kimi markalar yüksək keyfiyyəti ilə seçilir.2. Linzaların Xüsusiyyətləri: Mavi işıq filtrli və polarizə linzalar, gözlərinizin rahatlığını və təhlükəsizliyini təmin edir. 3. Rahatlıq və Uyğunluq: Eynəyin üz quruluşunuza uyğun olması vacibdir. Bu, uzun müddət istifadədə rahatlıq təmin edir. Limak.az ilə eynək sifarişi: tez, etibarlı və asan! Limak.az, xaricdən eynək sifarişlərinizi Azərbaycana təhlükəsiz və tez bir şəkildə çatdırır. Bizim xidmətlərimiz:- Tez və Etibarlı Çatdırılma: Eynəklərinizin tez bir zamanda və zərər görmədən çatdırılması təmin edilir.- Geniş Əhatə Dairəsi: ABŞ və Türkiyədən istənilən məhsulu sifariş edə bilərsiniz.- Müştəri Dəstəyi: *9595 çağrı mərkəzi və sosial media platformalarında peşəkar müştəri xidmətləri ilə yüksək məmnuniyyət təmin edirik. Seçdiyiniz məhsulların linkini bizə göndərməklə sifarişlərinizi SifarişEt xidmətimizə həvalə edin. Amerika və Türkiyədən gələn bağlamalarınızı filiallardan, kuryerlərimizdən və ya kargomatlardan təhvil ala bilərsiniz. Trendyolsifarişlərinizin də birbaşa ünvana çatdırılmasında güvənli və sürətli Limak sizinlədir. Uzağı yaxın etdik! "
        },
        3: {
            id: 3,
            title: "Trend eynəklər onlay...",
            imageUrl: "https://limakaz.s3.eu-west-2.amazonaws.com/public/news/news-169504100263443.png.jpeg",
            date: "2023-10-25 11:28:27",
            content: "Haber içeriği 3"
        },
        4: {
            id: 4,
            title: "Kargomat xidmətindən...",
            imageUrl: "https://limakaz.s3.eu-west-2.amazonaws.com/public/news/news-169277271683791.png.jpeg",
            date: "2023-10-25 10:38:36",
            content: "Haber içeriği 4"
        },
        5: {
            id: 5,
            title: "Qurban bayraminda qe...",
            imageUrl: "https://limakaz.s3.eu-west-2.amazonaws.com/public/news/news-171827962798462.png.jpeg",
            date: "2024-06-13 15:53:47",
            content: "Haber içeriği 1"
        },
        6: {
            id: 6,
            title: "Ramazan bayraminda q...",
            imageUrl: "https://limakaz.s3.eu-west-2.amazonaws.com/public/news/news-171256877480420.png.jpeg",
            date: "2024-04-08 13:32:56",
            content: "Haber içeriği 2"
        },
        7: {
            id: 7,
            title: "Biznes qadınları üçü...",
            imageUrl: "https://limakaz.s3.eu-west-2.amazonaws.com/public/news/news-170869741148645.png.jpeg",
            date: "2024-02-23 18:10:11",
            content: "Haber içeriği 3"
        },
        8: {
            id: 8,
            title: "Yeni il bayramınız m...",
            imageUrl: "https://limakaz.s3.eu-west-2.amazonaws.com/public/news/news-170383622116394.png.jpeg",
            date: "2024-12-29 11:50:21",
            content: "Haber içeriği 4"
        },
        9: {
            id: 9,
            title: "Limak anbarlarında q...",
            imageUrl: "https://limakaz.s3.eu-west-2.amazonaws.com/public/news/news-170383551669065.png.jpeg",
            date: "2023-12-29 11:34:46",
            content: "Haber içeriği 4"
        },
        10: {
            id: 10,
            title: "Axtardığınız kitabla...",
            imageUrl: "https://limakaz.s3.eu-west-2.amazonaws.com/public/news/news-170350665917947.png.jpeg",
            date: "2023-12-25 16:05:33",
            content: "Haber içeriği 4"
        },
        11: {
            id: 11,
            title: "Yeni ünvanlarda xidm...",
            imageUrl: "https://limakaz.s3.eu-west-2.amazonaws.com/public/news/news-170229001039888.png.jpeg",
            date: "2023-12-11 12:19:45",
            content: "Haber içeriği 4"
        },
        12: {
            id: 12,
            title: "Yeni il atmosferini...",
            imageUrl: "https://limakaz.s3.eu-west-2.amazonaws.com/public/news/news-170229681812672.png.jpeg",
            date: "2023-12-11 15:58:26",
            content: "Haber içeriği 4"
        },
        13: {
            id: 13,
            title: "Trendyoldan birbaş...",
            imageUrl: "https://limakaz.s3.eu-west-2.amazonaws.com/public/news/news-170186316192085.png.jpeg",
            date: "2023-12-06 15:18:21",
            content: "Haber içeriği 4"
        },
        14: {
            id: 14,
            title: "Amerikadan Azərbayca...",
            imageUrl: "https://limakaz.s3.eu-west-2.amazonaws.com/public/news/news-170106901117608.png.jpeg",
            date: "2023-11-27 11:02:09",
            content: "Haber içeriği 4"
        },
        15: {
            id: 15,
            title: "Limak anbarlarında...",
            imageUrl: "https://limakaz.s3.eu-west-2.amazonaws.com/public/news/news-169943015026639.png.jpeg",
            date: "2023-11-08 11:55:50",
            content: "Haber içeriği 4"
        },
    };



    const navigation = useNavigate()



    const selectedNews = newsDetail[id];


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
                                    <p>DAXİL OL</p>
                                </div>
                            </div>
                            <div className={styles.bars}>
                            <ToggleMenu />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.newsDetail}>
                <div className={styles.container}>
                    <div className={styles.newsTopTexts}>
                        <h2>ÖLKƏLƏR ÜZRƏ TARİFLƏR</h2>
                        <div className={styles.homePageTexts}>
                            <a href="/homepage">Ana səhifə</a>
                            <li><IoIosArrowForward /></li>
                            <p>Tariflər</p>
                        </div>
                    </div>
                    <div className={styles.newsCart}>
                        <img src={selectedNews.imageUrl} alt="img" />
                        <div className={styles.bottomTexts}>
                            <h2>{selectedNews.title}</h2>
                            <p>{selectedNews.content}</p>
                            <div className={styles.newsTexts}>
                                <img src="https://limak.az/new_front/assets/img/icons/calendar.svg" alt="Tarih" />
                                <p>{selectedNews.date}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NewsDetail;
