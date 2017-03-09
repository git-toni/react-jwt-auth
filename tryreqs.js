var axios = require('axios')

// for user 4
var goodjwt= 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJqaXQiOiI4YWYyYjBjOGU2NTdhNDY3NmExNjc0ZDFlM2UzYzlhMCIsImV4cCI6MTYxNTIxODUzNiwidXNlciI6eyJpZCI6NCwibmFtZSI6ImxvbCIsImVtYWlsIjoibG9sQGhvbGEubGEifX0.xs8xuBLeYNyDee3t8Sw2DPt3ay2Bgl1xm4vy_9gtqbA'

//.get('http://localhost:3000/users/asd/profile',{headers:{authorization: "Bearer "+goodjwt}})
//axios
//.get('http://localhost:3000/lololo',{headers:{authorization: "Bearer "+goodjwt}})
//.then(function(res){console.log(res)})
//.catch(function(err){ console.log(err) })


//LOGIN

axios
.post('http://localhost:3000/login',{auth:{email:'lol@hola.la',password:3333}})
.then(function(res){console.log(res)})
.catch(function(err){ console.log(err) })


axios
.post('http://localhost:3000/login',{auth:{email:'lol@hola.la',password:2333}})
.then(function(res){console.log(res)})
.catch(function(err){ console.log(err) })
