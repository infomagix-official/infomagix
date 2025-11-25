import { Navigate, Route, Routes } from 'react-router-dom'
import Business from '../pages/Business'
import Community from '../pages/Community'
import Company from '../pages/Company'
import Contact from '../pages/Contact'
import Main from '../pages/Main'
import Product from '../pages/Product'

function AppRouter() {
  
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/company" element={<Company />} />
      <Route path="/business" element={<Business />} />
      <Route path="/product" element={<Product />} />
      <Route path="/product/:productId" element={<Product />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/community" element={<Community />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  )
}

export default AppRouter
