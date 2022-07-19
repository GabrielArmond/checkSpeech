import './App.css'
import Cookies from './components/cookies'
import Footer from './components/footer'
import NavBar from './components/navBar'
import { useCookie } from './hooks/useCookie'
import Routes from './routes'

function App() {
  const { showCookie } = useCookie()

  return (
    <div className="app text-dark">
      <div className="row">
        <div className="col-md-12 col-12 col-sm-12">
          <div>
            <header>
              <NavBar />
            </header>
          </div>
        </div>
      </div>
      <div className="row mt-5">
        <div className="col-md-12 col-12 col-sm-12">
          <Routes />
        </div>
      </div>
      <div className="row mt-5">
        <div className="col-md-12 col-12 col-sm-12">
          <footer>
            <Footer />
          </footer>
        </div>
      </div>
      {showCookie && (
        <div className="px-2 row text-start">
          <div className="col-md-12 col-12 col-sm-12">
            <Cookies />
          </div>
        </div>
      )}
    </div>
  )
}

export default App
