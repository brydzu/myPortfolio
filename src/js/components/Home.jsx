import React, {Component} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { FirstAction } from '../actions/index';

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
    

    updateInputs(key, event) {}

    render() {
        return (
            <div className="HomeComp">
              Swag
            </div>
        )
    }
}

function mapStateToProps(state){
  return{
    first: state.first
  }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({ FirstAction: FirstAction }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
