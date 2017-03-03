import React,{Component} from 'react';  
import {observer, inject} from 'mobx-react';
import { IndexRoute, Router, Route, Link, browserHistory } from 'react-router'
import R from 'ramda'
import RequireAuth from './RequireAuth'
import RequireSelf from './RequireSelf'
import { App, Layout, UserProfile, UserIndex } from '../components'

const Dummy = (props)=>{
  return(
    <div>this is a dummy route</div>
  )
}

const reqAuthSelf = R.compose(RequireAuth,RequireSelf)

const routes =(
  <Router history={browserHistory}>
    <Route path="/" component={Layout}>
      <IndexRoute component={App}/>
      <Route path="haa" component={()=> <div>HOLA</div>} />
      <Route path="noway" component={RequireAuth(Dummy)} />
      <Route path="dummy" component={Dummy} />
      <Route path="users">
        <IndexRoute component={UserIndex} />
        <Route path=":user_id(\\d+)" component={reqAuthSelf(UserProfile)} />
      </Route>
    </Route>
  </Router>
)


export default routes
