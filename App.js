const parent=React.createElement('div',{id:'parent'},
    [
        React.createElement('div',{id:'child1'},[
            React.createElement('h1',{},"I'm an h1 tag"),
            React.createElement('h2',{},"I'm an h2 tag")
       
        ]),
        React.createElement('div',{id:'child2'},[
            React.createElement('h1',{},"I'm an h1 tag"),
            React.createElement('h2',{},"I'm an h2 tag")
       
        ]),
    ]
  
        )

        console.log(parent);

const Root=ReactDOM.createRoot(document.getElementById('root'));

Root.render(parent);