import React,{Component} from 'react';  

class Layout extends Component{
  constructor(props){
    super(props)
  }
  render(){
    return(
      <div id='app'>
        <nav id='top-nav'>Hola</nav>
        {this.props.children}
      </div>
      )
  }
}

export default Layout
