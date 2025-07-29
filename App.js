import React from 'react';
import ReactDOM from 'react-dom/client';

const parent = React.createElement('div', {
    id: 'parent',
}, [
    React.createElement('div', { id: 'child' }, [
        React.createElement('h1', {
            key: 'h1',
            style: {
                color: 'red',
                fontSize: '30px',
            },
        }, 'I am an h1 tag'),
        React.createElement('h2', {
                key: 'h2'
        }, 'I am an h2 tag'),
        React.createElement('h3', {
            key: 'h3'
        }, 'I am an h3 tag'),
    ]),
]);

const element = React.createElement('h1', {
    id: 'heading',
}, 'Hello World!');

const root = ReactDOM.createRoot(document.getElementById('root'));

console.log("parent", parent);
root.render(
    parent
);