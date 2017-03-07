import {reqProfile} from '../../src/requests/Users';

jest.mock('axios')

const r = {name:'John', email:'john@gmail.com', favorites:[]}
test('reqProfile', () => {
  return reqProfile(24)
  .then((res)=>{
    console.log('test then',res)
    expect(res.data).toEqual(r)
  })
});
