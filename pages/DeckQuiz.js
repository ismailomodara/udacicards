import React, { Component } from 'react'
import {View, Text} from 'react-native'
import { connect } from 'react-redux'
import QuizQuestions from "../components/QuizQuestions";
import QuizResult from "../components/QuizResult";
import {addCardToDeck} from "../utils/api";

class DeckQuiz extends Component {

    state = {
        correctAnswers: 0,
        currentQuestion: 1,
        showing: 'question',
        showResult: false
    }

    setShowing = (view) => {
        this.setState(() => ({
            showing: view
        }))
    }

    setAnswer = (answer, lastQuestion) => {
        if(answer === 'correct') {
            this.setState((state) => ({
                correctAnswers: state.correctAnswers + 1
            }))
        }
        if(!lastQuestion) {
            this.nextQuestion()
        } else {
            this.setState(() => ({
                showResult: true
            }))
        }
    }

    nextQuestion = () => {
        this.setState((state) => ({
            currentQuestion: state.currentQuestion + 1
        }))
    }

    reset = () => {
        this.setState(() => ({
            correctAnswers: 0,
            currentQuestion: 1,
            showing: 'question',
            showResult: false
        }))
    }

    quit = () => {
        const { deckId } = this.props.route.params
        this.props.navigation.navigate('DeckInfo', { deckId })
    }

    render() {
        const { currentQuestion, showing, showResult, correctAnswers } = this.state
        const { deckId } = this.props.route.params
        const deck = this.props.decks[deckId]
        const questions = deck.questions

        if(showResult) {
            return (
                <QuizResult
                    correctAnswers={correctAnswers}
                    total={questions.length}
                    reset={this.reset}
                    quit={this.quit}
                />
            )
        }

        return (
            <QuizQuestions
                questions={questions}
                currentQuestion={currentQuestion}
                showing={showing}
                setShowing={this.setShowing}
                setAnswer={this.setAnswer}
            />
        )
    }
}

function mapStateToProps (decks) {
    return {
        decks
    }
}

export default connect(mapStateToProps)(DeckQuiz)
