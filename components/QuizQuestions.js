import React from 'react'
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native'

const QuizQuestions = (props) =>  {
    const { currentQuestion, questions, showing, setShowing, setAnswer } = props
    return (
        <View style={styles.container}>
            <Text
                style={styles.info}>
                Question {currentQuestion} / {questions.length}
            </Text>
            <View>
                {
                    showing === 'question' ? (
                        <View style={styles.content}>
                            <Text style={styles.text}>{questions[currentQuestion - 1].question}</Text>
                            <TouchableOpacity
                                onPress={() => setShowing('answer')}>
                                <Text style={styles.cta}>Show Answer</Text>
                            </TouchableOpacity>
                        </View>
                    ) : (
                        <View style={styles.content}>
                            <Text style={styles.text}>{questions[currentQuestion - 1].answer}</Text>
                            <TouchableOpacity
                                onPress={() => setShowing('question')}>
                                <Text style={styles.cta}>Show Question</Text>
                            </TouchableOpacity>
                        </View>
                    )
                }

            </View>
            <TouchableOpacity
                style={styles.button}
                onPress={() => setAnswer('correct', currentQuestion === questions.length )}>
                <Text style={styles.buttonText}>Correct</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={[styles.button, {backgroundColor: 'red' }]}
                onPress={() => setAnswer('incorrect', currentQuestion === questions.length )}>
                <Text style={styles.buttonText}>Incorrect</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        padding: 20,
        backgroundColor: '#fff'
    },
    content: {
        marginBottom: 10,
    },
    info: {
        fontWeight: "bold",
        fontSize: 16,
        textAlign: 'center',
        marginBottom: 20
    },
    text: {
        fontSize: 20,
        fontWeight: "bold",
        textAlign: "center",
        marginBottom: 10
    },
    cta: {
        fontSize: 12,
        textAlign: 'center',
        color: 'red',
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

export default QuizQuestions
