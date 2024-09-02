import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import RouteRoot from './routes/index.jsx'
import { RecoilRoot } from 'recoil'

createRoot(document.getElementById('root')).render(
  <RecoilRoot>
    <RouteRoot />
  </RecoilRoot>
)
