import React from 'react';
import ReactDOM from 'react-dom';
import App from './AppContainer';

describe('(Component) App', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
        ReactDOM.render( <AppContainer />, div);
  });
});