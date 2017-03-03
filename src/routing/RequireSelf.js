import React,{Component} from 'react';  
import {observer, inject} from 'mobx-react';
import { browserHistory } from 'react-router'
import {session} from '../stores'
import {isSelf} from '../utils/auth'
import notiActions from '../actions/notifications'

const RequireSelf = (ToBeComposed)=>{
  class Decorated extends Component{
    componentWillMount(){
      this.check()
    }
    componentWillReceiveProps(nextProps){
      this.check()
    }
    check(){
      console.log('CHECKINGSLEFFFFFF',this.props)
      //isSelf(this.props.params.user_id)
      if(!isSelf(this.props.params.user_id)){
        notiActions.addErrorNotification('ITS NOT SELF') 
        browserHistory.push('/dummy')
        return  
      }
      notiActions.addInfoNotification('ITS ME YAY!') 
      //if (!isSelf()){
      //  console.log('WRONG OR EXPIRED')
      //  browserHistory.push('/dummy')
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
export default RequireSelf
