import {getUrlPath} from '../src/utils/url'
import {userProfile} from './fakeResponses'

function responses(method,path,data){
  switch(method){
    case 'post':
      return true
    case 'get':
      if(!!(/users\/\d+\/profile/.exec(path))){
        return {status: 200, data: userProfile}
        //return {id: 4, name:'John', email:'john@gmail.com', favorites:[]}
      }
    default:
      let r = { status: 404, statusText: 'Not found', data:{msg:'Some error description'}}
      //return { status: 404, statusText: 'Not found', data:{msg:'Some error description'}}
      return r
    //throw Error(JSON.stringify(r))
    //throw Error(r)
  }
}
function axios({method, url, data, headers}){
  //console.log('axios url',url)
  //console.log('path', path,resp)
  return new Promise((resolve,reject)=>{
    try{
      let path = getUrlPath(url)
      let resp = responses(method, url, data)
      //resolve(resp)
      if(resp.status <= 300 && resp.status >= 200){
        resolve(resp)
      }
      else{
        reject({message: 'Just for the lols', response:resp})
      }
    }catch(e){
      console.log('err',e)
      //reject({message: err.data.msg, response: err})
    }
  })
}

export default axios
