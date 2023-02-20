import React from 'react'
import { Dimensions, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import posts from '../data/posts'
import { Camera } from '../Icons'

function MessagesItem() {
    return (
        <>
            <TouchableOpacity activeOpacity={0.7}>
                <View style={styles.container}>
                    <Image source={{ uri: posts[1].user.avatar }} style={styles.image} />
                    <View style={styles.content}>
                        <Text style={[styles.username, styles.fwb]}>{posts[1].user.username}</Text>
                        <Text style={[styles.date, styles.fwb]}>hahahah are u sure?</Text>
                    </View>
                    <View style={styles.dot} />
                    <Camera size={24} fill={'#000'} />
                </View>
            </TouchableOpacity>

            <TouchableOpacity activeOpacity={0.7}>
                <View style={styles.container}>
                    <Image source={{ uri: posts[2].user.avatar }} style={styles.image} />
                    <View style={styles.content}>
                        <Text style={styles.username}>{posts[2].user.username}</Text>
                        <Text style={styles.date}>Sent 5 min ago</Text>
                    </View>
                    <Camera size={24} fill={'#000'} />
                </View>
            </TouchableOpacity>

            <TouchableOpacity activeOpacity={0.7}>
                <View style={styles.container}>
                    <Image source={{ uri: posts[4].user.avatar }} style={styles.image} />
                    <View style={styles.content}>
                        <Text style={styles.username}>{posts[4].user.username}</Text>
                        <Text style={styles.date}>Seen Saturday</Text>
                    </View>
                    <Camera size={24} fill={'#000'} />
                </View>
            </TouchableOpacity>
        </>
    )
}

export default MessagesItem

const styles = StyleSheet.create({
    container: {
        width: Dimensions.get('screen').width / 1.1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginVertical: 8
    },
    image: {
        width: 60,
        height: 60,
        borderRadius: 60,
    },
    content: {
        flex: 1,
        marginHorizontal: 10
    },
    username: {},
    date: {},
    dot: {
        width: 8,
        height: 8,
        borderRadius: 8,
        backgroundColor: 'blue',
        marginRight: 10
    },
    fwb: {
        fontWeight: 'bold'
    }
})