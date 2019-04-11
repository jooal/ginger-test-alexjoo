import React from 'react';
import ReactDOM from 'react-dom';
import Articles from '../components/pages/Articles';

//run jest with react 

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div);
  });