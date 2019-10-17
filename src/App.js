import React from 'react';
import NewComboForm from './NewComboForm';
import './App.css';

class App extends React.Component {
  _handleNewComboSubmit(items) {
    console.log("App#_handleNewComboSubmit");
    console.log(items);
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
