import 'materialize-css/dist/css/materialize.min.css'
import M from 'materialize-css'
import { useEffect } from 'react'

const App = () => {
  useEffect(() => {
    // Init Materialize Js
    M.AutoInit()
  })
  return (
    <div className="App">
      <h1>hello world</h1>
    </div>
  );
}

export default App;
