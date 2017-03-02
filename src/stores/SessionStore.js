import {observable,  computed} from 'mobx';
import {decodeToken} from '../utils/auth'

class SessionStore{
  //valid token  in 1year
  //@observable token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwidXNlciI6IntcIm5hbWVcIjpcIkpvaG55XCIsXCJpZFwiOlwiMjNcIixcImVtYWlsXCI6XCJob2xhQGhvbGEuY29tXCJ9IiwiYWRtaW4iOnRydWUsImV4cCI6IjE1MjAwMDQwMTUifQ.ftzvi1_3C0etJaDjVqC3hFoTLV9iRzKi8PfHb-mbigQ'
  
  //INvalid token  in 1year
  //@observable token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwidXNlciI6IntcIm5hbWVcIjpcIkpvaG55XCIsXCJpZFwiOlwiMjNcIixcImVtYWlsXCI6XCJob2xhQGhvbGEuY29tXCJ9IiwiYWRtaW4iOnRydWUsImV4cCI6IjE0NTY5MzIxNDgifQ.neTM6mTxWojrcfVU6sX9sXmsnZQUgMMIiQuSrWwm5UA'
  
  @observable token  = null
  @observable status=''


  @computed get userData(){ 
    if(!!this.token){
      return JSON.parse(decodeToken( this.token ).user) // return the payload info
    }
    else{
      return {}
    }
  }
  get asJS(){
    return { 
      token: this.token, 
      status: this.status,
    }
  }

}
const session = new SessionStore()

export default session
