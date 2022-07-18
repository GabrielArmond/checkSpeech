import './App.css'
import Footer from './components/footer'
import Navigator from './components/navigator'
import Copyright from './components/copyright'
import Routes from './routes'

function App() {
  return (
    <div className="app">
      <div className="row">
        <div className="col-md-12 col-12 col-sm-12">
          <div>
            <header>
              <Navigator />
            </header>
          </div>
        </div>
      </div>
      <div className="row m-5">
        <div className="col-md-12 col-12 col-sm-12">
          <Routes />
        </div>
      </div>
      <div className="row m-5">
        <div className="col-md-12 col-12 col-sm-12">
          <footer>
            <Footer />
          </footer>
        </div>
        <div className="row m-5">
          <div className="col-md-12 col-12 col-sm-12">
            <Copyright />
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
