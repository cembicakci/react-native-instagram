import React from 'react'
import { View, StyleSheet, Dimensions, Image } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { useSelector } from 'react-redux'

function SavedPosts({ navigation }) {

    const posts = useSelector(state => state.post.posts)

    function handlePress(item) {
        navigation.navigate('ProfileDetail', { item })

    }

    return (
        <View style={styles.container}>
            {
                posts.map((item, index) => (
                    <TouchableOpacity onPress={() => handlePress(item)} key={index}>
                        <Image source={{ uri: item.src ? item.src : item.medias[0].src ? item.medias[0].src : '-'}} key={index} style={styles.image} />
                    </TouchableOpacity>
                ))
            }
        </View>
    )
}

export default SavedPosts

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        flexWrap: 'wrap',
    },
    image: {
        width: Dimensions.get('screen').width / 3,
        height: Dimensions.get('screen').width / 3,
        resizeMode: 'cover'

    }
})