import React from 'react'
import { View } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';

import Ionicons from 'react-native-vector-icons/Ionicons'

import Decks from "./Decks";
import Deck from "./Deck";
import AddCardToDeck from "./AddCardToDeck";
import AddDeck from "./AddDeck";


const DecksStack = createStackNavigator();
const AddDeckStack = createStackNavigator();

const DecksStackScreen = () => {
    return (
        <DecksStack.Navigator>
            <DecksStack.Screen name="Decks" component={Decks} />
            <DecksStack.Screen name="Deck" component={Deck} />
            <DecksStack.Screen name="AddCardToDeck" component={AddCardToDeck} />
        </DecksStack.Navigator>
    );
}

const AddDeckStackScreen = () => {
    return (
        <AddDeckStack.Navigator>
            <AddDeckStack.Screen name="AddDeck" component={AddDeck} />
        </AddDeckStack.Navigator>
    );
}

const Tabs = createMaterialBottomTabNavigator();

class AppContainer extends React.Component {
    render() {
        return (
            <View style={{flex: 1}}>
                <NavigationContainer>
                    <Tabs.Navigator
                        initialRouteName="Home"
                        activeColor="#f0edf6"
                        inactiveColor="#f7fcf4"
                        barStyle={{ backgroundColor: '#4b8a29' }}
                        screenOptions={({ route }) => ({
                            tabBarIcon: ({ focused }) => {
                                let iconName;

                                if (route.name === 'Decks') {
                                    iconName = focused
                                        ? 'albums'
                                        : 'albums-outline';
                                } else if (route.name === 'AddDeck') {
                                    iconName = focused ? 'add-circle' : 'add-circle-outline';
                                }

                                return <Ionicons name={iconName} size={24} color={focused ? 'white' : '#f7fcf4'} />;
                            },
                        })}
                    >
                        <Tabs.Screen name="Decks" component={DecksStackScreen} />
                        <Tabs.Screen name="AddDeck" component={AddDeckStackScreen} />
                    </Tabs.Navigator>
                </NavigationContainer>
            </View>
        )
    }
}

export default AppContainer