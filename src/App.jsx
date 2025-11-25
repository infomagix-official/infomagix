import { BrowserRouter } from 'react-router-dom'
import Footer from './components/Footer'
import Header from './components/Header'
import AppRouter from './routes/Router'
import './App.css'

function App() {
  return (
    <BrowserRouter>
      <div className="app-shell">
        <Header />
        <AppRouter />
        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App
