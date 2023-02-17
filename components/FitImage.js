import React from 'react'
import { Dimensions, Image, StyleSheet } from 'react-native'

function FitImage({ src }) {

    return (
        <Image
            style={styles.image}
            source={{ uri: src }}
        />
    )
}

export default FitImage

const styles = StyleSheet.create({
    image: {
        width: Dimensions.get('screen').width,
        height: Dimensions.get('screen').height / 2
    }
})