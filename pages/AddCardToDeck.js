import React, { Component } from 'react'
import {View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'
import { addCard } from '../actions'
import { addCardToDeck } from '../utils/api'

class AddCardToDeck extends Component {
    state = {
        question: '',
        answer: ''
    }

    setQuestion = (question) => {
        this.setState(() => ({
            question
        }))
    }

    setAnswer = (answer) => {
        this.setState(() => ({
            answer
        }))
    }

    addCard = () => {
        const { question, answer } = this.state
        const { deckId } = this.props

        const payload = {
            question,
            answer
        }
        this.props.dispatch(addCard(payload))
        addCardToDeck(payload)
        this.props.navigation.navigate(
            'DeckInfo',
            { deckId })

        this.setState(() => ({
            question: '',
            answer: ''
        }))
    }

    render() {

        return (
            <View style={styles.container}>
                <TextInput
                    style={{height: 60}}
                    placeholder="Enter question"
                    onChangeText={text => this.setQuestion(text)}
                />
                <TextInput
                    style={{height: 60}}
                    placeholder="Enter answer"
                    onChangeText={text => this.setAnswer(text)}
                />
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => this.addCard()}>
                    <Text style={styles.buttonText}>Add Card</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#fff'
    },
    button: {
        backgroundColor: '#4b8a29',
        padding: 15,
        borderRadius: 8,
        height: 56
    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'center',
        textTransform: 'uppercase'
    }
})

export default connect()(AddCardToDeck)