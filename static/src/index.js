import React from "react";
import { render } from "react-dom";
import DevTools from "mobx-react-devtools";

import TodoList from "./components/TodoList";
import TodoListModel from "./models/TodoListModel";
import TodoModel from "./models/TodoModel";
import PersonalInfoForm from "./components/PersonalInfoForm"
import {PersonalInfoData} from "./models/PersonalInfoData"

import GeneralNetwork from "./network/GeneralNetwork"
const store = new TodoListModel();

render(
  <div>
    <DevTools />
    <PersonalInfoForm PersonalInfoData={PersonalInfoData} />
  </div>,
  document.getElementById("root")
);

// store.addTodo("Get Coffee");
// store.addTodo("Write simpler code");
// store.todos[0].finished = true;

// setTimeout(() => {
//   store.addTodo("Get a cookie as well");
// }, 2000);

// playing around in the console
window.store = store;
