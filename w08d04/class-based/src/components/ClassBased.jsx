import {Component} from 'react';

class ClassBased extends Component {
  constructor(props) {
    super();

    this.state = {
      counter: 0,
      interviewer: props.interviewer || null,
      secretPhrase: 'hello there',
      somethingElse: null
    };

    this.increment = this.increment.bind(this);
  }

  increment() {
    // DON'T DO THIS
    // this.state.counter += 1;

    this.setState({ counter: this.state.counter + 1, somethingElse: 42 });
  }

  render() {
    // const {props} = this;
    return (
      <div>
        <h2>Nothing has changed</h2>
        <h2>{this.props.someProp}</h2>
        <h2>{this.state.secretPhrase}</h2>
        <h2>Counter: {this.state.counter}</h2>
        <button onClick={this.increment}>Click me!</button>
      </div>
    );
  }
}

export default ClassBased;

// const component = new ClassBased(props);
// component.props = props;
