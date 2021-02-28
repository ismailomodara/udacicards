import React from 'react'
import {View} from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';

import Ionicons from 'react-native-vector-icons/Ionicons'
import { PRIMARY_COLOR, PRIMARY_COLOR_TINT, WHITE, TAB_FOCUS } from "../utils/colors";
import Decks from "./Decks";
import DeckInfo from "./DeckInfo";
import AddCardToDeck from "./AddCardToDeck";
import DeckQuiz from "./DeckQuiz";
import AddDeck from "./AddDeck";


const DecksStack = createStackNavigator();

const DecksStackScreen = () => {
    return (
        <DecksStack.Navigator>
            <DecksStack.Screen name="Decks" component={Decks} />
            <DecksStack.Screen name="DeckInfo" component={DeckInfo} />
            <DecksStack.Screen name="AddCardToDeck" component={AddCardToDeck} />
            <DecksStack.Screen name="DeckQuiz" component={DeckQuiz} />
        </DecksStack.Navigator>
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
                        activeColor={TAB_FOCUS}
                        inactiveColor={PRIMARY_COLOR_TINT}
                        barStyle={{ backgroundColor: PRIMARY_COLOR }}
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

                                return <Ionicons name={iconName} size={24} color={focused ? WHITE : PRIMARY_COLOR_TINT} />;
                            },
                        })}
                    >
                        <Tabs.Screen name="Decks" component={DecksStackScreen} />
                        <Tabs.Screen name="AddDeck" component={AddDeck} />
                    </Tabs.Navigator>
                </NavigationContainer>
            </View>
        )
    }
}

export default AppContainer