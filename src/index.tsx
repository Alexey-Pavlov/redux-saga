import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.scss'
import { App } from './App'
import reportWebVitals from './reportWebVitals'
import { Provider } from 'react-redux'
import store from './redux/store'
import { BrowserRouter } from 'react-router-dom'

const root = createRoot(document.getElementById('root'))
root.render(<StrictMode>
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
</StrictMode>)

reportWebVitals()
