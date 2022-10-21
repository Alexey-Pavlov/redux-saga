import {createSlice} from "@reduxjs/toolkit";

export const newsSlice = createSlice({
    name: 'news', initialState: {
        latestNews: [], popularNews: [], latestNewsError: '', popularNewsError: '',
    }, reducers: {
        getLatestNews: (state) => state, getPopularNews: (state) => state, setLatestNews: (state, {payload}) => {
            state.latestNews = payload;
        }, setPopularNews: (state, {payload}) => {
            state.popularNews = payload;
        }, setLatestNewsError: (state, {payload}) => {
            state.latestNewsError = payload
        }, setPopularNewsError: (state, {payload}) => {
            state.popularNewsError = payload
        }
    }
})

export const {
    getLatestNews,
    getPopularNews,
    setLatestNews,
    setPopularNews,
    setLatestNewsError,
    setPopularNewsError
} = newsSlice.actions

export default newsSlice.reducer
