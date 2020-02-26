import React from "react";
import ReactDOM from "react-dom";
import { Provider } from 'react-redux'; // This provider component will wrap the App component, and will force react and redux to talk to each other nicely
import { createStore, applyMiddleware } from 'redux';

import reducers from './reducers'; // importing all reducers (that were combined) in my reducers directory

import App from "./components/App";

const store = createStore(reducers, {}, applyMiddleware()); // creating a redux store

ReactDOM.render(<Provider store={store}><App/></Provider>, document.querySelector("#root"));

// this index will contain all of our redux logic, and will also have the final reactDOM render method