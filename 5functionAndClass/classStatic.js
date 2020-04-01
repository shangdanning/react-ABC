function Animal() { 
    this.name="happy";
}

Animal.prototype.speak = function() {
  return this;
}

Animal.eat = function() {
  return this;
}

let obj = new Animal();
let objNormal = obj.speak();
console.log(objNormal); // Animal { name: 'happy' }

// 调用该函数的“this”值将发生自动装箱。
let speak = obj.speak;
let obj1=speak();
console.log(obj1); // global object

// 调用该函数的“this”值将发生自动装箱。
let eat = Animal.eat;
let obj2=eat();
console.log(obj2); // global object