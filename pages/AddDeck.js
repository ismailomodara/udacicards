import React, { Component } from 'react'
import {View, Text, Button} from 'react-native'

class AddDeck extends Component {
    render() {
        return (
            <View>
                <Text>AddDeck</Text>
                <Button
                    title="Add"
                    onPress={() => this.props.navigation.navigate(
                        'Decks',
                    )}
                />
            </View>
        )
    }
}

export default AddDeck