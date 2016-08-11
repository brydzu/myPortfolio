import React, {Component} from 'react';
class Menu extends Component {
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

        const $MenuComp = $('.MenuComp');
        const $upperbox = $('.upperbox');
        const $navigation = $('.navigation');

        tl.to($MenuComp, 0, {
            className: '+=start',
            delay: 1
        }).to($upperbox, .3, {
            className: '+=start'
        }).to($navigation, .3, {
            className: '+=start',
            delay: .4
        });
        // $body, {className: '-=loading'}
    }

    updateInputs(key, event) {}

    render() {
        return (
            <div className="MenuComp">
              <div className="upperbox">
                            <div>
                              <h1 className="title">Joe Santos Garcia</h1>
                              <h3 className="sub-title">Frontend Engineer</h3>
                              </div>
              </div>


                <nav className="navigation">
                    <a href="">Work</a>
                    <a href="">Resume</a>
                    <a href="">Projects</a>
                    <a href="">Contacts</a>
                </nav>
            </div>
        )
    }
}

export default Menu;
