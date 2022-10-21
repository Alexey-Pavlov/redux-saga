import {useDispatch, useSelector} from "react-redux";
import News from "../../components/news/news";
import {useEffect} from "react";
import {getPopularNews} from "../../redux/slices/newsSlice";

const App = () => {
    const {popularNews, popularNewsError} = useSelector(store => store?.news);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getPopularNews())
    })
    return(
        <div>
            <News news={popularNews} error={popularNewsError} title="Popular News" />
        </div>
    );
};

export default App;
