import { makeAutoObservable, runInAction } from "mobx"
import { questions } from '../data/questions'
import { risks } from "../data/risks";

class Test {
    constructor() {
        makeAutoObservable(this);
    }
    questions = questions;
    testActivated = false;
    testResult = null;
    testResultTable = [];
    activeQuestion = 0;
    activeDelayQuestion = 0;
    score = 0;
    transitionActivated = false;

    increaseScore = () => {
        this.score += 1;
    }

    setNextQuestion = (answer) => {
        this.addAnswerToTable(answer);
        if (questions.length - 1 === this.activeQuestion) {
            this.setResult();
        } else {
            this.activeQuestion += 1;
            this.transitionActivated = true;
            setTimeout(() => {
                runInAction(() => {
                    this.activeDelayQuestion = this.activeQuestion;
                    this.transitionActivated = false;
                })
            }, 1000)
        }
    }

    addAnswerToTable = (answer) => {
        this.testResultTable.push({ ...questions[this.activeQuestion], answer });
    }

    setTestActive = () => {
        this.testActivated = true;
    }

    setResult = () => {
        if (this.score <= 2) {
            this.testResult = risks[0];
        } else
            if (this.score <= 7) {
                this.testResult = risks[1];
            } else this.testResult = risks[2];
    }
}

export const testStore = new Test();