import React from 'react'
import { StyleSheet, View } from 'react-native'
import Post from './Post'

function ProfileDetail({ route }) {

    const { item } = route.params

    return (
        <View style={styles.container}>
            <Post item={item} />
        </View>
    )
}

export default ProfileDetail

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff'
    }
})