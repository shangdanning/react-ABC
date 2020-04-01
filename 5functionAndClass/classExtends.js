//2020-3-31
//类继承常规对象
var people = {
  wish: "wish hapy everyday!"
};
class father {
  constructor(name) {
    this.name = name;
  }
  speak() {
    console.log(this.name + " is a father ,and "+this.wish);
  }
}
Object.setPrototypeOf(father.prototype,people);
class child extends father {
  constructor(name) {
    super(name);
  }
  speak() {
    console.log(this.name + " is a child,and "+this.wish);
  }
}
var d = new child("nike");
d.speak();
