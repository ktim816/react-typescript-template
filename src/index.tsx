import { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'

import '@styles/index.scss'

import App from './App'
import reportWebVitals from './reportWebVitals'

const rootElement = document.getElementById('root')
const root = ReactDOM.createRoot(rootElement as HTMLElement)

root.render(
  <StrictMode>
    <App />
  </StrictMode>,
)

reportWebVitals()
