import { session } from '../stores'
import { common } from '../actions'
import jwtDecode from 'jwt-decode'

let BADJWT='eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwidXNlciI6IntcIm5hbWVcIjpcIkpvaG55XCIsXCJpZFwiOlwiMjNcIixcImVtYWlsXCI6XCJob2xhQGhvbGEuY29tXCJ9IiwiYWRtaW4iOnRydWUsImV4cCI6IjE0NTY5MzIxNDgifQ.neTM6mTxWojrcfVU6sX9sXmsnZQUgMMIiQuSrWwm5UA'
let GOODJWT='eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwidXNlciI6IntcIm5hbWVcIjpcIkpvaG55XCIsXCJpZFwiOlwiMjNcIixcImVtYWlsXCI6XCJob2xhQGhvbGEuY29tXCJ9IiwiYWRtaW4iOnRydWUsImV4cCI6IjE1MjAwMDQwMTUifQ.ftzvi1_3C0etJaDjVqC3hFoTLV9iRzKi8PfHb-mbigQ'
function decodeToken(tokenin){
  try{
    return jwtDecode(tokenin)
  }
  catch(e){}
}
function isAuthenticated(){
  let isValid = false
  if(!!session.token){
    let decoded = decodeToken(session.token)
    let now = Math.floor(+ new Date() / 1000)
    isValid = (+ now) < (+ decoded.exp)
  }
  //console.log('decoded exp and NOW',decoded.exp,now,isSmaller)
  return isValid
}
function login(email, pass){
  let chgSession = common.attrChangerValue(session)
  returnLogin()
  .then((res)=>{
    chgSession('token',res.jwt)
    console.log('returnlogic', res)
  })
  .catch((e)=>{
    console.log(e.message)
  })
}
function returnLogin(){
  let p = new Promise((resolve,rej)=>{
    setTimeout(()=>{
      resolve({jwt: GOODJWT })
    }, 2000)
  })
  return p
}
function isSelf(userId){
  let isValid = false
  if(!!session.token){
    let decoded = decodeToken(session.token)
    let user = JSON.parse(decoded.user)
    console.log('user ',user)
    isValid = (+ userId) === (+ user.id)
  }
  //console.log('decoded exp and NOW',decoded.exp,now,isSmaller)
  return isValid
}

export {
  isAuthenticated,
  decodeToken,
  isSelf,
  login,
}
