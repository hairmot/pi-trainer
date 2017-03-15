import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import reducer from './Reducers/';
import AppContainer from './AppContainer';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';

injectTapEventPlugin();

ReactDOM.render(
  <MuiThemeProvider>
    <AppContainer />
  </MuiThemeProvider>,
  document.getElementById('root')
);


  
