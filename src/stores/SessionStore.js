import {observable,  computed} from 'mobx';

class SessionStore{
  @observable token={ 
    name: 'Johnny'
  }
  @observable status=''


  @computed get userData(){ 
    return this.token // return the payload info

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
