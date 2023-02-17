import React from 'react'
import { FlatList, ScrollView, StyleSheet, Text, View } from 'react-native'
import Header from '../components/Header'
import Post from '../components/Post'
import Stories from '../components/Stories'
import posts from '../data/posts'

function Home() {
  return (
    <>
      <ScrollView style={styles.container} stickyHeaderIndices={[0]}>
        <Header />
        <Stories />
        {
          posts.map((item, index) => <Post key={index} item={item}/>)
        }
      </ScrollView>
    </>
  )
}

export default Home

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  }
})