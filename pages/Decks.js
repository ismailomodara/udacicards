import React, { Component } from 'react'
import { Button, View, Text } from 'react-native'

class Decks extends Component {
    render() {
        return (
            <View>
                <Text>All Decks</Text>
                <Button
                    title="Deck 1"
                    onPress={() => this.props.navigation.navigate(
                        'DeckInfo',
                        { deckId: 1 }
                    )}
                />
                <Button
                    title="Deck 2"
                    onPress={() => this.props.navigation.navigate(
                        'DeckInfo',
                        { deckId: 2 }
                    )}
                />
            </View>
        )
    }
}

export default Decks