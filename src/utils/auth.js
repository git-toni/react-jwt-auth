import { session } from '../stores'
import jwtDecode from 'jwt-decode'

function decodeToken(tokenin){
  try{
    //let decoded = jwtDecode(tokenin)
    return jwtDecode(tokenin)
  }
  catch(e){}
}
function isAuthenticated(){
  let decoded = decodeToken(session.token)
  return (+ new Date()) < (+ decoded)
}

export {
  isAuthenticated,
  decodeToken
}
