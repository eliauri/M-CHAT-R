import React from 'react'
import styles from './Result.module.scss'
import Container from '../Container/Container'
import { PDFDownloadLink } from '@react-pdf/renderer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPrint } from '@fortawesome/free-solid-svg-icons'
import { testStore } from '../../store/test-store'
import cn from 'classnames'
import PdfFile from './PdfFile'

const Result = () => {
    const { testResult } = testStore;
    const date = new Date().toLocaleDateString();
    return (
        <div className={cn(styles.result)}>
            <div className={styles.result__wrapper}>
                <Container>
                    <h2 className={styles.result__title}>{testResult.title}</h2>
                    <p className={styles.result__desk}>{testResult.description}</p>
                    <PDFDownloadLink document={<PdfFile date={date} />} className={styles.downloadlLink} fileName={`Kidsi_test_${date}.pdf`}>
                        {({ loading }) =>
                            loading ? 'Загрузка документа...' :
                                <>
                                    <FontAwesomeIcon icon={faPrint} />Скачать результаты теста
                                </>
                        }
                    </PDFDownloadLink>
                </Container>
            </div>

        </div>
    )
}

export default Result