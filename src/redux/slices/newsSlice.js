import {createSlice} from "@reduxjs/toolkit";

export const newsSlice = createSlice({
    name: 'news', initialState: {
        latestNews: [],
        popularNews: [],
        latestNewsError: '',
        popularNewsError: '',
    }, reducers: {
        getNews: (state) => state,
        setLatestNews: (state, {payload}) => {
            state.latestNews = [...state.latestNews, ...payload];
        },
        setPopularNews: (state, {payload}) => {
            state.popularNews = [...state.popularNews, ...payload];
        },
        setLatestNewsError: (state, {payload}) => {
            state.latestNewsError = payload
        },
        setPopularNewsError: (state, {payload}) => {
            state.popularNewsError = payload
        }
    }
})

export const {getNews, setLatestNews, setPopularNews, setLatestNewsError, setPopularNewsError} = newsSlice.actions

export default newsSlice.reducer
