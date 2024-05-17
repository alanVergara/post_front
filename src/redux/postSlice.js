import { createSlice } from "@reduxjs/toolkit";

export const postSlice = createSlice({
    name: "posts",
    initialState: {
        posts: [],
        postsFiltered: [],
        newName: "",
        newDescription: ""
    },
    reducers: {
        setPostList: (state, action) => {
            state.posts = action.payload;
            state.postsFiltered = action.payload;
            state.newName = "";
            state.newDescription = "";
        },
        setNewName: (state, action) => {
            state.newName = action.payload;
        },
        setnewDescription: (state, action) => {
            state.newDescription = action.payload;
        },
        setPostFilteredList: (state, action) => {
            state.postsFiltered = action.payload;
        },
    }
});

export const { setPostList, setNewName, setnewDescription, setPostFilteredList } = postSlice.actions;
export default postSlice.reducer;
