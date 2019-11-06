import React from 'react';

class NewComboForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            item1: '',
            item2: '',
        };
    }

    _handleSubmit = (e) => {
        e.preventDefault();

        const { item1, item2 } = this.state;

        this.props.handleSubmit(item1, item2);
    }

    _updateItemValue = (e) => {
        this.setState({
            [e.target.id]: e.target.value,
        });
    }

    render() {
        console.log("NewComboForm#render");

        return  (
            <React.Fragment>
                <div id="new-combo-form-header">
                    <span className="black">What's something you think is an</span>
                    <span> </span>
                    <span className="brown">underrated combo?</span>
                </div>
                <form onSubmit={this._handleSubmit}>
                    <div className="input-container">
                        <input onChange={this._updateItemValue} className="input-field" name="item" id="item1" type="text" placeholder="First thing" />
                    </div>
                    <div className="input-container">
                        <input onChange={this._updateItemValue} className="input-field" name="item" id="item2" type="text" placeholder="Second thing" />
                    </div>
                    <div id="new-form-spacer"></div>
                    <button type="submit" id="new-combo-form-submit-button">Combine</button>
                </form>
            </React.Fragment>
        );
    }
}

export default NewComboForm;
