import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Home from './pages/Home'
import NoPage from './pages/NoPage'
import Blog from './pages/Blog'

function App() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route index element={<Home />} />
                    <Route path="/home" element={<Home />} />
                    <Route path="/blog" element={<Blog />} />
                    <Route path="/about" element={<AboutUs />} />
                    <Route path="/aboutus" element={<AboutUs />} />
                    <Route path="*" element={<NoPage />} />
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default App