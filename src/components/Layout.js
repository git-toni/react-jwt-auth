import React,{Component} from 'react';  
import { IndexRoute, Router, Route, Link, browserHistory } from 'react-router'

import Header from './Header'
import Notifications from './Notifications'

//        <nav className='nav'>
//          Hola
//          &emsp;
//          <div className="nav-center">
//            <Link className='nav-item' to='/haa'>HAA</Link>
//            &emsp;
//            <Link className='nav-item' to='/noway'>Req NOWAY</Link>
//          </div>
//        </nav>
class Layout extends Component{
  constructor(props){
    super(props)
  }
  render(){
    return(
      <div id='app'>
        <Header />
        <Notifications />
        {this.props.children}
      </div>
      )
  }
}

export default Layout
