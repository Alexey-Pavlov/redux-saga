import News from '../../components/news/news'
import { useEffect } from 'react'
import { getPopularNews } from '../../redux/slices/newsSlice'
import { useAppDispatch, useAppSelector } from '../../hooks'

const App = () => {
  const { popularNews, popularNewsError, loadingData } = useAppSelector((store) => store?.news)
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(getPopularNews())
  }, [])
  return (
    <div>
      {loadingData ? (
        <h3>Loading...</h3>
      ) : (
        <News news={popularNews} error={popularNewsError} title='Popular News' />
      )}
    </div>
  )
}

export default App
