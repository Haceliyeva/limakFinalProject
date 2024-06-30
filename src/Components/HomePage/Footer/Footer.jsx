import React from 'react'
import styles from './Footer.module.scss'
import { useNavigate } from 'react-router-dom'

const Footer = () => {

    const navigation = useNavigate()

    const openAppStore = () => {
        window.open('https://www.apple.com/app-store/', '_blank');
    };

    const openGooglePlay = () => {
        window.open('https://play.google.com/store/apps/details?id=az.limak', '_blank');
    };

    const openFacebookPage = () => {
        window.open('https://www.facebook.com/Limakaz/', '_blank');
    };

    const openInstagramProfile = () => {
        window.open('https://www.instagram.com/limak.az/', '_blank');
    };

    const openTelegramChannel = () => {
        window.open('https://t.me/limak_az', '_blank');
    };

    const openYoutubeChannel = () => {
        window.open('https://www.youtube.com/channel/UCz0okQvJ53Ml9agfGGjgyVg', '_blank');
    };

    const openTiktokChannel = () => {
        window.open('https://www.tiktok.com/@limak.az?', '_blank');
    };

    return (
        <div className={styles.footer}>
            <div className={styles.container}>
                <div className={styles.topFooter}>
                    <div className={styles.imageTexts}>
                        <div className={styles.footerLeft}>
                            <img onClick={() => navigation('/')} src="https://limak.az/new_front/assets/img/logo-white.svg" alt="img" />
                            <div className={styles.programs}>
                                <img onClick={openAppStore} src="https://limak.az/new_front/assets/img/app-store.svg" alt="img" />
                                <img onClick={openGooglePlay} src="https://limak.az/new_front/assets/img/google-play.svg" alt="img" />
                            </div>
                        </div>
                        <div className={styles.texts}>
                            <div className={styles.footerTexts}>
                                <ul>
                                    <li onClick={() => navigation('/tariffs')}>Tariflər</li>
                                    <li onClick={() => navigation('/calculator')}>Kalkulyator</li>
                                    <li onClick={() => navigation('/stores')}>Mağazalar</li>
                                </ul>
                            </div>
                            <div className={styles.footerTexts}>
                                <ul>
                                    <li onClick={() => navigation('/updates')}>Xəbərlər</li>
                                    <li onClick={() => navigation('/questions')}>Suallar</li>
                                    <li onClick={() => navigation('/about')}>Haqqımızda</li>
                                </ul>
                            </div>
                            <div className={styles.footerTexts}>
                                <ul>
                                    <li onClick={() => navigation('/conditions')}>Gizlilik şərtləri</li>
                                    <li onClick={() => navigation('/contact')}>Əlaqə</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className={styles.footerRight}>
                        <img onClick={() => navigation('/')} src="https://limak.az/new_front/assets/img/hot-line.svg" alt="img" />
                        <div className={styles.programs}>
                            <img onClick={openFacebookPage} src="https://limak.az/new_front/assets/img/icons/facebook.svg" alt="img" />
                            <img onClick={openInstagramProfile} src="https://limak.az/new_front/assets/img/icons/instagram.svg" alt="img" />
                            <img onClick={openTelegramChannel} src="https://limak.az/front/new/img/telegram.png" alt="img" />
                            <img onClick={openYoutubeChannel} src="https://limak.az/new_front/assets/img/icons/youtube.svg" alt="img" />
                            <img onClick={openTiktokChannel} src="https://limak.az/new_front/assets/img/icons/tik-tok.png" alt="img" />
                        </div>
                    </div>
                </div>
                <div className={styles.bottomFooter}>
                    <div className={styles.footerLeft}>
                        <p>© 2019 - 2024 Limak.az | Bütün hüquqlar qorunur</p>
                    </div>
                    <div className={styles.footerRight}>
                        <img src="https://limak.az/new_front/assets/img/visa.svg" alt="img" />
                        <img src="https://limak.az/new_front/assets/img/mastercard.svg" alt="img" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer
