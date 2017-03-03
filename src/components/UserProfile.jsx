import React,{Component} from 'react';  
import { IndexRoute, Router, Route, Link, browserHistory } from 'react-router'

class UserProfile extends Component{
  constructor(props){
    super(props)
  }
  render(){
    return(
      <div id='user-profile'>
        PROFILE USER
      </div>
      )
  }
}

export default UserProfile
