var _createClass = (function() {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }
  return function(Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
})();

function _possibleConstructorReturn(self, call) {
  if (!self) {
    throw new ReferenceError(
      "this hasn't been initialised - super() hasn't been called"
    );
  }
  return call && (typeof call === "object" || typeof call === "function")
    ? call
    : self;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError(
      "Super expression must either be null or a function, not " +
        typeof superClass
    );
  }
  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass)
    Object.setPrototypeOf
      ? Object.setPrototypeOf(subClass, superClass)
      : (subClass.__proto__ = superClass);
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

//2020-3-30
var father = (function() {
  function father(name) {
    _classCallCheck(this, father);

    this.name = name;
  }

  _createClass(father, [
    {
      key: "speak",
      value: function speak() {
        console.log(this.name + " makes a noise.");
      }
    }
  ]);

  return father;
})();

var child = (function(_father) {
  _inherits(child, _father);

  function child() {
    _classCallCheck(this, child);

    return _possibleConstructorReturn(
      this,
      (child.__proto__ || Object.getPrototypeOf(child)).apply(this, arguments)
    );
  }

  _createClass(child, [
    {
      key: "speak",
      value: function speak() {
        console.log(this.name + " barks");
      }
    }
  ]);

  return child;
})(father);

var d = new child("nike");
d.speak();
