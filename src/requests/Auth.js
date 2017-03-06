import Request from './Request'
import {buildUrl} from './Utils'
import {session} from '../stores'
import {common} from '../actions'
import {guid, base64url} from '../utils/numbers'

let GOODJWT='eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwidXNlciI6IntcIm5hbWVcIjpcIkpvaG55XCIsXCJpZFwiOlwiMjNcIixcImVtYWlsXCI6XCJob2xhQGhvbGEuY29tXCJ9IiwiYWRtaW4iOnRydWUsImV4cCI6IjE1MjAwMDQwMTUifQ.ftzvi1_3C0etJaDjVqC3hFoTLV9iRzKi8PfHb-mbigQ'

const chgSession = common.attrChangerValue(session)
function reqLogin(email, password){
  //new Request('post', buildUrl('login'),{auth:{email, password}}, false) 
  mockLogin(email, password)
  .then(res =>{
    console.log(res.data.jwt)
    chgSession('token',res.data.jwt)
  })
}

function mockLogin(email, pass){
  let u = {
    jit: guid(),
    exp: Date.now()+ 864e5 * 800,
    user: {name:'John', email: email, id: 333}
  }
  let fakeJwt = `fakeheader.${base64url(JSON.stringify(u))}.fakeenc`
  //let fakeJwt = `fakeheader.hoooooooola.fakeenc`
  let p = new Promise((resolve,rej)=>{
    setTimeout(()=>{
      resolve({data:{jwt: GOODJWT} })
    }, 2000)
  })
  return p
}

//function login(email, pass){
//  let chgSession = common.attrChangerValue(session)
//  returnLogin()
//  .then((res)=>{
//    chgSession('token',res.jwt)
//    console.log('returnlogic', res)
//  })
//  .catch((e)=>{
//    console.log(e.message)
//  })
//}
export {
  reqLogin,
}
export default {
  reqLogin,
}
