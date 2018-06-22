import React, {Component} from 'react'
import axios from 'axios'
import { action, observable } from "mobx";
import { observer } from "mobx-react";

export function handlePost(data, handleResponse) {
    debugger
      axios.post('http://localhost:8888/api/dsm/form', data).
      then( response => {handleResponse(response.data)})
      const a = data
}

// export function handleGet(url, handleResponse) {
//   debugger
   
// }   