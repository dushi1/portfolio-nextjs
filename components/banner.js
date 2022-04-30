import React from 'react'
import styles from '../styles/banner.module.css'

const Banner = ({ buttonTxt }) => {
    const handleOnClick = () => {
        console.log('clicked')
    }
    return (
        <div className={styles.container}>
            <h1 className={styles.title} >
                <span className={styles.title1}>Coffee Conniossuer</span>
                <span className={styles.title2}>Locate shops nearby</span>
            </h1>
            <p className={styles.subTitle}>This is a coffee shopp ummmm!!!!</p>
            <button className={styles.button}
                onClick={handleOnClick}
            >{buttonTxt}</button>
        </div>
    )
}

export default Banner