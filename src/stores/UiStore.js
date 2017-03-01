import {observable,  computed} from 'mobx';

class UiStore{
  @observable errors = []
  @observable notifications = []


  get asJS(){
    return { 
      //errors: this.errors, 
    }
  }

}
const ui = new UiStore()

export default ui
