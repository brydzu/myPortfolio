import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import {TweenMax} from "gsap";
//components
import Menu from './Menu';
import Home from './Home';
import Work from './Work';

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {};

    }

    loadData() {}

    render() {

        return (
            <div className="app">

                <Menu></Menu>
                {this.props.children}
            </div>
        )
    }
}

export default App;
