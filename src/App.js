import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import RestaurantCard from "./components/RestaurantCard";

// {/* how to create this type of structure in react. It's like nested tag.
//     <div id="parent">
//     <div id="child">
//         <h1></h1>
//         <h2></h2>
//     </div>
//     <div id="child2">
//         <h1></h1>
//         <h2></h2>
//     </div>
// </div>
// ReactElement(Object) => HTML(Browser Understand)
// */}
//it is not good code but it is core concept of react. We can use html inside jsx.If we use jsx then it will be make life easier.
    // const parent = React.createElement("div", {id: "parent"},
    //    [ React.createElement("div", {id: "child"},
    //     [React.createElement("h1", {}, "This is h1 tag"),React.createElement("h2", {}, "This is h2 tag"),]
    // ),
    // React.createElement("div", {id: "child"},
    //     [React.createElement("h1", {}, "This is h1 tag"),React.createElement("h2", {}, "This is h2 tag"),]
    // )]
    // )

    //jsx
    // react can be written inside jsx
    
    
    
    
    
    //print hello world in react
    //createElement takes three parameter.(tag name,object, what do you want write in tag)
    // createElement is used for creating a object not h1 tag
    // const heading = React.createElement("h1",{id: "heading"},"hello world from react");
    // const root = ReactDOM.createRoot(document.getElementById("root"));
    // //render takes the object and it tells on browser.
    // // root.render(heading);
    // root.render(parent);



    //another code
    //React.createElement = ReactElement- js object = HTMLElement(render)
    //React element
    //heading is end of the day react as object
    // const heading = React.createElement("h1",{id: "heading"},"Namaste React");
    // console.log(heading);
    // //jsx: jsx is not HTML in JS. it is called html/xml like syntax.
    // // jsx (transpiled before it reacheds the JS Engine) => by using parcel => babel(it is JS package, installed by parcel in project)
    // // JSX : React.createElement => ReactElement- js object = HTMLElement(render)
    // // transpiled: code is converted to the code that browser can understand
    // // this code is not pure JS language
    // const jsxHeading = <h1 className="head">Namaste REact using jsx</h1>
    // console.log(jsxHeading);

    // const Title = () =>(
    //     <h1 className="head">Namaste React using JSX</h1>
    // );

    // //React functional Component: it is normal JS function
    // // Class based component - old way
    // //function based component - new way
    // // const data = api.getData();
    // const HeadingComponent = () =>(
    //     <div id="container">
    //         <Title/>
    //         {/* we can insert component from this type */}
    //         {/* <Title></Title> */}
    //         {/* {Title()} */}
    //         <h2>{100+200}</h2>
    //         <h1>Namaste react functional component</h1>

    //     </div>    
    // );

    // // //it is not the best way
    // // const HeadingComponent = () => (
    // //     <h1 className="heading">Namaste react functional component</h1>
    // // );

    // const root = ReactDOM.createRoot(document.getElementById("root"));
    // //it will take heading object.
    // // root.render(jsxHeading);
    // root.render(<HeadingComponent/>)



    //build food ordering app
    // Header
    //     -Logo
    //     -Nav Items 
    // Body 
    //     -Search Input 
    //     -RastaurantContainer 
    //         -RestaurantCard 
                // -img
                // -Name of Restaurant, Star rating, cuisine, delievery time
    // Footer 
    //     -Copyright 
    //     -Links 
    //     -Address 
    //     -Contact

    const AppLayout = () =>{
        return (
            <div className="app">
                <Header/>
                <Body/>
            </div>
        )
    }

    const root = ReactDOM.createRoot(document.getElementById("root"));
    root.render(<AppLayout/>)