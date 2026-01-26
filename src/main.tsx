import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { registerSW } from 'virtual:pwa-register'
import './index.css'
import App from './App.tsx'
import ImageGenerator from './views/ImageGenerator.tsx'

// Register service worker for offline support
registerSW({
  onNeedRefresh() {
    // New content available, could prompt user to refresh
    console.log('New content available, refresh to update.')
  },
  onOfflineReady() {
    console.log('App ready to work offline.')
  },
})

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/generator" element={<ImageGenerator />} />
        <Route path="*" element={<App />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
