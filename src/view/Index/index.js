//import React from "react";
//import API from '../../api/api';
import $http from '../../utils/axiosCore';
import { createStore } from "redux";

import "./index.less";
import { Link, PropTypes } from 'react-router';
import tools from '../../utils/tools.js';

import store from '../../store';
import { addToProducts }  from '../../store/actions/products-actions';


class Index extends React.Component {
    constructor(props){
        super(props);
        this.state = {

        }

        console.log("initial state: ", store.getState());

        let unsubscribe = store.subscribe(() =>
            console.log(store.getState())
        );

        store.dispatch(addToProducts('cp1'));
        store.dispatch(addToProducts('cp2'));

        unsubscribe();


        $http.post(
                '/finepetro-api/api/message/unread_count',
                {a:1, b:2}
            )
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            }
        );

        
       
    }

    handleEdit(){
        this.props.history.pushState({a:11}, '/home/demo')
    }

    render() {
        return (
            <div id="index">
                <p>it is a demo</p>
                <Link to="/home/demo">Three</Link>
                <div onClick={(param) => this.handleEdit(param)}>click it</div>
            </div>
        );
    }
}

//Index.contextTypes = { history: PropTypes.history }

export default Index;
