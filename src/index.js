// Dependencies
import React from 'react';  
import ReactDOM from 'react-dom';
import {useStrict, transaction} from 'mobx';
import {observer, Provider, inject} from 'mobx-react';
import App from './components/App'

import stores from './stores'
import {general} from './actions'
import routes from './routing/routes'

useStrict(true)


//<RequireAuth>
//  <App />
//</RequireAuth>

function renderApp(){
  ReactDOM.render(
    <Provider {...stores}>
      {routes}
    </Provider>
    , document.getElementById('main'));  
}
renderApp()

setTimeout(()=> general.changeStatus(), 4000)


if(module.hot){
  module.hot.accept(App, renderApp)
}

