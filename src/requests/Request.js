import axios from 'axios'
import { session } from '../stores'

class Request{
  constructor(method='GET', url, data, headers=null){
    this.method = method
    this.url = url
    this.data = data
    this.headers = !!headers 
                   ? {'Authorization': `Bearer ${session.token}`}
                   : null
    this.invoke()
  }
  invoke(){
    //debugger;
    //axios.get(this.url)
    axios({
      method: this.method,
      url: this.url,
      data: this.data,
      headers: this.headers
    })
    //headers: {'Authorization': `Bearer ${session.token}`},
    //headers: {authorization: 'Bearer lkjahsdliaushd234'},
    //headers: {'Authorization': `Bearer ${session.token}`},
  }
}

export default Request
