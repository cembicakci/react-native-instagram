import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    posts: []
}

export const counterSlice = createSlice({
    name: 'post',
    initialState,
    reducers: {
        addPost: (state, action) => {
            state.posts.push(action.payload)
        },
    },
})


export const { addPost } = counterSlice.actions

export default counterSlice.reducer