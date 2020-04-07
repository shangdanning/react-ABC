//2020-4-2
class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date().toLocaleTimeString()
    };
  }

  componentDidMount() {
    this.timer = setInterval(() => this.tick(), 1000);
  }
  componentWillUnmount() {
    clearInterval(this.timer);
  }
  tick() {
    this.setState({
      date: new Date().toLocaleTimeString()
    });
  }
  render() {
    return (
      <div>
        <h1>Hello!{this.props.name}</h1>
        <h2>it is {this.state.date}.</h2>
      </div>
    );
  }
}
export default Clock;