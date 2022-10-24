import Header from './components/header/header'
import Footer from './components/footer/footer'
import { Route, Routes } from 'react-router'
import LatestNews from './pages/latest-news/latest-news'
import PopularNews from './pages/popular-news/popular-news'
import Home from './pages/home/home'

const App = () => {
  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='latest-news' element={<LatestNews />} />
          <Route path='popular-news' element={<PopularNews />} />
        </Routes>
      </main>
      <Footer />
    </>
  )
}

export default App
