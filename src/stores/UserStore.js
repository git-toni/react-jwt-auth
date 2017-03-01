import {observable,  computed} from 'mobx';

class UserStore{
  @observable info = null
  @observable settings = {}
  @observable favorites = []

  get asJS(){
    return { 
      //info: this.info, 
    }
  }

}
const user = new UserStore()

export default user
