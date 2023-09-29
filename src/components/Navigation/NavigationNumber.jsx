import React, { useEffect, useRef } from 'react'
import styles from './Navigation.module.scss'
import cn from 'classnames'
import { testStore } from '../../store/test-store';
import { observer } from 'mobx-react';

const NavigationNumber = ({ setMarkLeft, data }) => {
    const { activeQuestion } = testStore;
    const ref = useRef();
    useEffect(() => {
        if (activeQuestion === data.id) {
            setMarkLeft(ref.current.offsetLeft + ref.current.offsetWidth / 2)
        }
    })
    return (
        <div
            ref={ref}
            className={cn(styles.navigation__number, { [styles.active]: activeQuestion === data.id })}>
            {data.id + 1}
        </div>
    )
}

export default observer(NavigationNumber) 