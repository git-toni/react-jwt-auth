import React,{Component} from 'react';  
import { IndexRoute, Router, Route, Link, browserHistory } from 'react-router'

class UserIndex extends Component{
  constructor(props){
    super(props)
  }
  render(){
    return(
      <div id='user-profile'>
        USERS INDEX
        <br/>
        <Link to='/users/22' className="nav-item is-tab is-hidden-mobile">User 22</Link>
        <br/>
        <Link to='/users/asdfsdf' className="nav-item is-tab is-hidden-mobile">User asdsfdf</Link>
      </div>
      )
  }
}

export default UserIndex
