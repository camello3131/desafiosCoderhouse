import logo from '../logo.svg'

export default function Cuerpo () {
    return (
    <div className="App container">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <button className='btn btn-light'>Hello Vite + React!</button>
  
          <p>
            Edit <code>App.jsx</code> and save to test HMR updates.
          </p>
          <p>
            <a
              className="App-link"
              href="https://reactjs.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              Learn React
            </a>
            {' | '}
            <a
              className="App-link"
              href="https://vitejs.dev/guide/features.html"
              target="_blank"
              rel="noopener noreferrer"
            >
              Vite Docs
            </a>
          </p>
        </header>
      </div>
      )
  }