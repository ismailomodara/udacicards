import React, { Component } from 'react'
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native'
import { connect } from 'react-redux'

class DeckInfo extends Component {

    render() {
        const { deckId } = this.props.route.params
        const { decks, navigation } = this.props
        const deck = decks[deckId]

        return (
            <View style={styles.container}>
                <View style={styles.deck}>
                    <Text style={styles.title}>{deck.title}</Text>
                    <Text style={styles.subtitle}>{deck.questions.length} cards</Text>
                </View>
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => navigation.navigate(
                        'AddCardToDeck',
                        { deckId: deck.title }
                    )}>
                    <Text style={styles.buttonText}>Add Card</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={[styles.button, {backgroundColor: 'black' }]}>
                    <Text style={styles.buttonText}>Start Quiz</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        padding: 20,
        backgroundColor: '#fff'
    },
    deck: {
        height: 200,
        justifyContent: "center",
        marginBottom: 15,
        borderRadius: 8,
        backgroundColor: '#d6efc8',
    },
    title: {
        fontSize: 28,
        fontWeight: "bold",
        textAlign: "center",
        marginBottom: 10
    },
    subtitle: {
        fontSize: 18,
        textAlign: "center"
    },
    button: {
        backgroundColor: '#4b8a29',
        padding: 15,
        marginBottom: 10,
        borderRadius: 8,
        height: 56
    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'center',
        textTransform: 'uppercase',
        marginBottom: 10
    }
})

function mapStateToProps (decks) {
    return {
        decks
    }
}

export default connect(mapStateToProps)(DeckInfo)
