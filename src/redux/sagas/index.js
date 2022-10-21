import {call, fork, put, takeEvery, all} from '@redux-saga/core/effects'
import {getLatestNews, getPopularNews} from '../../api/index'
import {setLatestNews, setLatestNewsError, setPopularNews, setPopularNewsError} from '../slices/newsSlice'

export function* handleLatestNews() {
    try {
        const {hits} = yield call(getLatestNews);
        yield put(setLatestNews(hits))
    } catch {
        yield put(setLatestNewsError('Error fetching latest news'))
    }

}

export function* handlePopularNews() {
    try {
        const {hits} = yield call(getPopularNews);
        yield put(setPopularNews(hits))
    } catch {
        yield put(setPopularNewsError('Error fetching popular news'))
    }

}

export function* watchPopularSaga() {
    yield takeEvery('news/getPopularNews', handlePopularNews)
}

export function* watchLatestSaga() {
    yield takeEvery('news/getLatestNews', handleLatestNews)
}

export default function* rootSaga() {
    console.log('hello world!');
    yield all([
        fork(watchPopularSaga),
        fork(watchLatestSaga)
    ])
}
