//2020-3-30
class father {
  constructor(name){
      this.name=name;
  }
  speak(){
      console.log(this.name+' makes a noise.');
  }
}
class child extends father {
    speak(){
        console.log(this.name+' barks');
    }
}
var d=new child('nike');
d.speak();

