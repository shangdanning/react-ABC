function Tree(name) {
  this.name = name;
}
var theTree=new Tree("Redwood");
console.log("theTree.constructor is "+theTree.constructor);
console.log( Object.getPrototypeOf(theTree));
console.log( Object.getPrototypeOf(Tree));
//true
console.log( Object.getPrototypeOf(theTree)===Tree.prototype);
//true
console.log( Object.getPrototypeOf(Tree)===Function.prototype);
//任何对象都有一个指向原型对象的内部指针 ，即__proto__
console.log(Tree.prototype.__proto__ ===Object.prototype);