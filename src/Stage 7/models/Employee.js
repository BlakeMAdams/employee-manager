export default class Employee {
  // constructor
  constructor(){
      super();

      this.state = {
        employee:null,
        originalEmployee:null,
        notModified:true
      }
      this.save = this.save.bind(this);
      this.cancel = this.cancel.bind(this);

  }
  // updateName
  updateName(){
    this.state.originalEmployee
  }

  // updatePhone
  updatePhone(){

  }

   // updateTitle
   updateTitle(){

   }
}