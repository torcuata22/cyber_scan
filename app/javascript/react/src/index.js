import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import Welcome from './components/Welcome'; 

const rootElement = document.getElementById('welcome');
if (rootElement) {
    const root = ReactDOM.createRoot(rootElement);
    root.render(<Welcome />);
} else {
    console.error('Root element not found');
}
