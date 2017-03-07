import Request from './Request'
import {buildUrl} from './Utils'
function reqProfile(userId){
  return new Request('get', buildUrl(['users',userId,'profile'])) 
  .then(res=>{
    console.log('result of user profile',res)   
    return res
  })
}

export {
  reqProfile,
}
