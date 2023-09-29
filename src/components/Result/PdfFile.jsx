import React from 'react'
import { Document, Page, Text, View, StyleSheet, Font, Svg } from '@react-pdf/renderer';
import { testStore } from '../../store/test-store';
// import font1 from '../../assets/fonts/Roboto-Regular.ttf';
// import font2 from '../../assets/fonts/Roboto-Bold.ttf'

const PdfFile = ({ date }) => {
    const { testResultTable, testResult } = testStore;


    Font.register({
        family: 'Roboto', src:
            "https://cdnjs.cloudflare.com/ajax/libs/ink/3.1.10/fonts/Roboto/roboto-medium-webfont.ttf",
        fonts: [
            { src: "https://cdn.jsdelivr.net/npm/@fontsource/roboto@5.0.8/files/roboto-cyrillic-400-normal.woff", fontWeight: 400 },
            { src: "https://cdn.jsdelivr.net/npm/@fontsource/roboto@5.0.8/files/roboto-cyrillic-700-normal.woff", fontWeight: 700 },
        ]
    });

    const styles = StyleSheet.create({
        page: {
            fontSize: 10,
            marginTop: '30px',
            fontWeight: '400',
            paddingHorizontal: '40px',
            fontFamily: 'Roboto',
        },
        header: {
            marginBottom: '10px',
            textAlign: 'right'
        },
        tableContainer: {
            flexDirection: "row",
            flexWrap: "wrap",
        },
        row: {
            flexDirection: "row",
            alignItems: "top",
            marginBottom: "5px",
        },
        id: {
            marginRight: '2px',
            fontWeight: '700'
        },
        title: {
            width: "80%",
            fontWeight: '700',
        },
        answer: {
            width: "3%",
            marginRight: '20px',
            textAlign: 'center'
        },
        result: {
            marginTop: "15px",
            lineHeight: '1'
        },
        result__title: {
            fontWeight: '700',
            marginBottom: '5px'
        },
        date: {
            marginTop: '10px'
        }
    });

    const rows = testResultTable.map((item) => (
        <View style={styles.row} key={item.id}>
            <Text style={styles.answer}>{item.answer ? "ДА" : "НЕТ"}</Text>
            <Text style={styles.id}>{item.id + 1}.</Text>
            <Text style={styles.title}>{item.title}</Text>
        </View>
    ));

    return (
        <Document>
            <Page style={styles.page} size="A4">
                <View style={styles.header}>
                    <Text>Кидси — результат теста на первые признаки аутизма у ребенка</Text>
                </View>
                <View style={styles.tableContainer}>
                    {rows}
                </View>
                <View style={styles.result}>
                    <Text style={styles.result__title}>{testResult.title}</Text>
                    <Text>{testResult.description}</Text>
                </View>
                <View style={styles.date}>
                    <Text>Дата прохождения тестирования: {date} </Text>
                </View>
            </Page>
        </Document>
    )
}

export default PdfFile