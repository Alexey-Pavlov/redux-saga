import { configureStore } from '@reduxjs/toolkit'
import createSagaMiddleware from 'redux-saga'
import newsReducer from './slices/newsSlice'
import rootSaga from './sagas'

const sagaMiddleware = createSagaMiddleware()

const store = configureStore({
  reducer: {
    news: newsReducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware({ thunk: false }).prepend(sagaMiddleware)
  },
})

export type RootState = ReturnType<typeof store.getState>

sagaMiddleware.run(rootSaga)

export default store
