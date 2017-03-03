import React,{Component} from 'react';  
import { IndexRoute, Router, Route, Link, browserHistory } from 'react-router'
import {reqLogin} from '../requests/Auth'

class UserIndex extends Component{
  constructor(props){
    super(props)
  }
  componentDidMount(){
    reqLogin('lol@hola.la', 3333)
  }
  render(){
    return(
      <div id='user-profile'>
        USERS INDEX
        <br/>
        <Link to='/users/22' className="nav-item is-tab is-hidden-mobile">User 22</Link>
        <Link to='/users/23' className="nav-item is-tab is-hidden-mobile">User 23</Link>
        <br/>
        <Link to='/users/asdfsdf' className="nav-item is-tab is-hidden-mobile">User asdsfdf</Link>
      </div>
      )
  }
}

export default UserIndex
