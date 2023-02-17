import { StyleSheet, TouchableOpacity, View } from 'react-native'

import { Heart, Logo, Messenger, Plus } from '../Icons'

function Header() {
    return (
        <View style={styles.header}>
            <Logo size={30} fill='#000' />
            <View style={styles.actions}>
                <TouchableOpacity activeOpacity={0.4}>
                    <Plus size={24} fill='#000' />
                </TouchableOpacity>
                <TouchableOpacity activeOpacity={0.4} style={styles.button}>
                    <Heart size={24} fill='#000' />
                </TouchableOpacity>
                <TouchableOpacity activeOpacity={0.4} style={styles.button}>
                    <Messenger size={24} fill='#000' />
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default Header

const styles = StyleSheet.create({
    header: {
        height: 36,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 15
    },
    actions: {
        flexDirection: 'row'
    },
    button: {
        marginLeft: 20
    }
})