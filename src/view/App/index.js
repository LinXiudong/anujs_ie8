import React from "react";
import {Router} from "react-router";

import routes from "../../routes";
import $http from "../../utils/axiosCore";
import API from "../../config/api";
import {message} from "antd";

class App extends React.Component {
    render() {
        return (
            <div id="myApp">
                <Router routes={routes}>
                    <div>
                        {this.props.children}
                    </div>
                </Router>
            </div>
        );
    }
}

export default App;
