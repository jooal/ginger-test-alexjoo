import React from 'react';
import ReactDOM from 'react-dom';
import Authors from '../components/pages/Authors';

//run jest with react 

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div);
  });