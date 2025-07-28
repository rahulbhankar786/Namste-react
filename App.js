
const parent = React.createElement('div', {
    id: 'parent',
}, [
    React.createElement('div', { id: 'child' }, [
        React.createElement('h1', {}, 'I am an h1 tag'),
        React.createElement('h2', {}, 'I am an h2 tag'),
        React.createElement('h3', {}, 'I am an h3 tag'),
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