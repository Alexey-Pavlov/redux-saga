// import {useSelector} from "react-redux";

import {useDispatch, useSelector} from 'react-redux'
import News from "./components/news";
import {getNews} from "./redux/slices/newsSlice";

const App = () => {
    const {latestNews, popularNews, latestNewsError, popularNewsError} = useSelector(store => store?.news);
    const dispatch = useDispatch()

    const handleNews = () => {
        dispatch(getNews());
    };

    return (
        <div>
            <button onClick={handleNews}>Get News</button>
            <News news={latestNews} error={latestNewsError} title="Latest News"/>
            <News news={popularNews} error={popularNewsError} title="Popular News"/>
        </div>
    )
}

export default App;
