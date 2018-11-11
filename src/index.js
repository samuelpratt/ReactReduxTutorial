import React from "react"
import ReactDOM from "react-dom"
import App from "./components/App.js"

import {
    addTodo,
    toggleTodo,
    setVisibilityFilter,
    VisibilityFilters
  } from "./state/actions"

import { createStore } from 'redux'
import todoApp from "./state/reducers"
const store = createStore(todoApp)

// Log the initial state
console.log(store.getState())

// Every time the state changes, log it
// Note that subscribe() returns a function for unregistering the listener
const unsubscribe = store.subscribe(() => console.log(store.getState()))

store.dispatch(addTodo("Make this work"))

ReactDOM.render(<App />, document.getElementById("root"));
