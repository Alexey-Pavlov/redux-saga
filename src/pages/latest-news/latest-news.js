import {useDispatch, useSelector} from "react-redux";
import News from "../../components/news/news";
import {useEffect} from "react";
import {getLatestNews} from "../../redux/slices/newsSlice";

const LatestNews = () => {
    const {latestNews, latestNewsError, loadingData} = useSelector(store => store?.news);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getLatestNews())
    }, [])

    return (<div>
            {loadingData ? <h3>Loading...</h3> : <News news={latestNews} error={latestNewsError} title="Latest News"/>}

        </div>);
};

export default LatestNews;
