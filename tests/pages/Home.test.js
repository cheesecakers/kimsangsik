import React from 'react';
import ReactDOM from 'react-dom';

import App from '@/App';

describe('pages/Home.js', () => {
    it('renders Hello Home', () => {
        const div = document.createElement('div');
        ReactDOM.render(<App />, div);
        ReactDOM.unmountComponentAtNode(div);
    });
});
