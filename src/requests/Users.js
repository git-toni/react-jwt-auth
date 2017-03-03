import Request from './Request'
function reqProfile(userId){
  new Request('get', 'http://localhost:3000/posts',{name:'jonny'}) 
}

export {
  reqProfile,
}
