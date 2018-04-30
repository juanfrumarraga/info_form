import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Form,Row, Col, ButtonToolbar, Image, Checkbox,HelpBlock,Button, Grid,Alert, FormControl, FormGroup, ControlLabel} from 'react-bootstrap'
import Logo from '../../logo.jpg';

class SearchApplicant extends React.Component{
  constructor(props){
    super(props);
    this.state={
      email:'',
      phone_number:''
    };
    this.handleChange=this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e){
    this.setState({email : e.target.value})
  }

  handleSubmit(){
    this.props.getApplicant(this.state.email)
  }

  render() {

    return (


      <div>
        <Row>
          <Col xs={12} md={12}>
            <h3>Search</h3>
          </Col>
        </Row>
        <Row>
          <Col xs={12} md={12}>
            <label className="sr-only" htmlFor="inlineFormInputGroupUsername">Email</label>
            <div className="input-group">
              <div className="input-group-prepend">
                <label htmlFor="inlineFormInputGroupUsername" className="input-group-text">Email</label>
              </div>
              <input  type="email" className="form-control form-control-reset" id="inlineFormInputGroupUsername" placeholder="juan@cabify.com" onChange={this.handleChange}/>
              <div className="input-group-append">
                <button type="button" className="btn btn-main" onClick={this.handleSubmit}>Submit</button>
              </div>
            </div>
          </Col>
        </Row>
        <br/>
      </div>
    )

  }
}


export default SearchApplicant;
