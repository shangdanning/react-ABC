var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import React from "react";

var Clock = function (_React$Component) {
  _inherits(Clock, _React$Component);

  function Clock(props) {
    _classCallCheck(this, Clock);

    var _this = _possibleConstructorReturn(this, (Clock.__proto__ || Object.getPrototypeOf(Clock)).call(this, props));

    _this.handleClick = function () {
      // alert("111");
      // alert(this.state.date+10);
      // this.setState((state)=>({
      //   date:state.date+10
      // }));
      _this.setState({ date: _this.state.date + 10 });
    };

    _this.state = {
      // date: new Date().toLocaleTimeString()
      date: 10
    };
    // 为了在回调中使用 `this`，这个绑定是必不可少的
    // this.handleClick = this.handleClick.bind(this);
    return _this;
  }

  _createClass(Clock, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      // this.timer = setInterval(() => this.tick(), 1000);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      clearInterval(this.timer);
    }
  }, {
    key: "tick",
    value: function tick() {
      // this.setState({
      // date: new Date().toLocaleTimeString()
      // date: this.state.date + 10,
      // });
      this.setState(function (state) {
        return {
          date: state.date + 10
        };
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      // 此语法确保 `handleClick` 内的 `this` 已被绑定。
      return React.createElement(
        "div",
        null,
        React.createElement(
          "h1",
          { onClick: function onClick(e) {
              return _this2.handleClick(id, e);
            } },
          "Hello!",
          this.props.name
        ),
        React.createElement(
          "h2",
          null,
          "it is ",
          this.state.date,
          "."
        )
      );
    }
  }]);

  return Clock;
}(React.Component);

export default Clock;