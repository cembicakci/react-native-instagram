import React, { useState, useCallback, useMemo, useRef } from 'react';
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { Bookmark, ChevronDown, ChevronUp, Lock, Menu, Plus, UserPlus } from '../Icons'

import profiles from '../data/profiles'
import Button from '../components/Button'

import TabViewComponent from '../TabViewComponent'
import BottomSheet from '@gorhom/bottom-sheet';


function Profile({ navigation }) {

  const [active, setActive] = useState(true);
  const [open, setOpen] = useState(false);

  const bottomSheetRef = useRef();
  const snapPoints = ['40%'];

  return (
    <View style={styles.container}>

      <View style={styles.header}>
        <View style={styles.nameContainer}>
          <Lock size={24} fill={'#000'} />
          <Text style={styles.username}>{profiles.user.username}</Text>
          <ChevronDown size={24} fill={'#000'} />
        </View>
        <View style={styles.iconContainer}>
          <TouchableOpacity activeOpacity={0.7}>
            <Plus size={28} fill='#000' style={styles.icon} />
          </TouchableOpacity>
          <TouchableOpacity activeOpacity={0.7} onPress={() => setOpen(!open)}>
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

      <View style={styles.btnContainer}>
        <Button text={'Edit Profile'} />
        <Button text={'Share Profile'} />
        <TouchableOpacity activeOpacity={0.7} style={styles.userPlusIcon}>
          <UserPlus size={18} fill='#000' />
        </TouchableOpacity>
      </View>

      <View style={styles.stories}>
        <View style={styles.description}>
          <Text style={styles.storiesTitle}>Story highlights</Text>
          <TouchableOpacity activeOpacity={0.7} onPress={() => setActive(!active)}>
            {active ? <ChevronDown size={20} /> : <ChevronUp size={20} />}
          </TouchableOpacity>
        </View>
        {
          active ? '' :
            <>
              <View>
                <Text>Keep your favourite stories on your profile.</Text>
              </View>
              <ScrollView horizontal={true} style={styles.storyContainer}>
                <View>
                  <View style={styles.storyFirstItem}>
                    <Text style={styles.storyFirstItemText}>+</Text>
                  </View>
                  <Text style={{ marginLeft: 20 }}>New</Text>
                </View>
                <View style={styles.storyItem} />
                <View style={styles.storyItem} />
                <View style={styles.storyItem} />
                <View style={styles.storyItem} />
                <View style={styles.storyItem} />
              </ScrollView>
            </>
        }
      </View>
      <TabViewComponent />

      {open ?
        <BottomSheet
          ref={bottomSheetRef}
          snapPoints={snapPoints}
          enablePanDownToClose={true}
        >
          <View style={styles.contentContainer}>

            <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center' }} onPress={() => navigation.navigate('SavedPostsScreen')}>
              <Bookmark size={24} fill={'#000'} style={{ marginHorizontal: 15 }} />
              <Text style={{ flex: 1, fontSize: 16 }}>Saved</Text>
            </TouchableOpacity>

          </View>
        </BottomSheet>
        : ''}
    </View>
  )
}

export default Profile

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: 40,
    marginBottom: 10,
    paddingHorizontal: 12,
  },
  nameContainer: {
    flexDirection: 'row',
    alignItems: 'center'
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
    paddingHorizontal: 12,
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
    borderRadius: 20,
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
  },
  btnContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 12,
  },
  userPlusIcon: {
    backgroundColor: '#e4e4e4',
    padding: 7,
    borderRadius: 5,
    marginVertical: 15
  },
  stories: {
    marginTop: 5,
    paddingHorizontal: 12,
  },
  description: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  storiesTitle: {
    fontWeight: 'bold'
  },
  storyContainer: {
    marginTop: 20,
  },
  storyFirstItem: {
    width: 70,
    height: 70,
    borderRadius: 70,
    backgroundColor: '#fff',
    borderWidth: 2,
    borderColor: '#e4e4e4',
    marginRight: 20,
  },
  storyFirstItemText: {
    fontSize: 48,
    textAlign: 'center',
    fontWeight: '200'
  },
  storyItem: {
    backgroundColor: '#e4e4e4',
    width: 70,
    height: 70,
    borderRadius: 70,
    marginRight: 20,
  },
  container2: {
    flex: 1,
    padding: 24,
    backgroundColor: 'gray',
    alignItems: 'center',
    justifyContent: 'center'
  },
  contentContainer: {
    flex: 1,
    alignItems: 'center',
  },
})