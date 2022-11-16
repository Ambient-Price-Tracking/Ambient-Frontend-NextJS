import Link from 'next/link'
import React from 'react'
import styles from '../../styles/HomeScreen.module.css'

const HomeScreen = () => {
    return (
        <div className={styles.container}>
        <span className={styles.title}>Life Is Short And The World Is Wide!</span>
        <Link className={styles.subtitle} href='/Pricetracker'>Try Now -<i class={styles.arrow}></i> </Link>

        </div>
    )

}

export default HomeScreen