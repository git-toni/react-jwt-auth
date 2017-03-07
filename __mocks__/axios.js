import {getUrlPath} from '../src/utils/url'

function responses(method,path,data){
  switch(method){
    case 'post':
      return true
    case 'get':
      if(!!(/users\/\d+\/profile/.exec(path))){
        return {name:'John', email:'john@gmail.com', favorites:[]}
      }
    default:
      return 'NO PATH MATCHES'
  }
}
function axios({method, url, data, headers}){
  let path = getUrlPath(url)
  let resp = responses(method, url, data)
  //console.log('path', path,resp)
  return new Promise((resolve,reject)=>{
    resolve({data: resp})
  })
}

export default axios
