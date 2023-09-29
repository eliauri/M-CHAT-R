import React from 'react'
import styles from './Navigation.module.scss'
import { testStore } from '../../store/test-store'
import NavigationNumber from './NavigationNumber';

const NavigationNumbers = ({ setMarkLeft }) => {
    const { questions } = testStore;
    return (
        <div className={styles.navigation__list}>
            {questions.map((number) => <NavigationNumber key={number.id} data={number} setMarkLeft={setMarkLeft} />)}
        </div>
    )
}

export default NavigationNumbers