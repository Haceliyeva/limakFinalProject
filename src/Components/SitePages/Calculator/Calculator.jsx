import React, { useState } from 'react';
import styles from './Calculator.module.scss';
import { IoLocationSharp } from "react-icons/io5";
import { FaClock, FaPhoneVolume, FaInstagram, FaTelegram, FaBars, FaRegUser, FaCartPlus } from "react-icons/fa";
import { IoLogoFacebook, IoIosArrowForward } from "react-icons/io";
import { AiFillYoutube } from "react-icons/ai";
import { RiSearchLine } from "react-icons/ri";
import { useNavigate } from 'react-router-dom';
import Footer from '../../HomePage/Footer/Footer';
import { FaHeart } from "react-icons/fa";
import ToggleMenu from '../../ToggleMenu/ToggleMenu';


const calculateShippingCost = (weight, length, width, height, packageCount, packagingType, currency) => {
    const basePrice = 10;
    const weightPrice = parseFloat(weight) * 2;
    const dimensionPrice = (parseFloat(length) * parseFloat(width) * parseFloat(height)) / 5000;
    const packageCountPrice = packageCount * 5;
    let total = basePrice + weightPrice + dimensionPrice + packageCountPrice;

    if (packagingType === 'maye') {
        total += 10;
    }

    if (currency === 'USD') {
        total = total / 1.7;
    }

    return total.toFixed(2);
};

const Calculator = () => {

    const navigation = useNavigate()

    const navugate = useNavigate()

    const reg = () => {
        navugate('/register')
    }

    const [country, setCountry] = useState('Turkey');
    const [weight, setWeight] = useState('');
    const [length, setLength] = useState('');
    const [width, setWidth] = useState('');
    const [height, setHeight] = useState('');
    const [city, setCity] = useState('Baku');
    const [packageCount, setPackageCount] = useState(1);
    const [packagingType, setPackagingType] = useState('standard');
    const [currency, setCurrency] = useState('AZN');
    const [result, setResult] = useState(null);
    const [error, setError] = useState('');

    const handleCalculate = () => {
        if (!weight || !length || !width || !height) {
            setError('Xahiş olunur bütün hissələri doldurun.'); 
            return;
        }

        const total = calculateShippingCost(weight, length, width, height, packageCount, packagingType, currency);
        setResult(total);
        setError('');
    };

    const handleReset = () => {
        setWeight('');
        setLength('');
        setWidth('');
        setHeight('');
        setPackageCount(1);
        setPackagingType('standard');
        setResult(null);
        setError('');
    };
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
                                    <li onClick={() => navigation('/basket')}><a href="#"><FaCartPlus /></a></li>
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
            <div className={styles.homepage}>
                <div className={styles.container}>
                    <div className={styles.calculatorTopTexts}>
                        <h2>Kalkulyator</h2>
                        <div className={styles.homePageTexts}>
                            <a href="/homepage">Ana səhifə</a>
                            <li><IoIosArrowForward /></li>
                            <p>Tariflər</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.limakCalculator}>
            <div className={styles['limak-kargo-calculator']}>
                <h2>Kalkulyator</h2>
                <label>
                    Ölkə:
                    <select value={country} onChange={(e) => setCountry(e.target.value)}>
                        <option value="Turkey">Türkiyə</option>
                        <option value="USA">Amerika</option>
                    </select>
                </label>
                <br />
                <label>
                    Çəki (kq):
                    <input type="number" value={weight} onChange={(e) => setWeight(e.target.value)} />
                </label>
                <br />
                <label>
                    Uzunluq (sm):
                    <input type="number" value={length} onChange={(e) => setLength(e.target.value)} />
                </label>
                <br />
                <label>
                    En (sm):
                    <input type="number" value={width} onChange={(e) => setWidth(e.target.value)} />
                </label>
                <br />
                <label>
                    Yüksəklik (sm):
                    <input type="number" value={height} onChange={(e) => setHeight(e.target.value)} />
                </label>
                <br />
                <label>
                    Şəhər:
                    <select value={city} onChange={(e) => setCity(e.target.value)}>
                        <option value="Bakı-İçərişəhər">Bakı</option>
                        <option value="Xalqlar Dostluğu">Xalqlar Dostluğu</option>
                        <option value="Xırdalan">Xırdalan</option>
                        <option value="Sumqayıt">Sumqayıt</option>
                        <option value="Gəncə">Gəncə</option>
                        <option value="Zaqatala">Zaqatala</option>
                        <option value="Balakən">Balakən</option>
                        <option value="Bakı - Gənclik">Bakı - Gənclik</option>
                        <option value="Bakıxanov">Bakıxanov</option>
                        <option value="Xətai">Xətai</option>
                        <option value="İnşaatçılar">İnşaatçılar</option>
                        <option value="Badamdar">Badamdar</option>
                        <option value="Hezi Aslanov">Həzi Aslanov</option>
                    </select>
                </label>
                <br />
                <label>
                    Bağlama Sayı:
                    <input type="number" value={packageCount} onChange={(e) => setPackageCount(e.target.value)} />
                </label>
                <br />
                <label>
                    Bağlama növü:
                    <select value={packagingType} onChange={(e) => setPackagingType(e.target.value)}>
                        <option value="standard">Standart</option>
                        <option value="maye">Maye</option>
                    </select>
                </label>
                <br />
                <label>
                    Pul növü:
                    <select value={currency} onChange={(e) => setCurrency(e.target.value)}>
                        <option value="AZN">AZN</option>
                        <option value="USD">$ (USD)</option>
                    </select>
                </label>
                <br />
                <button onClick={handleCalculate}>Hesabla</button>
                <button onClick={handleReset}>Kalkulyatoru Sıfırla</button>
                <br />
                {result && (
                    <div className={styles.result}>
                        <h3>Nəticə:</h3>
                        <p>
                            Cəm: {result} {currency}
                        </p>
                    </div>
                )}
                {error && <div className={styles.error}>{error}</div>}
            </div>
            </div>
            <div className={styles.texts}>
               <div className={styles.container}>
               <h3>Qeyd:</h3>
               <p>Ölçüsü 60 sm və 60 sm-dən böyük olan bağlamaların daşınma haqqı həcm və fiziki çəki əsasında hesablanır. Alınan göstəricilərdən böyük olanı daşınma haqqının hesablanması üçün əsas kimi qəbul edilir.</p>
               </div>
            </div>
            <Footer/>
        </div>
    );
}

export default Calculator;
