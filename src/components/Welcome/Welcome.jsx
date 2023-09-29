import React from 'react'
import styles from './Welcome.module.scss'
import Container from '../Container/Container'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'
import { testStore } from '../../store/test-store'
import cn from 'classnames'

const Welcome = () => {
    const { testActivated, setTestActive } = testStore;
    return (
        <div className={cn(styles.welcome, { [styles.active]: testActivated })}>
            <div className={styles.welcome__wrapper}>
                <Container>
                    <div className={styles.welcome__desk}>
                        <h1 className={styles.welcome__title}>Аутизм.тест</h1>
                        <p>Здесь вы можете пройти онлайн-версию опросника M-CHAT-R, который позволяет определить риск аутизма у ребенка в возрасте 16-30 месяцев. Он состоит из 20 вопросов для родителей. Обычно ответы на вопросы занимают несколько минут.</p>
                    </div>
                    <div className={styles.welcome__bottom}>
                        <button className={styles.welcome__button} onClick={setTestActive}>Пройти тест
                            <FontAwesomeIcon icon={faChevronDown} size="lg" />
                        </button>
                    </div>
                </Container>
            </div>
        </div>
    )
}

export default Welcome