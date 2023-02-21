import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'

import posts from '../data/posts'

function LikedStory() {
    return (
        <>
            <View style={styles.container}>
                <View style={styles.imageContainer}>
                    <Image source={{ uri: posts[1].user.avatar }} style={styles.image} />
                    <Image source={{ uri: posts[2].user.avatar }} style={[styles.image, styles.imageBottom]} />
                </View>
                <View style={styles.content}>
                    <Text>
                        <Text style={styles.username}>{posts[1].user.username}</Text> and <Text style={styles.username}>{posts[2].user.username}</Text> liked your story
                    </Text>
                </View>
                <Image source={{ uri: posts[0].medias[0].src }} style={styles.post} />
            </View>

            <View style={styles.container}>
                <View style={styles.imageContainer}>
                    <Image source={{ uri: posts[2].user.avatar }} style={styles.image} />
                    <Image source={{ uri: posts[4].user.avatar }} style={[styles.image, styles.imageBottom]} />
                </View>
                <View style={styles.content}>
                    <Text>
                        <Text style={styles.username}>{posts[2].user.username}</Text> and <Text style={styles.username}>{posts[4].user.username}</Text> liked your story
                    </Text>
                </View>
                <Image source={{ uri: posts[1].medias[0].src }} style={styles.post} />
            </View>

            <View style={styles.container}>
                <View style={styles.imageContainer}>
                    <Image source={{ uri: posts[1].user.avatar }} style={styles.image} />
                </View>
                <View style={styles.content}>
                    <Text>
                        <Text style={styles.username}>{posts[2].user.username}</Text> liked your story
                    </Text>
                </View>
                <Image source={{ uri: posts[3].medias[0].src }} style={styles.post} />
            </View>
        </>
    )
}

export default LikedStory

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginVertical: 10
    },
    imageContainer: {
        marginRight: 10
    },
    content: {
        marginHorizontal: 10,
        flex: 1,
    },
    username: {
        fontWeight: '600'
    },
    image: {
        width: 40,
        height: 40,
        borderRadius: 40
    },
    imageBottom: {
        position: 'absolute',
        top: 10,
        left: 10,
        borderWidth: 2,
        borderColor: '#fff'
    },
    post: {
        width: 50,
        height: 50
    }
})