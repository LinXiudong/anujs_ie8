//import React from "react";
//import API from '../../api/api';
//import $http from '../../utils/axiosCore';

import "./demo.less";
import store from '../../store';

class Index extends React.Component {
    constructor(props){
        super(props);
        this.state = {

        }

        console.log(this.props.location.state)

        console.log("initial state: ", store.getState());
    }


    render() {
        return (
            <div id="index">
                <p>it is a demo a demo a demo</p>
                
            </div>
        );
    }
}

export default Index;
