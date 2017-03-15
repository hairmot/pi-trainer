import React, { Component } from 'react';
import {createStore} from 'redux'
import {Provider} from 'react-redux';
import reducer from './Reducers/';
import App from './App';

var store = createStore(reducer);

class AppContainer extends Component {
    render() {
        return (
            <Provider store={store} >
                <App />
            </Provider>
        )
    }


}

export default AppContainer;