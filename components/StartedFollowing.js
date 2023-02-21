import React from 'react'
import { Image, View, Text, StyleSheet, Dimensions } from 'react-native'
import Button from './Button'

import posts from '../data/posts'

function StartedFollowing() {
    return (
        <View style={styles.container}>
            <Image source={{ uri: posts[7].user.avatar }} style={styles.image} />
            <View style={styles.content}>
                <Text>
                    <Text lineBreakMode='2' style={styles.username}>{posts[7].user.username}</Text> started following you.
                    <Text style={styles.date}>4d</Text>
                </Text>
            </View>
            <Button text={'Following'} />
        </View>
    )
}

export default StartedFollowing

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 10
    },
    image: {
        width: 48,
        height: 48,
        borderRadius: 48
    },
    content: {
        marginHorizontal: 10,
        width: Dimensions.get('screen').width / 2.2,
    },
    username: {
        fontWeight: '600'
    },
    date: {
        color: 'gray',
    }
})