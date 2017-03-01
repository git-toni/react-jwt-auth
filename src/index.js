// Dependencies
import React from 'react';  
import ReactDOM from 'react-dom';
import {useStrict, transaction} from 'mobx';
import {observer, Provider, inject} from 'mobx-react';
import App from './components/App'

import stores from './stores'
import {general} from './actions'

useStrict(true)

// Components
//const App= ()=> <div>JJJJJJJJJJJUaaaI</div>

setTimeout(()=> general.changeName(), 4000)
function renderApp(){
  ReactDOM.render(
    <Provider {...stores}>
      <App />
    </Provider>
    , document.getElementById('main'));  
}
renderApp()

if(module.hot){
  module.hot.accept(App, renderApp)
}

