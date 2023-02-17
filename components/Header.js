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
                    <View style={styles.dotContainer}>
                        <View style={styles.dot} />
                    </View>
                    <Heart size={24} fill='#000' />
                </TouchableOpacity>
                <TouchableOpacity activeOpacity={0.4} style={styles.button}>
                    <View style={styles.dotContainer}>
                        <View style={styles.dot} />
                    </View>
                    <Messenger size={24} fill='#000' />
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default Header

const styles = StyleSheet.create({
    header: {
        height: 44,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 15,
        backgroundColor: '#fff',
        paddingBottom: 4
    },
    actions: {
        flexDirection: 'row'
    },
    button: {
        marginLeft: 20
    },
    dot: {
        backgroundColor: '#FE3650',
        width: 8,
        height: 8,
        borderRadius: 8,
    },
    dotContainer: {
        position: 'absolute',
        top: 0,
        right: 0,
        width: 11,
        height: 11,
        backgroundColor: '#fff',
        alignItems: 'center',
        borderRadius: 11,
        justifyContent: 'center',
        zIndex: 2
    }
})