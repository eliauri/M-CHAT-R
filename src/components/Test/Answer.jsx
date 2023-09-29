import React from 'react'
import styles from './Test.module.scss'
import cn from 'classnames'
import { testStore } from '../../store/test-store'

const Answer = ({ data, currentAnswer }) => {
    const { setNextQuestion, increaseScore, transitionActivated } = testStore;
    const handleClick = () => {
        if (currentAnswer === data.answer) {
            increaseScore();
        }
        setNextQuestion(data.answer);
    }
    return (
        <button
            className={cn(styles.question__button, data.answer ? styles.green : styles.red)}
            onClick={handleClick}
            disabled={transitionActivated && true}
        >
            {data.title}
        </button>
    )
}

export default Answer