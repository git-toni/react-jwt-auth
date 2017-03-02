import { action } from 'mobx';
import { ui } from '../stores'

const actions ={
  @action removeNotification(i){
    ui.notifications.splice(i,1)
  }
}
export default actions
