import {call, fork, put, takeEvery, all} from '@redux-saga/core/effects'
import {getLatestNews, getPopularNews} from '../../api/index'
import {setLatestNews, setLatestNewsError, setPopularNews, setPopularNewsError, setLoadingData} from '../slices/newsSlice'

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
    yield put(setLoadingData(true));
    yield takeEvery('news/getPopularNews', handlePopularNews)
    yield put(setLoadingData(false));
}

export function* watchLatestSaga() {
    yield put(setLoadingData(true));
    yield takeEvery('news/getLatestNews', handleLatestNews)
    yield put(setLoadingData(false));
}

export default function* rootSaga() {
    console.log('hello world!');
    yield all([
        fork(watchPopularSaga),
        fork(watchLatestSaga)
    ])
}
