import React, { Component } from "react";
import { observable, action, toJS } from "mobx";
import { observer } from "mobx-react";
import axios from 'axios';
import {handlePost} from "../network/GeneralNetwork"
import StyleInput from "./StyleInput";

@observer
class PersonalInfoForm extends React.Component {
    constructor (props) {
        super(props)
        this.updateProperty = this.updateProperty.bind(this)
        this.onChange = this.onChange.bind(this)
        this.state = {}
        
       
  }
  updateProperty = (key, value) => {
    this.state.PersonalInfoData[key]['value'] = value
    this.setState(Object.assign(this.state, {PersonalInfoData: this.state.PersonalInfoData}))
  }

  onChange = event => {
        this.updateProperty(event.target.id, event.target.value)
  }
  fetchInfoFromServer = url => {
    
    // handleGet(url, this.updateKeys).bind(this)
  }
  updateKeys = data => {    
      this.setState(Object.assign(this.state, {PersonalInfoData: data}))
  }
  componentDidMount = () => {
    this.setState({a: 'a'})
    axios.get('http://127.0.0.1:5000/personal_details').
    then( response => {this.updateKeys(response.data)})
    // this.fetchInfoFromServer('PersonalDetails', this.updateKeys)
  }
//   onChange (event) {
//     this.updateProperty(event.target.name, event.target.value)
//   }

  render() {
      if (!this.state.hasOwnProperty('PersonalInfoData')) {
          return null
      }
      const PersonalInfoData = this.state.PersonalInfoData
    return (
      <div style={{'textAlign': 'right'}}>
          <h1>
              פרטים אישיים
          </h1>
         <div>
          <div style={{'width': '90%'}}>
              <form onSubmit={this.handleFormSubmit}>
                  {
                    Object.keys(PersonalInfoData).map((v) => 
                        <StyleInput input={PersonalInfoData[v]} value={PersonalInfoData[v]['value']} onChange={this.onChange}/>
                    )
                    }
                
                {/*<StyleInput fieldName={'ת.ז.'}/>
                <StyleInput fieldName={'כתובת'}/>
                <StyleInput fieldName={'דואר אלקטרוני'}/>
                <StyleInput fieldName={'שם'}/>*/}
                
                <button type="submit">שלח</button>
              </form>
            </div>
          </div>
          
      </div>
    );
  }

  @action
    handleFormSubmit = e => {
        handlePost(toJS(this.state.PersonalInfoData), this.handleResponse)
        // this.props.store.addTodo(this.newTodoTitle);
        // this.newTodoTitle = "";
        e.preventDefault();
    }
 @action
    handleResponse = response => {
        const a = response
        debugger
        const b = 'b'
    }
    
    
    
}
// PersonalInfo.PropTypes = {
//     PersonalInfoData: propTypes.PersonalInfo
// }
export default PersonalInfoForm;
