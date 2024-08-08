class App extends Component {
  constructor() {
    // before the load initialize the variables
    super();
  }
  componentDidMount() {
    // when component mount and unmount
    console.log("Mounting Component");
  }

  componentDidUpdate() {
    console.log("Component did update");
  }

  render() {
    return (
      <div>
        <h1>Hello Words!</h1>
      </div>
    );
  }
}

export default App;
