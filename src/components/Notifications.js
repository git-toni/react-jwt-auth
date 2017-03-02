import React,{Component} from 'react';  
import {observer, inject} from 'mobx-react';
import {notifications} from '../actions'

@inject('ui') @observer
class Notifications extends Component{
  constructor(props){
    super(props)
  }
  renderNotif(n,i){
    setTimeout(()=>{
      notifications.removeNotification(i)
    },5000)
    return(
      <div key={n.content.slice()}className="notification is-primary">
        <button className="delete"></button>  
        {n.content}
      </div>
    )
  }
  render(){
    let {ui} = this.props
    let {notifications, errors} = ui
    //console.log(ui)
    //? notifications.slice().map((e,i)=> this.renderNotif(e,i))
    let notifs = (!!notifications) 
                 ? notifications.slice().map(this.renderNotif)
                 : null
                 //console.log('notifications', notifications.slice(), !!notifications, notifs)
    return(
      <div id="notifications">
        { !!notifications ? notifications.map(this.renderNotif) : null}
      </div>
    )
    //{ !!notifications ? notifications.map(this.renderNotif) : null}
  }
}

export default Notifications
