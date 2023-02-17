import { FlatList, Image, ScrollView, StyleSheet, Text, View } from "react-native"

import stories from "../data/stories"
import StoryItem from "./StoryItem"

function Stories() {

    return (
        <View style={styles.container}>
            <FlatList
                data={stories}
                renderItem={({ item }) => <StoryItem item={item} />}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
            />
        </View>
    )

}
export default Stories

const styles = StyleSheet.create({
    container: {
        paddingVertical: 10,
        borderBottomColor: '#dadada',
        borderBottomWidth: 0.5
    }
})