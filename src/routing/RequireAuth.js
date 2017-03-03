import React,{Component} from 'react';  
import {observer, inject} from 'mobx-react';
import { browserHistory } from 'react-router'
import {session} from '../stores'
import {isAuthenticated} from '../utils/auth'

//const RequireAuth = (ToBeComposed)=>{
//  //if(session.token.name !== 'LOLI'){
//  //  console.log('HEY THS IS NOT LOLI GUEY')
//  //  //browserHistory.push('/dummy')
//  //}
//  const Authed = (props) =>{
//    if(session.token.name !== 'LOLI'){
//      console.log('HEY THS IS NOT LOLI GUEY')
//      //browserHistory.push('/dummy')
//    }
//    return(
//      <ToBeComposed {...props} />
//    )
//  }
//  //return inject('session','user')(observer(Authed))
//  return Authed
//}
const RequireAuth = (ToBeComposed)=>{
  class Decorated extends Component{
    componentWillMount(){
      this.checkAuth()
    }
    componentWillReceiveProps(nextProps){
      this.checkAuth()
    }
    checkAuth(){
      console.log('IM CHECKING AUTH',this.props)
      if (!isAuthenticated()){
        console.log('WRONG OR EXPIRED')
        browserHistory.push('/dummy')
      }
      //if(session.token.name !== 'LOLI'){
      //  console.log('HEY THS IS NOT LOLI GUEY')
      //  //browserHistory.push('/dummy')
      //}
    }
    render(){
      return(
        <ToBeComposed {...this.props} />
      )
    }
  }
  return Decorated
}

//export default inject('session','user')(observer(RequireAuth))
export default RequireAuth
