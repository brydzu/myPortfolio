import React, {Component} from 'react';
class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            street: '',
            state: '',
            city: ''
        }

        // this.updateInputs = this.updateInputs.bind(this);
    }
    componentDidMount() {
        //  var x = ReactDOM.findDOMNode(this.refs.author);
        var tl = new TimelineLite();

        const $HomeComp = $('.HomeComp');
        const $upperbox = $('.upperbox');
        const $navigation = $('.navigation');
        // const $HomeComp = $('.HomeComp');

        tl.to($HomeComp, 0, {
            className: '+=start',
            delay: 1
        }).to($upperbox, .3, {
            className: '+=start'
        }).to($navigation, .3, {
            className: '+=start',
            delay: .4
        }).to($HomeComp, 0, {
            opacity: 1,
            // delay: 1
        });
        // $body, {className: '-=loading'}
    }

    updateInputs(key, event) {}

    render() {
        return (
            <div className="HomeComp">
              Swag
            </div>
        )
    }
}

export default Home;
