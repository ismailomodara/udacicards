import AsyncStorage from '@react-native-async-storage/async-storage';

export function getDecks () {
    return new Promise(async (resolve, reject) => {
        const decks = await AsyncStorage.getItem("DECKS");
        resolve({...JSON.parse(decks)});
    });
}

export function getDeck (deckId) {
    return new Promise(async (resolve, reject) => {
        const decks = await getDecks();
        resolve(decks[deckId]);
    })
}

export function saveDeckTitle (payload) {
    return AsyncStorage.mergeItem('DECKS', JSON.stringify(payload))
}


export const addCardToDeck = async  ({ deckId, card }) => {
    const currentDecks = await getDecks()
    const decks = {
        ...currentDecks,
        [deckId]: {
            ...currentDecks[deckId],
            questions: currentDecks[deckId].questions.concat(card)
        }
    }
    return AsyncStorage.mergeItem('DECKS', JSON.stringify(decks))
}

export function deleteDeck (key) {
    return AsyncStorage.getItem('DECKS')
        .then((allDecks) => {
            const newDecks = JSON.parse(allDecks)
            delete newDecks[key]
            AsyncStorage.setItem('DECKS', JSON.stringify(newDecks))
        })
}