import React from 'react'
import styles from './Navigation.module.scss'
const NavigationMark = ({ markLeft }) => {
    return (
        <div className={styles.mark} style={{ left: markLeft + 'px' }} > </div>
    )
}

export default NavigationMark