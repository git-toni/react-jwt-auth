import React, {Component} from 'react';  
import {observer, inject} from 'mobx-react';
import { isAuthenticated } from '../utils/auth'

@inject('session','user') @observer
class App extends Component{
  constructor(props){
    super(props)
  }
  renderMsg(){
    const {session} = this.props
    if(isAuthenticated()){
      return(
        <p className='text-medium'>
          You are now authenticated as <b className='text-info text-large'>{session.userName}</b>.
        </p>
      )
    }
    else{
      return(
        <p>You are <span className='text-danger'>logged out</span>.</p>
      )
    }
  }
  render(){
    const {session} = this.props
    return(
      <div className='content'>
        <h1 className="title is-2">Welcome to a simple auth application</h1>
        <span className="subtitle is-3">Using React + MobX</span>
        <div className="has-margin-top-2 content">
          {this.renderMsg()}
        </div>
      </div>
    )
  }
}

export default App
