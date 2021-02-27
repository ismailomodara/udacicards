import React, { Component } from 'react'
import {View, StyleSheet, TouchableOpacity } from 'react-native'
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
        
        return (
            <View style={styles.container}>
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
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#fff'
    }
})

function mapStateToProps (decks) {
    return {
        decks
    }
}

export default connect(mapStateToProps)(Decks)