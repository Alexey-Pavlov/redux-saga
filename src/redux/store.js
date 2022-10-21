import {configureStore} from '@reduxjs/toolkit'
import createSagaMiddleware from 'redux-saga'
import newsReducer from './slices/newsSlice'
import rootSaga from "./sagas";

const sagaMiddleware = createSagaMiddleware();

export default configureStore({
    reducer: {
        news: newsReducer
    }, middleware: (getDefaultMiddleware) => {
        return getDefaultMiddleware({thunk: false}).prepend(sagaMiddleware);
    },
})

sagaMiddleware.run(rootSaga)
