import React from 'react';
import NewComboForm from './NewComboForm';
import './App.css';

class App extends React.Component {
  constructor(props){
    super(props);
  }

  _handleNewComboSubmit(comboElements) {
    console.log(comboElements);
  }

  render() {
    return (
        <div id="outermost-wrapper">
          <div id="title">
            <span className="brown">Underrated</span>
            <span> </span>
            <span className="black">Combo</span>
          </div>
          <div id="main-content-column">
            <NewComboForm submitHandler={this._handleNewComboSubmit}/>
          </div>
        </div>
    );
  }
}

export default App;
