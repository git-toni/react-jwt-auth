import { action } from 'mobx';
import { ui } from '../stores'

const actions ={
  @action removeNotification(i){
    ui.notifications.splice(i,1)
  },
  @action addNotification(type, msg){
    let noti = { type, content: msg }
    ui.notifications.push(noti) 
  },
  @action addErrorNotification(msg){
    this.addNotification('error',msg)
  }
}
export default actions
