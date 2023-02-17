import { Image, StyleSheet, Text, View } from "react-native"
import { LinearGradient } from 'expo-linear-gradient';



function StoryItem({ item }) {
    return (
        <View style={styles.story}>
            <LinearGradient style={styles.cover} colors={['#DE0046', '#F7A34B']}>
                <Image source={{ uri: item.user.avatar }} style={styles.avatar} />
            </LinearGradient>
            <Text style={styles.name} numberOfLines={1}>{item.user.name}</Text>
        </View>
    )
}

export default StoryItem

const styles = StyleSheet.create({
    story: {
        width: 67,
        marginHorizontal: 10,
        alignItems: 'center'
    },
    cover: {
        width: 77,
        height: 77,
        borderRadius: 77,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 5
    },
    avatar: {
        width: 72,
        height: 72,
        borderRadius: 72,
        borderWidth: 3,
        borderColor: '#fff'
    },
    name: {
        fontSize: 11
    }
})