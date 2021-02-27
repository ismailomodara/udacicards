import AsyncStorage from '@react-native-async-storage/async-storage';

export function getDecks () {
    return AsyncStorage.getItem('DECKS')
        .then((decks) => {
            return JSON.parse(decks)
        })
}

export function getDeck (deckId) {
    return this.getDecks().then((decks) => {
        return decks[deckId]
    })
}

export function submitDeck (payload) {
    return AsyncStorage.mergeItem('DECKS', JSON.stringify(payload))
}


export function addCardToDeck ({ deckId, card }) {
    return AsyncStorage.mergeItem('DECKS', JSON.stringify({
        [deckId]: card
    }))
}

export function removeEntry (key) {
    return AsyncStorage.getItem('DECKS')
        .then((decks) => {
            const data = JSON.parse(decks)
            delete data[key]
            AsyncStorage.setItem('DECKS', JSON.stringify(data))
        })
}