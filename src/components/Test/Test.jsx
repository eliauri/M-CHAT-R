import React from 'react'
import styles from './Test.module.scss'
import Question from './Question'
import { testStore } from '../../store/test-store'
import { observer } from 'mobx-react'
import Navigation from '../Navigation/Navigation'

const Test = observer(() => {
    const { activeDelayQuestion, questions } = testStore;
    return (
        <div className={styles.test__wrapper}>
            <Question data={questions[activeDelayQuestion]} />
            {!!(questions[activeDelayQuestion + 1]) && <Question data={questions[activeDelayQuestion + 1]} />}
            <Navigation />
        </div>
    )
})


export default Test