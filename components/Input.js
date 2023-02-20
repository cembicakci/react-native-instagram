import React from 'react'
import { Dimensions, StyleSheet, TextInput, View } from 'react-native'
import { Search } from '../Icons'

function Input() {
    return (
        <View style={styles.container}>
            <Search size={18} fill={'#000'} />
            <TextInput
                placeholder='Search'
                placeholderTextColor={'#8f8f8f'}
                style={styles.input}
            />
        </View>

    )
}

export default Input

const styles = StyleSheet.create({
    container: { 
        flexDirection: 'row',
        height: 40,
        alignItems: 'center',
        backgroundColor: '#eee',
        borderRadius: 6,
        paddingHorizontal: 8
    },
    input: {
        width: Dimensions.get('screen').width / 1.22,
        height: 40,
        backgroundColor: '#eee',
        borderRadius: 6,
        paddingHorizontal: 8,
        fontSize: 16
    }
})