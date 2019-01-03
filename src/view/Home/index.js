import React from "react";
//import {Router} from "react-router";

class App extends React.Component {
    render() {
        return (
            <div>
                <div>
                    {this.props.children}
                </div>
            </div>
        );
    }
}

export default App;
