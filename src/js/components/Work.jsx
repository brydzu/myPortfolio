import React, {Component} from 'react';
class Work extends Component {
    constructor(props) {
        super(props);

        // this.updateInputs = this.updateInputs.bind(this);
    }

    render() {
        return (
            <div className="WorkComp">
                <div className="row box ">
                    <div className="col-md-6 ">
                        <img src="img/epa/epa-imac.png " width="100% "/>
                    </div>
                    <div className="col-md-6 ">
                        <h1>EPA RRP Online
                        </h1>
                        <p>
                            <strong>Target:
                            </strong>
                            <a href="https://www.eparrponline.com/" target="new">
                                https://www.eparrponline.com/</a>
                        </p>
                        <p>
                            <strong>Company:
                            </strong>
                            Able Safety LLC.</p>
                        <p>
                            <strong>Description:
                            </strong>
                            Built a Learning Management System (LMS) EPARRPONLINE.COM Designed the front end of the site and admin interface of the LMS. Managed a team of 4 in house web developers and 2 remote developers. Tools used to built the site were Angular JS, Laravel (PHP), Git Bitbucket (sourceTree).</p>

                    </div>
                </div>

                <div className="row box ">
                    <div className="col-md-6 ">
                        <img src="img/epa/asme-imac.png" width="100% "/>
                    </div>
                    <div className="col-md-6 ">
                        <h1>The American Society of Mechanical Engineers</h1>
                        <p>
                            <strong>Target:
                            </strong>
                            <a href="https://www.asme.org/" target="new">https://www.asme.org/</a>
                        </p>
                        <p>
                            <strong>Company:
                            </strong>
                            ASME Corp.</p>
                        <p>
                            <strong>Description:
                            </strong>
                            Maintained website by adding new content. Created new UI features using HTML & Jquery. Helped launch new sections for users. Created HTML email campaigns. Worked in a small team environment.</p>
                    </div>
                </div>

                <div className="row box ">
                    <div className="col-md-6 ">
                        <img src="img/epa/omni-imac.png " width="100% "/>
                    </div>
                    <div className="col-md-6 ">
                        <h1>Omni Fitness Center</h1>
                        <p>
                            <strong>Target:
                            </strong>
                            <a href="http://www.theomnifitnesscenter.com/" target="new">http://www.theomnifitnesscenter.com/</a>
                        </p>
                        <p>
                            <strong>Company:
                            </strong>
                            Omni Group.</p>
                        <p>
                            <strong>Description:
                            </strong>
                            Built the front end of the web site in collaboration with another designer in Cats Eye Webs. This site was made in php using drupal as the Content Management System.
                        </p>
                    </div>
                </div>

            </div>
        )
    }
}

export default Work;
