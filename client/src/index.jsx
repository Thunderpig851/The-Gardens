import React from 'react';
import render from 'react-dom'
import ReactDOM from 'react-dom';



class App extends React.Component {
  constructor(props) {
    super(props);

  }


  render() {
    return (
      <div>
        <h1>Hello Hanging Gardens</h1>
      </div>
    )
  }
};

ReactDOM.render(<App />, document.getElementById('app'));