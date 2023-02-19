import React from 'react'
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { Menu, Plus } from '../Icons'

import profiles from '../data/profiles'

function Profile() {
  return (
    <View style={styles.container}>

      <View style={styles.header}>
        <Text style={styles.username}>{profiles.user.username}</Text>
        <View style={styles.iconContainer}>
          <TouchableOpacity activeOpacity={0.7}>
            <Plus size={28} fill='#000' style={styles.icon} />
          </TouchableOpacity>
          <TouchableOpacity activeOpacity={0.7}>
            <Menu size={28} fill='#000' style={styles.icon} />
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.profile}>
        <View>
          <View>
            <Image source={{ uri: profiles.user.avatar }} style={styles.avatar} />
            <View style={styles.plusContainer}>
              <Text style={styles.plus}>+</Text>
            </View>
          </View>
          <Text style={styles.name}>{profiles.user.name}</Text>
        </View>
        <View style={styles.infoContainar}>
          <View style={styles.infoItem}>
            <Text style={styles.text}>{profiles.posts}</Text>
            <Text>Posts</Text>
          </View>

          <View style={styles.infoItem}>
            <Text style={styles.text}>{profiles.followers}</Text>
            <Text>Followers</Text>
          </View>

          <View style={styles.infoItem}>
            <Text style={styles.text}>{profiles.following}</Text>
            <Text>Following</Text>
          </View>
        </View>
      </View>
    </View>
  )
}

export default Profile

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 12,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: 40,
  },
  username: {
    fontWeight: 'bold',
    fontSize: 24
  },
  iconContainer: {
    flexDirection: 'row'
  },
  icon: {
    marginLeft: 12,
  },
  profile: {
    flexDirection: 'row',
  },
  name: {
    marginTop: 5,
    fontWeight: 'bold'
  },
  avatar: {
    width: 90,
    height: 90,
    borderRadius: 90
  },
  plusContainer: {
    position: 'absolute',
    backgroundColor: '#0094f6',
    top: 60,
    right: 0,
    borderWidth: 1,
    borderRadius: 20
  },
  plus: {
    color: '#fff',
    fontWeight: 'bold',
    paddingHorizontal: 5,
    fontSize: 18
    
  },
  infoContainar: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 20
  },
  infoItem: {
    alignItems: 'center',
    marginHorizontal: 10,
    marginBottom: 20,
  },
  text: {
    fontWeight: 'bold'
  }
})