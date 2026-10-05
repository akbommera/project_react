const header = React.createElement('h1', {id: "header"}, "Hello React!");
const parent = React.createElement('div', {}, [React.createElement('h1', {}, "Parent"), React.createElement('div', {}, React.createElement('h1', {}, "CHild"))])
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render([header, parent])