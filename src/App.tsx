import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ChangePassword12 from './pages/ChangePassword12'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ChangePassword12 />} />
        <Route path="/change-password-1-2" element={<ChangePassword12 />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App