import { Fragment, useEffect } from 'react'
import SearchBar from './components/layout/SearchBar'
import Logs from './components/logs/Logs'
import Tecks from './components/tecks/Tecks'
import AddBtn from './components/layout/AddBtn'
import AddLogModal from './components/logs/AddLogModal'
import EditLogModal from './components/logs/EditLogModal'
import AddTeckModal from './components/tecks/AddTeckmodal'

import { Provider } from 'react-redux'
import store from './store'

import 'materialize-css/dist/css/materialize.min.css'
import M from 'materialize-css'

const App = () => {
  useEffect(() => {
    // Init Materialize Js
    M.AutoInit()
  })
  return (
    <Provider store={store}>
      <Fragment>
        <SearchBar />
        <div className="container">
          <AddBtn />
          <AddLogModal />
          <EditLogModal />
          <AddTeckModal />
          <Logs />
          <Tecks />
        </div>
      </Fragment>
    </Provider>
  );
}

export default App;
