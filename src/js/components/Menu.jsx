import React, {Component} from 'react';
import {Link} from 'react-router';
class Menu extends Component {
    constructor(props) {
        super(props);
    }

    menulinks() {
        return (
            <div>
                <Link to="work">Work</Link>
                <Link to="projects">Personal Projects</Link>
                <Link to="joe_santos_resume.pdf" target="new">Resume</Link>
                <Link to="/">Skills</Link>
                <Link to="/">Contacts</Link>
            </div>
        )
    }

    render() {
        return (
            <div className="MenuComp close-menu">
                <div className="upperbox">
                    <div>
                        <h1 className="title">Joe Santos Garcia</h1>
                        <h3 className="sub-title">Frontend Engineer</h3>
                    </div>
                </div>

                <div className="mobile-menu">
                    <div>
                        <h1 className="title">Joe Santos Garcia</h1>
                    </div>

                    <i className="fa fa-bars" aria-hidden="true"></i>
                    {this.menulinks()}
                </div>

                <nav className="navigation">
                    {this.menulinks()}
                </nav>
            </div>
        )
    }
}

export default Menu;
