import React,{Component} from 'react';  
import { IndexRoute, Router, Route, Link, browserHistory } from 'react-router'
import notiActions from '../actions/notifications'
import {reqProfile} from '../requests/Users'

class UserProfile extends Component{
  constructor(props){
    super(props)
  }
  componentWillMount(){
    notiActions.removeLoading()
    notiActions.addLoading('Loading profile...')
    reqProfile()
  }
  componentDidMount(){
    notiActions.removeLoading()
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
