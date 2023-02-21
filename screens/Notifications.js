import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import LikedStory from '../components/LikedStory'
import StartedFollowing from '../components/StartedFollowing'
import { UserPlus } from '../Icons'

function Notifications() {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <View style={styles.icon}><UserPlus size={24} fill={'#000'} /></View>
                <View>
                    <Text>Follow request</Text>
                    <Text style={styles.headerText}>Approve or ignore requests</Text>
                </View>
            </View>

            <View style={styles.startedFollowing}>
                <Text style={styles.thisWeek}>This Week</Text>
                <StartedFollowing />
            </View>

            <View style={styles.likedStory}>
                <Text style={styles.thisWeek}>This Month</Text>
                <LikedStory />
            </View>
        </View>
    )
}

export default Notifications

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        borderBottomWidth: 1,
        borderBottomColor: '#e0e0e0',
        paddingBottom: 12,
        paddingHorizontal: 12,
        marginTop: 10
    },
    icon: {
        width: 50,
        height: 50,
        borderRadius: 50,
        borderWidth: 1,
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 12
    },
    headerText: {
        fontWeight: '300',
        color: 'gray'
    },
    startedFollowing: {
        padding: 12,
        borderBottomWidth: 1,
        borderBottomColor: '#e0e0e0',
    },
    thisWeek: {
        fontWeight: 'bold',
        fontSize: 16
    },
    likedStory: {
        padding: 12
    }
})