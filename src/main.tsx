import { StrictMode, lazy, Suspense } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { registerSW } from 'virtual:pwa-register'
import './index.css'
const LandingPage = lazy(() => import('./views/LandingPage.tsx'))
const App = lazy(() => import('./App.tsx'))
const ImageGenerator = lazy(() => import('./views/ImageGenerator.tsx'))

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
        <Route
          path="/"
          element={
            <Suspense fallback={null}>
              <LandingPage />
            </Suspense>
          }
        />
        <Route path="/app/*" element={<Suspense fallback={null}><App /></Suspense>} />
        <Route path="/generator" element={<Suspense fallback={null}><ImageGenerator /></Suspense>} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
