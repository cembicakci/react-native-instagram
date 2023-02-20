import React from 'react'
import { View, StyleSheet, Text } from 'react-native'
import Input from '../components/Input'
import MessagesItem from '../components/MessagesItem'
import Notes from '../components/Notes'

function Messages() {
    return (
        <View style={styles.container}>
            <Input />
            <Notes />

            <View>
                <View style={styles.header}>
                    <Text style={styles.title}>Messages</Text>
                    <Text>Requests</Text>
                </View>

                <MessagesItem />
            </View>
        </View>
    )
}

export default Messages

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'flex-start',
        paddingHorizontal: 20
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 10
    },
    title:{
        fontWeight: 'bold'
    }
})