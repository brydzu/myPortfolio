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

        this.state = {
            loading: false
        };

    }
    startmenu() {
        //  var x = ReactDOM.findDOMNode(this.refs.author);
        var tl = new TimelineLite();

        const $MenuComp = $('.MenuComp');
        const $upperbox = $('.upperbox');
        const $navigation = $('.navigation');

        tl.to($MenuComp, 0, {
            className: '+=start',
            delay: 1
        }).to($upperbox, .3, {className: '+=start'}).to($navigation, .3, {
            className: '+=start',
            delay: .4
        });
        // $body, {className: '-=loading'}
    }
    turnoffmenu() {
        //  var x = ReactDOM.findDOMNode(this.refs.author);
        var tl = new TimelineLite();

        const $MenuComp = $('.MenuComp');
        const $upperbox = $('.upperbox');
        const $navigation = $('.navigation');

        tl.to($MenuComp, 0, {
            className: '-=start',
            delay: 1
        }).to($upperbox, .3, {className: '-=start'}).to($navigation, .3, {
            className: '-=start',
            delay: .4
        });
    }
    componentDidMount() {
        this.startmenu();
    }
    componentWillUnmount() {
        // this.turnoffmenu();
    }

    loadData() {}

    render() {

        return (
            <div className="app">

                <Menu></Menu>
                {this.props.children && React.cloneElement(this.props.children, {turnoffmenu: this.turnoffmenu})}
            </div>
        )
    }
}

export default App;
