import React, { useState } from 'react'
import styles from './Navigation.module.scss'
import NavigationNumbers from './NavigationNumbers'
import NavigationMark from './NavigationMark'

const Navigation = () => {
    const [markLeft, setMarkLeft] = useState(0)
    return (
        <div className={styles.navigation}>
            <NavigationNumbers setMarkLeft={setMarkLeft} />
            <NavigationMark markLeft={markLeft} />
        </div>
    )
}

export default Navigation