import { StyleSheet, Text, TouchableOpacity } from 'react-native'

function Button({ text }) {
    return (
        <TouchableOpacity style={styles.button}>
            <Text style={styles.text}>{text}</Text>
        </TouchableOpacity>
    )
}

export default Button

const styles = StyleSheet.create({
    button: {
        backgroundColor: '#e4e4e4',
        padding: 7,
        flex: 1,
        borderRadius: 5,
        marginRight: 5,
        alignItems: 'center',
        marginVertical: 15
    },
    text: {
        fontWeight: '500'
    },
})