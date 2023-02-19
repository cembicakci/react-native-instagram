import React from 'react'
import { Image, StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import FitImage from './FitImage'
import dayjs from 'dayjs'
import ReadMore from '@fawazahmed/react-native-read-more'
import { Bookmark, Comment, Heart, Share, Dots } from '../Icons'

function ProfileDetail({ route }) {

    const { item } = route.params

    return (
        <View style={styles.post}>
            <View style={styles.header}>
                <View style={styles.user}>
                    <Image style={styles.avatar} source={{ uri: item.avatar }} />
                    <Text style={styles.title}>{item.username}</Text>
                </View>
                <Dots size={24} fill='#000' />
            </View>
            <FitImage src={item.src} />
            <View style={styles.content}>
                <View style={styles.actions}>
                    <View style={styles.leftActions}>
                        <TouchableOpacity style={styles.action} activeOpacity={0.7}>
                            <Heart size={24} fill={'#222'} />
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.action} activeOpacity={0.7}>
                            <Comment size={24} fill={'#222'} />
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.action} activeOpacity={0.7}>
                            <Share size={24} fill={'#222'} />
                        </TouchableOpacity>
                    </View>
                    <TouchableOpacity activeOpacity={0.7}>
                        <Bookmark size={24} fill={'#222'} />
                    </TouchableOpacity>
                </View>
                <View >
                    <Text style={styles.likes}>{item.likes} likes</Text>
                </View>
                <ReadMore numberOfLines={2} seeMoreStyle={{ color: '#999' }} expandOnly={true}>
                    <Text key={item.id} style={styles.username}>{item.username}</Text>
                    {`  `}
                    {item.description}
                </ReadMore>
                {
                    item.comments > 0 &&
                    <TouchableOpacity style={{ paddingVertical: 7 }} activeOpacity={0.7}>
                        <Text style={styles.comments}>View all {item.comments} comments</Text>
                    </TouchableOpacity>
                }
                <View>
                    <Text style={styles.date}>{dayjs(item.date).fromNow()}</Text>
                </View>
            </View>
        </View>
    )
}

export default ProfileDetail

const styles = StyleSheet.create({
    post: {
        backgroundColor: '#fff',
        flex: 1
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        height: 49,
        paddingHorizontal: 8,
        paddingRight: 14
    },
    user: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    title: {
        fontSize: 14,
        fontWeight: '600'
    },
    avatar: {
        width: 30,
        height: 30,
        borderRadius: 30,
        marginRight: 10
    },
    content: {
        paddingHorizontal: 15
    },
    actions: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: 40,
    },
    leftActions: {
        flexDirection: 'row'
    },
    action: {
        marginRight: 12
    },
    likes: {
        fontWeight: '600'
    },
    username: {
        fontWeight: '600'
    },
    comments: {
        fontWeight: '500',
    },
    date: {
        fontSize: 13,
        opacity: 0.5
    }
})