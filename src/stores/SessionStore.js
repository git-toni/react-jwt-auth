import {observable,  computed} from 'mobx';
import {decodeToken} from '../utils/auth'

class SessionStore{
  //valid token  in 1year
  @observable token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwidXNlciI6IntcIm5hbWVcIjpcIkpvaG55XCIsXCJpZFwiOlwiMjNcIixcImVtYWlsXCI6XCJob2xhQGhvbGEuY29tXCJ9IiwiYWRtaW4iOnRydWUsImV4cCI6IjE0NTY5MTkzODYifQ.EtC99uHn-EkVlYdx7iH9n79fox3wgu6x2AmE8IVFFcw'
  
  //INvalid token  in 1year
  //@observable token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiYWRtaW4iOnRydWUsImV4cCI6IjE0NTY5MTkzODYifQ.9LnfzBahgabT8vweVMbNG0uSIjwtW82Txju74iqz65U'
  
  @observable status=''


  @computed get userData(){ 
    return JSON.parse(decodeToken( this.token ).user) // return the payload info

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
