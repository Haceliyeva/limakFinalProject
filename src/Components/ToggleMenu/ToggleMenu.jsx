import React, { useState } from "react";
import style from "./ToggleMenu.module.css";
import { NavLink } from "react-router-dom";
import { FaBars } from "react-icons/fa6";
export default function ToggleMenu() {
    const [isVisible, setVisible] = useState(false);

    return (
        <div className={style.container}>
            <div
                onClick={() => {
                    setVisible(!isVisible);
                }}
                className={style.toggleButton}
            >
                <FaBars />
            </div>
            <div>
                {isVisible ? (
                    <ul className={style.liItems}>
                        <li>
                            <img
                                src="https://limak.az/new_front/assets/img/logo-white.svg"
                                alt="img"
                            />
                        </li>
                        <hr></hr>
                        <li>
                            <NavLink to="/tariffs">Tariflər</NavLink>
                        </li>
                        <hr></hr>
                        <li>
                            <NavLink to="/calculator">Kalkulyator</NavLink>
                        </li>
                        <hr></hr>
                        <li>
                            <NavLink to="/stores">Mağazalar</NavLink>
                        </li>
                        <hr></hr>
                        <li>
                            <NavLink to="/news">Xəbərlər</NavLink>
                        </li>
                        <hr></hr>
                        <li>
                            <NavLink to="/contact">Əlaqə</NavLink>
                        </li>
                        <hr></hr>
                        <li>
                            <NavLink to="/kargomat">Kargomat</NavLink>
                        </li>
                        <hr></hr>
                        <hr></hr>
                        <li>
                            <NavLink to="/basket" className={style.basketBtn}>
                                Sifariş et
                            </NavLink>
                        </li>
                    </ul>
                ) : (
                    ""
                )}
            </div>
        </div>
    );
}
