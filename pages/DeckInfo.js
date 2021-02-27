import React, { Component } from 'react'
import { View, Text, Button } from 'react-native'

class DeckInfo extends Component {
    render() {
        const { deckId } = this.props.route.params
        return (
            <View>
                <Text>This is Deck {deckId}</Text>
                <Button
                    title="Add Card"
                    onPress={() => this.props.navigation.navigate(
                        'AddCardToDeck',
                        { deckId: 2 }
                    )}
                />
            </View>
        )
    }
}

export default DeckInfo