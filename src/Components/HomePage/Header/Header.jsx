import React, { useState } from "react";
import styles from "./Header.module.scss";
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
import { Navigate, useNavigate } from "react-router-dom";
import { FaHeart } from "react-icons/fa";
import authSlice from "../../../Redux/Slices/authSlice";
import { useDispatch, useSelector } from "react-redux";
import ToggleMenu from "../../ToggleMenu/ToggleMenu";
const Header = () => {
  const navigate = useNavigate();
  const { userInfo } = useSelector((state) => state.auth);

  const dispatch = useDispatch();
  const reg = () => {
    navigate("/register");
  };

  const navigation = useNavigate();

  return (
    <div className={styles.header}>
      <div className={styles.headerTop}>
        <div className={styles.container}>
          <div className={styles.iconTexts}>
            <div className={styles.iconText}>
              <li>
                <IoLocationSharp />
              </li>
              <p>Səbail rayonu, Lermontov küç. 40A</p>
            </div>
            <div className={styles.iconText}>
              <li>
                <FaClock />
              </li>
              <p>Bazar ertəsi-şənbə</p>
            </div>
            <div className={styles.iconText}>
              <li>
                <FaPhoneVolume />
              </li>
              <a href="#">*9595</a>
            </div>
          </div>
          <div className={styles.icons}>
            <a href="https://www.facebook.com/Limakaz/">
              <IoLogoFacebook />
            </a>
            <a href="https://www.instagram.com/limak.az/">
              <FaInstagram />
            </a>
            <a href="https://t.me/limak_az">
              <FaTelegram />
            </a>
            <a href="https://www.youtube.com/channel/UCz0okQvJ53Ml9agfGGjgyVg">
              <AiFillYoutube />
            </a>
          </div>
        </div>
      </div>
      <div className={styles.headerBottom}>
        <div className={styles.container}>
          <img src="https://limak.az/new_front/assets/logo.svg" alt="img" />
          <div className={styles.nav}>
            <ul>
              <li>
                <a href="/tariffs">TARİFLƏR</a>
              </li>
              <li>
                <a href="/calculator">KALKULYATOR</a>
              </li>
              <li>
                <a href="/stores">MAĞAZALAR</a>
              </li>
              <li>
                <a href="/updates">XƏBƏRLƏR</a>
              </li>
              <li>
                <a href="/contact">ƏLAQƏ</a>
              </li>
              <li>
                <a href="/kargomat">KARGOMAT</a>
              </li>
            </ul>
          </div>
          <div className={styles.userBars}>
            <div className={styles.headerBottomRight}>
              <ul>
                <li>
                </li>
                <li onClick={() => navigation("/basket")}>
                  <a href="#">
                    <FaCartShopping />
                  </a>
                </li>
                <li>
                </li>
                <div className={styles.user}>
                  <li>
                    <a href="#">
                      <FaRegUser onClick={() => navigation('/profile')}/>
                    </a>
                  </li>
                </div>
              </ul>
              <div className={styles.button}>
                {userInfo ? (
                  <p onClick={() => navigate("/profile")}>Profil</p>
                ) : (
                  <p onClick={reg}>DAXİL OL</p>
                )}
              </div>
            </div>
            <div className={styles.bars}>
              <ToggleMenu />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
