import React from "react";
import API from '../../config/api';
import $http from '../../utils/axiosCore';

import "./index.less";


class Index extends React.Component {
    constructor(props){
        super(props);
        this.state = {

        }
    }

    render() {
        return (
            <div id="index">
                <p>it is a demo</p>
            </div>
        );
    }
}

export default Index;
