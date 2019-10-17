import React from 'react';

class NewComboForm extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { submitHandler } = this.props;

        return  (
            <form onSubmit={submitHandler}>
                <div className="input-container">
                    <label className="input-label" for="element1">Element 1:</label>
                    <input className="input-field" name="element" id="element1" type="text" />
                </div>
                <button type="submit">Submit Combo</button>
            </form>

        );
    }
}

export default NewComboForm;
