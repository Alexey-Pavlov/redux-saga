import {useDispatch, useSelector} from "react-redux";
import News from "../../components/news/news";
import {useEffect} from "react";
import {getPopularNews} from "../../redux/slices/newsSlice";

const App = () => {
    const {popularNews, popularNewsError, loadingData} = useSelector(store => store?.news);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getPopularNews())
    }, [])
    return (<div>
            {loadingData ? <h3>Loading...</h3> :
                <News news={popularNews} error={popularNewsError} title="Popular News"/>}

        </div>);
};

export default App;
