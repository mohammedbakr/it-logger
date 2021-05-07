import { Fragment, useEffect } from 'react'
import SearchBar from './components/layout/SearchBar'
import Logs from './components/logs/Logs'
import Techs from './components/techs/Techs'
import AddBtn from './components/layout/AddBtn'
import AddLogModal from './components/logs/AddLogModal'
import EditLogModal from './components/logs/EditLogModal'
import AddTechModal from './components/techs/AddTechModal'

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
          <AddTechModal />
          <Logs />
          <Techs />
        </div>
      </Fragment>
    </Provider>
  );
}

export default App;
