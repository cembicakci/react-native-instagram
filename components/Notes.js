import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'

function Notes() {
    return (
        <View style={styles.container}>
            <Image style={styles.image} source={{ uri: 'https://pbs.twimg.com/profile_images/1295728524490350592/li5FAiq7_400x400.jpg' }} />
            <View style={styles.plus}><Text style={styles.plusText}>+</Text></View>
            <Text style={styles.text}>Leave a note</Text>
        </View>
    )
}

export default Notes

const styles = StyleSheet.create({
    container: {
        marginVertical: 20,
        alignItems: 'center',
        justifyContent: 'flex-start'
    },
    image: {
        width: 90,
        height: 90,
        borderRadius: 90
    },
    plus: {
        position: 'absolute',
        top: -10,
        right: 0,
        backgroundColor: '#fff',
        width: 30,
        height: 30,
        borderRadius: 30,
    },
    plusText: {
        fontSize: 24,
        fontWeight: '200',
        textAlign: 'center'
    },
    text: {
        fontWeight: '300',
        color: '#333',
        fontSize: 12,
        marginTop: 15
    }
})