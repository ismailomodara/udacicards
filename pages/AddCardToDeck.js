import React, { Component } from 'react'
import { View, Text, Button } from 'react-native'

class AddCardToDeck extends Component {
    render() {
        return (
            <View>
                <Text>AddCardToDeck</Text>
                <Button
                    title="Add"
                    onPress={() => this.props.navigation.navigate(
                        'DeckInfo',
                        { deckId: 2 }
                    )}
                />
            </View>
        )
    }
}

export default AddCardToDeck