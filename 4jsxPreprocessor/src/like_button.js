//2020-3-30
"use strict";
class LikeButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      liked: false
    };
  }
  render() {
    if (this.state.liked) {
      return "You liked this";
    }
    const num = "<script>alert(111);</script>";
    return (
      <button className={'class'+num} onClick={() => this.setState({ liked: true })}>Like{num}888</button>
    );
  }
}
let domContainer = document.querySelector("#like_button_container");
ReactDOM.render(<LikeButton />, domContainer);
