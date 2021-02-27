import React, { Component } from 'react'
import { StyleSheet, TouchableOpacity, ScrollView, View, Text} from 'react-native'
import Deck from "../components/Deck";

import { getDecks } from "../utils/api";
import { receiveDecks } from "../actions";
import { connect } from 'react-redux'

class Decks extends Component {
    componentDidMount () {
        const { dispatch } = this.props

        getDecks()
            .then((decks) => dispatch(receiveDecks(decks)))
    }

    render() {
        const { decks, navigation  } = this.props

        if(!Object.keys(decks).length) {
            return (
                <View style={styles.emptyContainer}>
                    <Text style={styles.text}>No deck found!</Text>
                    <TouchableOpacity
                        style={styles.button}
                        onPress={() => navigation.navigate(
                            'AddDeck'
                        )}
                    >
                        <Text style={styles.buttonText}>Add</Text>
                    </TouchableOpacity>
                </View>
            )
        }
        return (
            <ScrollView style={styles.container}>
                {Object.keys(decks).map(deck =>
                    <TouchableOpacity
                        key={deck}
                        onPress={() => navigation.navigate(
                            'DeckInfo',
                            { deckId: deck }
                        )}
                    >
                        <Deck deck={decks[deck]} />
                    </TouchableOpacity>
                    )}
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        marginBottom: 20,
        backgroundColor: '#fff'
    },
    emptyContainer: {
        flex: 1,
        justifyContent: 'center',
        textAlign: 'center',
        padding: 20,
        marginBottom: 20,
        backgroundColor: '#fff'
    },
    text: {
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 10
    },
    button: {
        width: 100,
        textAlign: 'center',
        backgroundColor: '#4b8a29',
        padding: 10,
        marginLeft: 120,
        marginRight: 120,
        borderRadius: 8,
        height: 40
    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'center',
        textTransform: 'uppercase'
    }
})

function mapStateToProps (decks) {
    return {
        decks
    }
}

export default connect(mapStateToProps)(Decks)