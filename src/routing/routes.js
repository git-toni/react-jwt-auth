import React,{Component} from 'react';  
import {observer, inject} from 'mobx-react';
import { IndexRoute, Router, Route, Link, browserHistory } from 'react-router'
import App from '../components/App'
import Layout from '../components/Layout'
import RequireAuth from './RequireAuth'

const Dummy = (props)=>{
  return(
    <div>this is a dummy route</div>
  )
}

const routes =(
  <Router history={browserHistory}>
    <Route path="/" component={Layout}>
      <IndexRoute component={App}/>
      <Route path="haa" component={()=> <div>HOLA</div>} />
      <Route path="noway" component={RequireAuth(Dummy)} />
    </Route>
  </Router>
)


export default routes
