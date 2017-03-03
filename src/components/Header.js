import React,{Component} from 'react';  
import { IndexLink, IndexRoute, Router, Route, Link, browserHistory } from 'react-router'

class Header extends Component{
  constructor(props){
    super(props)
  }
  //<img src="http://bulma.io/images/bulma-logo.png" alt="Bulma logo" />
  render(){
    return(
      <nav className="nav has-shadow">
        <div className="container">
          <div className="nav-left">
            <a className="nav-item">
              <img src="https://img.clipartfest.com/ee9fb7dfa0462c94cb407796b587cfae_mountain-clip-art-4-clipart-mountain-png_984-428.png" alt="Bulma logo" />
            </a>
            <IndexLink to='/' className="nav-item is-tab is-hidden-mobile is-active">Home</IndexLink>
            <Link to='/haa' className="nav-item is-tab is-hidden-mobile">HaaFree</Link>
            <Link to='/users' className="nav-item is-tab is-hidden-mobile">Users</Link>
            <Link to='/dummy' className="nav-item is-tab is-hidden-mobile">Dummy</Link>
          </div>
          <span className="nav-toggle">
            <span></span>
            <span></span>
            <span></span>
          </span>
          <div className="nav-right nav-menu">
            <a className="nav-item is-tab is-hidden-tablet is-active">Home</a>
            <a className="nav-item is-tab is-hidden-tablet">Features</a>
            <a className="nav-item is-tab is-hidden-tablet">Pricing</a>
            <a className="nav-item is-tab is-hidden-tablet">About</a>
            <a className="nav-item is-tab">
              <figure className="image is-16x16" >
                <img src="http://bulma.io/images/jgthms.png"/>
              </figure>
              Profile
            </a>
            <a className="nav-item is-tab">Log out</a>
          </div>
        </div>
      </nav>
      )
  }
}
export default Header
