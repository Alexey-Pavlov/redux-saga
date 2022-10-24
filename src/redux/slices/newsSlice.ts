import { createSlice } from '@reduxjs/toolkit'

type newsState = {
  latestNews: never[],
  popularNews: never[],
  latestNewsError: string,
  popularNewsError: string,
  loadingData: boolean
}

const initialState: newsState = {
  latestNews: [],
  popularNews: [],
  latestNewsError: '',
  popularNewsError: '',
  loadingData: false,
}

export const newsSlice = createSlice({
  name: 'news',
  initialState,
  reducers: {
    getLatestNews: (state) => state,
    getPopularNews: (state) => state,
    setLatestNews: (state, { payload }) => {
      state.latestNews = payload
    },
    setPopularNews: (state, { payload }) => {
      state.popularNews = payload
    },
    setLatestNewsError: (state, { payload }) => {
      state.latestNewsError = payload
    },
    setPopularNewsError: (state, { payload }) => {
      state.popularNewsError = payload
    },
    setLoadingData: (state, { payload }) => {
      state.loadingData = payload
    },
  },
})

export const {
  getLatestNews,
  getPopularNews,
  setLatestNews,
  setPopularNews,
  setLatestNewsError,
  setPopularNewsError,
  setLoadingData,
} = newsSlice.actions

export default newsSlice.reducer
