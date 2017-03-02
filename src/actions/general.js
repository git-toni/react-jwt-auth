import { action } from 'mobx';
import { session } from '../stores'


const actions ={
  @action changeWorkAttrib(attr,v){
    work[attr] = v.target.value
  },
  @action changeStatus(){
    session.status = 'DOOOONE' 
  }
}

export default actions
