import React from "react";
import ReactDOM from "react-dom";
import { Provider } from 'react-redux'; // This provider component will wrap the App component, and will force react and redux to talk to each other nicely
import { createStore, applyMiddleware } from 'redux';



import App from "./components/App";

const store = createStore(()=>[], {}, applyMiddleware()); // creating a redux store

ReactDOM.render(<Provider store={store}><App/></Provider>, document.querySelector("#root"));
