import React from 'react'
import styles from './Order.module.scss'
import { IoIosLink } from "react-icons/io";
import { useNavigate } from 'react-router-dom';

const Order = () => {

    const navigation = useNavigate()

    return (
        <div className={styles.order}>
            <div className={styles.container}>
                <p>Sifariş vermək <br /> asandır!</p>
                <div className={styles.inputButton}>
                    <input type="text" placeholder='Məhsulun linkini əlavə et' />
                    <li><IoIosLink /></li>
                    <button onClick={() => navigation('/basket')}>SİFARİŞ ET</button>
                </div>
            </div>
        </div>
    )
}

export default Order
