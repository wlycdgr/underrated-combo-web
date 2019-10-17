import React from 'react';
import NewComboForm from './NewComboForm';
import './App.css';

class App extends React.Component {
  _handleNewComboSubmit(item1, item2) {
    console.log("App#_handleNewComboSubmit");

    const req = new Request(
      "http://localhost:3001",
      {
        method: 'POST',
        body: { item1, item2 }
      }
    );

    fetch(req)
        .then((res) => {
          console.log("Response received from backend");
          console.log(res);
        });
  }

  render() {
    return (
        <div id="outermost-wrapper">
          <div id="main-content-column">
            <NewComboForm handleSubmit={this._handleNewComboSubmit}/>
          </div>
        </div>
    );
  }
}

export default App;
