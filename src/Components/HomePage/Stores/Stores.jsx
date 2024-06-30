import React from 'react'
import styles from './Stores.module.scss'
import { useNavigate } from 'react-router-dom'

const Stores = () => {

    const navigation = useNavigate()

    return (
        <div className={styles.stores}>
            <div className={styles.container}>
                <h2>Mağazalar</h2>
                <div className={styles.topImages}>
                <img onClick={() => navigation('/trendyol')} src="https://limakaz.s3.eu-west-2.amazonaws.com/public/shops/255.png" alt="img" />
                    <img onClick={() => navigation('/zerrincan')} src="https://limakaz.s3.eu-west-2.amazonaws.com/public/shops/723.png" alt="img" />
                    <img onClick={() => navigation('/sarar')} src="https://limakaz.s3.eu-west-2.amazonaws.com/public/shops/721.png" alt="img" />
                </div>
                <div className={styles.button}>
                    <button onClick={() => navigation('/stores')}>Daha çox</button>
                </div>
            </div>
        </div>
    )
}

export default Stores





