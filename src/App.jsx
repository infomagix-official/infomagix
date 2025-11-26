import { HashRouter } from 'react-router-dom'
import Footer from './components/Footer'
import Header from './components/Header'
import AppRouter from './routes/Router'
import { LanguageProvider } from './context/LanguageContext'
import './App.css'

function App() {
  return (
    <LanguageProvider>
      <HashRouter>
        <div className="app-shell">
          <Header />
          <AppRouter />
          <Footer />
        </div>
      </HashRouter>
    </LanguageProvider>
  )
}

export default App
