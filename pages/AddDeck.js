import React, { Component } from 'react'
import {View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'
import { addDeck } from '../actions'
import { submitDeck } from '../utils/api'

class AddDeck extends Component {
    state = {
        deckTitle: ''
    }

    setTitle = (text) => {
        this.setState(() => ({
            deckTitle: text
        }))
    }

    addDeck = () => {
        const { deckTitle } = this.state
        const payload = {
            [deckTitle]: {
                title: deckTitle,
                questions: []
            }
        }
        this.props.dispatch(addDeck(payload))
        submitDeck(payload)
        this.props.navigation.navigate('Decks')

        this.setState(() => ({
            deckTitle: ''
        }))
    }

    render() {

        return (
            <View style={styles.container}>
                <TextInput
                    style={{height: 60}}
                    placeholder="Enter deck title  here!"
                    onChangeText={text => this.setTitle(text)}
                />
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => this.addDeck()}>
                    <Text style={styles.buttonText}>Add Deck</Text>
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

export default connect()(AddDeck)