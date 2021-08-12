import {Component} from 'react';

class LifeCycle extends Component {
  constructor() {
    super();
    this.state = {
      searchTerm: '',
      interval: null
    };
  }

  // fetching data, establish a web socket connection, set an interval
  componentDidMount() {
    console.log('the component has mounted');
    const interval = setInterval(() => {
      console.log('the interval has fired');
    }, 1000);

    this.setState({ interval });
  }

  // listen for particular updates
  componentDidUpdate(prevProps, prevState) {
    console.log('the component has updated');
  }

  // clean up process, sever socket connections, cancel intervals
  componentWillUnmount() {
    console.log('the component will unmounted');
    clearInterval(this.state.interval);
  }

  render() {
    return (
      <div>
        <h2>Lifecycle Component</h2>
        <input 
          value={this.state.searchTerm}
          onChange={(event) => this.setState({ searchTerm: event.target.value })}
        />
        <h2>Search Term: {this.state.searchTerm}</h2>
      </div>
    );   
  }
}

export default LifeCycle;
