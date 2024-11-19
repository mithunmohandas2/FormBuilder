import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { axiosInterceptor } from './services/axiosInterceptor.ts';
import App from './App.tsx'
import './index.css'

axiosInterceptor();
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
