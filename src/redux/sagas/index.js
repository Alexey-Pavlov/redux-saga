import {call, fork, put, takeEvery} from '@redux-saga/core/effects'
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

export function* handleNews() {
    yield fork(handleLatestNews)
    yield fork(handlePopularNews)
}

export function* watchClickSaga() {
    yield takeEvery('news/getNews', handleNews)
}

export default function* rootSaga() {
    console.log('hello world!');
    yield watchClickSaga();
}
