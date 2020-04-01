// let shape = {};
// //null
// console.log(shape.__proto__.__proto__ );
// //[Function: Object]
// console.log(Object);
// //{}
// console.log(Object.__proto__.__proto__);
// //null
// console.log(Object.__proto__.__proto__.__proto__);
// //[Function: Function]
// console.log(Function);
// function test(){

// }
// //null
// console.log(test.__proto__.__proto__.__proto__);
// //null
// console.log(test.prototype.__proto__.__proto__);

console.log(Function.__proto__===Function.prototype);
//[Function: Function]
console.log(Function);
//null
console.log(Function.__proto__.__proto__.__proto__);
//[Function: Object]
console.log(Object);
//[Function]
console.log(Object.__proto__);
//true
console.log(Object.__proto__===Function.prototype);
//null
console.log(Object.__proto__.__proto__.__proto__);
//[Function: test]
function test(){

}
console.log(test);
//null
console.log(test.__proto__.__proto__.__proto__);
 var a=new test();
 console.log(a.__proto__.__proto__.__proto__);

 console.log(test.__proto__.__proto__===test.prototype.__proto__);
 console.log(test.__proto__===test.prototype);