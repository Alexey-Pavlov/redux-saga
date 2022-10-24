import News from '../../components/news/news'
import { useEffect } from 'react'
import { getLatestNews } from '../../redux/slices/newsSlice'
import { useAppDispatch, useAppSelector } from '../../hooks'

const LatestNews = () => {
  const { latestNews, latestNewsError, loadingData } = useAppSelector((store) => store?.news)
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(getLatestNews())
  }, [])

  return (
    <div>
      {loadingData ? (
        <h3>Loading...</h3>
      ) : (
        <News news={latestNews} error={latestNewsError} title='Latest News' />
      )}
    </div>
  )
}

export default LatestNews
