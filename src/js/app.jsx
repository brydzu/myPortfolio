import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Menu from './components/Menu';
import $ from 'jquery';

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {

        };


    }
    componentDidMount() {
    }

    loadData() {

    }

    render() {

        return (
            <div className="app">
                <Menu changeState={this.changeState} search={this.search}></Menu>

            </div>
        )
    }
}

ReactDOM.render(< App / >, document.getElementById('app'));
