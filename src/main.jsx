import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Suspense } from 'react'
import { Leva } from 'leva'
import { BrowserRouter } from 'react-router-dom';


createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Suspense fallback={null}>
      <App />

      <Leva collapsed />
    </Suspense>
  </BrowserRouter>,
)


