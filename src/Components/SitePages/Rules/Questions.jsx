import React from 'react'
import styles from './Questions.module.scss'
import Footer from '../../HomePage/Footer/Footer'
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
import { FaHeart } from "react-icons/fa";
import ToggleMenu from '../../ToggleMenu/ToggleMenu';



const Questions = () => {

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
                                <div className={styles.country}>
                                    <img src="https://upload.wikimedia.org/wikipedia/en/thumb/f/f3/Flag_of_Russia.svg/1200px-Flag_of_Russia.svg.png" alt="img" />
                                    <p>RU</p>
                                </div>
                                <ul>
                                    <li onClick={() => navigation('/basket')} ><a href="#"><FaCartShopping /></a></li>
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
            <div className={styles.rules}>
                <div className={styles.container}>
                    <div className={styles.countriesTopTexts}>
                        <h2>Suallar</h2>
                        <div className={styles.homePageTexts}>
                            <a href="/homepage">Ana səhifə</a>
                            <li><IoIosArrowForward /></li>
                            <p>Xəbərlər</p>
                        </div>
                    </div>
                    <div className={styles.texts}>
                        <div className={styles.text}>
                            <h3>Nə qədər məbləğdə sifariş edə bilərəm?</h3>
                            <p>Azərbaycan Respublikası qanunvericiliyinə görə, fiziki şəxslər 30 təqvim günü ərzində kommersiya məqsədi olmadan 300 ABŞ dolları məbləğində rüsumsuz limitdən istifadə edə bilərlər.</p>
                        </div>
                        <div className={styles.text}>
                            <h3>Sizdə “application” var?</h3>
                            <p>Bəli, var. İOS və Android plaformalı cihazlar üçün təqdim etdiyimiz , “application” vasitəsilə sifarişlərinizi rahatlıqla edə bilər və bağlamalarınızı izləyə bilərsiniz.</p>
                        </div>
                        <div className={styles.text}>
                            <h3>Çatdırılma və malların təhvil verilməsi necə həyata keçirilir ?</h3>
                            <p>Türkiyədən həftədə 5 dəfə, Amerikadan isə həftədə 1 dəfə daşınma həyata keçirilir. Bağlamalar ofislərimizə daxil olduqdan sonra, çeşidlənərək təhvil verilməyə başlanır.</p>
                        </div>
                        <div className={styles.text}>
                            <h3>Azərbaycan kartlarını qəbul etməyən saytlardan necə sifariş edə bilərəm ?</h3>
                            <p>Əgər sizin kartınız alış-veriş etmək istədiyiniz saytda qəbul olunmursa, o zaman biz sizə Amerika və Türkiyədən "Sifariş et" xidmətimizi təklif edirik. Seçdiyiniz məhsulların linkini "Sifariş et" bölməsinə daxil olaraq yerləşdirməyiniz mümkündür. Sistem sizə məhsulun qiyməti, rəngi, ölçüsü və qeyd xanasında qeydlərinizi bildirmək üçün xanalar təqdim edəcək. Həmin xanalara məlumatları qeyd etdikdən sonra Türkiyə üçün 5% , Amerika üçün 7% ələvə komissiya haqqı ilə birgə ödəniş sizə təqdim olunacaq və məhsullarınız biz tərəfdən sifariş ediləcək.</p>
                        </div>
                        <div className={styles.text}>
                            <h3>Sifarişim neçə günə çatdırılır ?</h3>
                            <p>Çatdırılma müddəti sifariş verdiyiniz saytdan asılıdır. Satıcı firmalarda çatdırılma müddəti 3-7 gün olur. Həftə sonları və rəsmi bayram günləri çatdırılma müddətini uzada bilər. Satıcı firma sizin sifarişinizi bizim xaricdəki anbarımıza çatdırdıqdan sonra Türkiyədən 2 iş günü, Amerikadan isə 4-6 iş günü müddətində yerli anbara çatdırılır.</p>
                        </div>
                        <div className={styles.text}>
                            <h3>Çatdırılma haqqı necə hesablanır ?</h3>
                            <p>Sifariş olunan bağlamanın çatdırılma haqqı çəkiyə görə hesablanır.

                                Ölçüsü 60 sm və 60 sm-dən böyük olan bağlamaların daşınma haqqı həcm və fiziki çəki əsasında hesablanır. Alınan göstəricilərdən böyük olanı daşınma haqqının hesablanması üçün əsas kimi qəbul edilir.</p>
                        </div>
                        <div className={styles.text}>
                            <h3>"Türkiyə içi kargo" və "Amerika içi kargo" nədir?</h3>
                            <p>Sizin istənilən ölkədəki saytdan etdiyiniz sifarişin bizim həmin ölkədəki anbarımıza çatdırılması həmin ölkədəki kuryer şirkətləri tərəfindən həyata keçirilir. O şirkətlər bağlamanızı çatdırmaq üçün müəyyən məbləğ tələb edirlər. Həmin məbləğ məhsul sifariş etdiyiniz saytlarda görünür. Bəzi saytlarda alış-verişinizin məbləği yüksək olduqda ölkədaxili karqo pulu alınmır.</p>
                        </div>
                        <div className={styles.text}>
                            <h3>Sifarişim neçə günə çatdırılır ?</h3>
                            <p>Çatdırılma müddəti sifariş verdiyiniz saytdan asılıdır. Satıcı firmalarda çatdırılma müddəti 3-7 gün olur. Həftə sonları və rəsmi bayram günləri çatdırılma müddətini uzada bilər. Satıcı firma sizin sifarişinizi bizim xaricdəki anbarımıza çatdırdıqdan sonra Türkiyədən 2 iş günü, Amerikadan isə 4-6 iş günü müddətində yerli anbara çatdırılır.</p>
                        </div>
                        <div className={styles.text}>
                            <h3>Kartımdan nə qədər pul çıxacaq?</h3>
                            <p>Sifariş verərkən kartınızdan kəsiləcək tranzaksiya faizi kartınızın aid olduğu bank tərəfindən müəyyənləşdirilir.</p>
                        </div>
                        <div className={styles.text}>
                            <h3>Bağlamamı başqası təhvil ala bilər?</h3>
                            <p>Bağlamanı təhvil almaq üçün sifarişçi şəxsin şəxsiyyətini təsdiq edən sənəd ( şəxsiyyət vəsiqəsi, tələbə bileti, sürücülük vəsiqəsi və s) özü və ya surəti tələb olunur.</p>
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    )
}

export default Questions
