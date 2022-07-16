import './App.css'
import Navigator from './components/navigator'
import Routes from './routes'

function App() {
  return (
    <div className="app">
      <div className="row">
        <div className="col-md-12 col-xs-12 col-sm-12">
          <div>
            <header>
              <Navigator />
            </header>
          </div>
        </div>
      </div>
      <div className="row m-5">
        <div className="col-md-12 col-xs-12 col-sm-12">
          <Routes />
        </div>
      </div>
    </div>
  )
}

export default App
