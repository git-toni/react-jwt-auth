import Request from './Request'
import {buildUrl} from './Utils'
import {attrChangeValue} from '../actions'

//const 
function reqLogin(email, password){
  new Request('post', buildUrl('login'),{auth:{email, password}}, false) 
}

export {
  reqLogin,
}
