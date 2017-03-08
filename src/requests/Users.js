import Request from './Request'
import {buildUrl} from './Utils'
function reqProfile(userId){
  return new Request('get', buildUrl(['users',userId,'profile'])) 
  //.then(res=>{
  //  console.log('Usersreq response',res)
  //  return res
  //})
  //.catch(e =>{
  //  consol.log('userreq catch', e)
  //})
}

export {
  reqProfile,
}
