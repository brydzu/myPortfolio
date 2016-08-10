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
    updateInputs(key, event) {}

    render() {
        return (
            <div className="MenuComp start">
              <div className="upperbox start">
                            <div>
                              <h1 className="title">Joe Santos Garcia</h1>
                              <h3 className="sub-title">Frontend Engineer</h3>
                              </div>
              </div>


                <nav className="">
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
