import React, { Component } from 'react'
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native'
import { clearLocalNotification, setLocalNotification } from "../utils/notifications";

class QuizResult extends Component  {
    componentDidMount() {
        clearLocalNotification()
            .then(setLocalNotification)
    }

    render() {
        const { correctAnswers, total, reset, quit } = this.props
        return (
            <View style={styles.container}>
                <Text
                    style={styles.info}>
                    Your result
                </Text>
                <Text style={styles.result}>{correctAnswers} / {total}</Text>
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => reset()}>
                    <Text style={styles.buttonText}>Start Over</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={[styles.button, {backgroundColor: 'black' }]}
                    onPress={() => quit()}>
                    <Text style={styles.buttonText}>Quit</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        padding: 20,
        backgroundColor: '#fff'
    },
    info: {
        color: 'green',
        fontWeight: "bold",
        fontSize: 16,
        textAlign: 'center',
        marginBottom: 20
    },
    result: {
        fontSize: 36,
        fontWeight: "bold",
        textAlign: "center",
        marginBottom: 40
    },
    button: {
        backgroundColor: '#4b8a29',
        padding: 15,
        marginBottom: 10,
        borderRadius: 8,
        height: 56
    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'center',
        textTransform: 'uppercase',
        marginBottom: 10
    }
})

export default QuizResult
