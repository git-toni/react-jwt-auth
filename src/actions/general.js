import { action } from 'mobx';
import { session } from '../stores'


const actions ={
  @action changeWorkAttrib(attr,v){
    work[attr] = v.target.value
  },
  @action changeName(){
    session.token.name = 'Manuel' 
  }
}

export default actions
