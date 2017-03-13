import React,{Component} from 'react';  
import { IndexRoute, Router, Route, Link, browserHistory } from 'react-router'

import {Modal, Header, Notifications, Loading} from './index'

class Layout extends Component{
  constructor(props){
    super(props)
  }
  //<Loading />
  render(){
    return(
      <div id='app'>
        <Header />
        <Loading />
        <Notifications />
        <section className="section">
          {this.props.children}
        </section>
        <Modal />

      </div>
      )
  }
}

export default Layout
