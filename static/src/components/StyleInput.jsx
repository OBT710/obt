import React, { Component } from "react";
import { observable, action } from "mobx";
import { observer } from "mobx-react";

@observer
class StyleInput extends React.Component {
//   @observable newTodoTitle = "";
    constructor(props) {
        super(props)
        this.onChange = this.onChange.bind(this)
    }
    onChange(event) {
        this.props.onChange(event)
        // super.onChange(event)
    }
    // shouldComponentUpdate() {
    //     debugger
    //     return input.value != 1
    // }
    render() {
        console.log('aaaa')
        const { input, value } = this.props
        if ( !input ) {
            return null
        }
        return (
            <div>
                <label htmlFor={input.key}>{input.display || input.name}</label>
                 <div>
                <input
                    className='form-control'
                    id={input.key}
                    type={'text'}
                    name={input.display}
                    value={value || ''}
                    onChange={this.onChange}
                />
                </div>
            </div>
            
    );
    }

    // @action
    //     handleInputChange = e => {
    //         this.value = e.target.value;
    // };

}
// StyleInput.PropTypes = {
//     onChange: propTypes.func.isRequired
// }
// StyleInput.defaultProps = {
//     type: 'text'
// }
export default StyleInput;
