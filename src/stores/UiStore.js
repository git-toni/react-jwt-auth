import {observable,  computed} from 'mobx';

class UiStore{
  @observable errors = []
  @observable notifications = [
    {type:'info',content:'Hola que tal'},
    {type:'success',content:'nono noasdaosd asd jashdo'},
  ]
  @observable loading = null


  get asJS(){
    return { 
      //errors: this.errors, 
    }
  }

}
const ui = new UiStore()

export default ui
