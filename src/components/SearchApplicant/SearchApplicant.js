import React from 'react';
import '../Driver/Driver';
import 'bootstrap/dist/css/bootstrap.min.css';
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


      <div className='container'>
        {/*<div className='row'>
          <div className='col-sm-3 offset-sm-4'>
          <img src={Logo} className="img-fluid" alt="Responsive image"/>
          </div>
        </div>*/}


        <h1>Search</h1>
          <div className="form-row align-items-center">
            <div className="col-sm-5 my-1 offset-sm-3">
              <label className="sr-only" for="inlineFormInputGroupUsername">Email</label>
              <div className="input-group">
                <div className="input-group-prepend">
                  <div className="input-group-text">@</div>
                </div>
                <input type="email" className="form-control" id="inlineFormInputGroupUsername" placeholder="Email" onChange={this.handleChange}/>
              </div>
            </div>
            <div className="col-auto my-1">
              <button type="button" className="btn btn-primary" onClick={this.handleSubmit}>Submit</button>
            </div>
          </div>
        <br/>
      </div>

    )

  }
}


export default SearchApplicant;
