import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import {TweenMax} from "gsap";
import Menu from './components/Menu';
import Home from './components/Home';
import Work from './components/Work';

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {};

    }

    loadData() {}

    render() {

        return (
            <div className="app">
                <Menu changeState={this.changeState} search={this.search}></Menu>
                <Home></Home>
                <Work></Work>
            </div>
        )
    }
}

ReactDOM.render(< App / >, document.getElementById('app'));
