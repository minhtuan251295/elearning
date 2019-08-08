import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';

import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers/rootReducer';
import { Provider } from 'react-redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import { BrowserRouter, Switch, Route } from 'react-router-dom';
import CourseDetail from './components/CourseDetail';
import Register from './components/Register';
import SignIn from './components/SignIn';
import axios from 'axios';

import UserDetail from "./components/UserDetail";



const initialState = {};
const middleware = [thunk];
/* Create Store */
const composeEnhancers = composeWithDevTools({
  // Specify name here, actionsBlacklist, actionsCreators and other options if needed
})

const store = createStore(
  rootReducer,
  initialState,
  compose(
    applyMiddleware(...middleware),
    // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    composeEnhancers()
  )
)
const value = localStorage.getItem("CurrentUser");
if (value) {
  const currentUser = JSON.parse(value);
  axios.defaults.headers.common['Authorization'] = "Bearer " + currentUser.accessToken;
}

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Switch>
        <Route path="/course/:courseId" exact component={CourseDetail} />
        <Route path="/user-detail" exact component={UserDetail} />
        <Route path="/register" exact component={Register} />
        <Route path="/sign-in" exact component={SignIn} />
        <Route path="/" exact component={App} />
      </Switch>
    </BrowserRouter>
  </Provider>
  , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
