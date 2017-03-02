import {observable,  computed} from 'mobx';

class UiStore{
  @observable errors = []
  @observable notifications = [
    {type:'error',content:'Hola que tal'},
    {type:'error',content:'nono noasdaosd asd jashdo'},
  ]


  get asJS(){
    return { 
      //errors: this.errors, 
    }
  }

}
const ui = new UiStore()

export default ui
