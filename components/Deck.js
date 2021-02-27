import React, { Component } from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons'

class Deck extends Component {
    render() {
        const deck = this.props.deck
        return (
            <TouchableOpacity
                onPress={() => this.props.navigation.navigate(
                    'DeckInfo',
                    { deckId: deck.title }
                )}>
                <View style={styles.deck}>
                    <View>
                        <Text style={styles.title}>{deck.title}</Text>
                        <Text style={styles.subtitle}>{deck.questions.length} cards</Text>
                    </View>
                    <View>
                        <Ionicons name={'tablet-portrait'} size={32} color={'#4b8a29'} />
                    </View>
                </View>
            </TouchableOpacity>
        )
    }
}

const styles = StyleSheet.create({
    deck: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingTop: 20,
        paddingBottom: 80,
        paddingLeft: 20,
        paddingRight: 20,
        marginBottom: 15,
        borderRadius: 8,
        backgroundColor: '#d6efc8',
    },
    title: {
        fontSize: 24,
        fontWeight: "bold"
    }
})

export default Deck