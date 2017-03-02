import React,{Component} from 'react';  
import {observer, inject} from 'mobx-react';

@inject('session','user') @observer
class App extends Component{
  constructor(props){
    super(props)
  }
  render(){
    const {session} = this.props
    console.log(session.userData)
    return(
      <div>
        OMGOMGOMGOMG
        <br/>
        {session.userData.name}
        <br/>
        {session.status}
      </div>
    )
  }
}
export default App
