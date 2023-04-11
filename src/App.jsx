import 'zone.js'
import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import portal from './Portal';

function App() {
  const [count, setCount] = useState(0)
  debugger

  useEffect(() => {
    portal('#portal')
  }, [])

  return (
    <div className="App">
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <div id="portal"></div>
    </div>
  )
}

const AsyncContext = () => {
  const newAppLevelCtx = Zone.root.fork({
    name: 'does not matter',
  });
  console.log('asds')
  return newAppLevelCtx.run(() => App())
}

export default App;
