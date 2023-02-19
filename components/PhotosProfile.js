import React from 'react'
import { View, Image, StyleSheet, Dimensions, TouchableOpacity } from 'react-native'
import profiles from '../data/profiles'

function PhotosProfile({ navigation }) {

    const { name, avatar } = profiles.user

    function handlePress(item) {
        navigation.navigate('ProfileDetail', { item, name, avatar })

    }
    return (
        <View style={styles.container}>
            {
                profiles.medias.map((item, index) => (
                    <TouchableOpacity onPress={() => handlePress(item)} key={index}>
                        <Image source={{ uri: item.src }} key={index} style={styles.image} />
                    </TouchableOpacity>
                ))
            }
        </View>
    )
}

export default PhotosProfile

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