import React from 'react'
import styles from './Test.module.scss'
import Container from '../Container/Container'
import Answer from './Answer'
import { testStore } from '../../store/test-store'
import cn from 'classnames'
import { observer } from 'mobx-react'

const Question = ({ data }) => {
    const answers = [
        {
            id: 0,
            answer: true,
            title: "Да"
        },
        {
            id: 1,
            answer: false,
            title: "Нет"
        },
    ];
    const { transitionActivated } = testStore;
    return (
        <div className={cn(styles.question, { [styles.active]: transitionActivated })}>
            <div className={styles.question__wrapper}>
                <Container>
                    <h2 className={styles.question__title}>{data.title}</h2>
                    {!!data.example && <p className={styles.question__desk}><strong>Пример:</strong> {data.example}</p>}
                    <div className={styles.question__buttons}>
                        {answers.map((answer) => <Answer data={answer} currentAnswer={data.currentAnswer} key={answer.id} />)}
                    </div>
                </Container>
            </div>
        </div>
    )
}

export default observer(Question)