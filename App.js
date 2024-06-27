{/* how to create this type of structure in react. It's like nested tag.
    <div id="parent">
    <div id="child">
        <h1></h1>
        <h2></h2>
    </div>
    <div id="child2">
        <h1></h1>
        <h2></h2>
    </div>
</div>
ReactElement(Object) => HTML(Browser Understand)
*/}
//it is not good code but it is core concept of react. We can use html inside jsx.If we use jsx then it will be make life easier.
    const parent = React.createElement("div", {id: "parent"},
       [ React.createElement("div", {id: "child"},
        [React.createElement("h1", {}, "This is h1 tag"),React.createElement("h2", {}, "This is h2 tag"),]
    ),
    React.createElement("div", {id: "child"},
        [React.createElement("h1", {}, "This is h1 tag"),React.createElement("h2", {}, "This is h2 tag"),]
    )]
    )

    //jsx
    // react can be written inside jsx
    
    
    
    
    
    //print hello world in react
    //createElement takes three parameter.(tag name,object, what do you want write in tag)
    // createElement is used for creating a object not h1 tag
    // const heading = React.createElement("h1",{id: "heading"},"hello world from react");
    const root = ReactDOM.createRoot(document.getElementById("root"));
    //render takes the object and it tells on browser.
    // root.render(heading);
    root.render(parent);