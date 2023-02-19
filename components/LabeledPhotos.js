import React from 'react'
import { Dimensions, Image, StyleSheet, TouchableOpacity } from 'react-native'
import Post from './Post'

function LabeledPhotos() {

    let item = {
        id: 1,
        src: 'https://images.unsplash.com/photo-1607749111659-e1c8e05f5f24?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80',
        username: 'Joelmuniz',
        avatar: 'https://images.unsplash.com/profile-1506014084642-e83ddc4bc57c?dpr=2&auto=format&fit=crop&w=150&h=150&q=60&crop=faces&bg=fff',
        description: `bad boys`,
        date: '2023-02-14 10:00:00',
        likes: 299,
        comments: 32,
    }

    return (
        <TouchableOpacity>
            <Image source={{ uri: item.src }} style={styles.image} />
        </TouchableOpacity>
    )
}

export default LabeledPhotos


const styles = StyleSheet.create({
    image: {
        width: Dimensions.get('screen').width / 3,
        height: Dimensions.get('screen').width / 3,
        resizeMode: 'cover'

    }
})