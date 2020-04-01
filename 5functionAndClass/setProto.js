let shape = function () {};
var p = {
    a: function () {
        console.log('a');
    }
};

let circle = new shape();
//使用这种方式来改变和继承属性是对性能影响非常严重的，并且性能消耗的时间也不是简单的花费在 obj.__proto__ = ... 语句上, 
// 它还会影响到所有继承来自该 [[Prototype]] 的对象，如果你关心性能，你就不应该在一个对象中修改它的 [[Prototype]]。
// 相反, 创建一个新的且可以继承 [[Prototype]] 的对象，推荐使用 Object.create()。
circle.__proto__ = p;
circle.a(); //  a
console.log(shape.prototype === circle.__proto__);//false

let test=Object.create(circle);
test.a(); //  a
