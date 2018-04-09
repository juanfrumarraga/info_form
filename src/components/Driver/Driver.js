import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';


class Driver extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  handleSelect(e){

  }

  handleClick(){

  }


  render(){
    return (
      <div classNameName="container">
        <h1>Info</h1>
        <div className='row'>
          <div className='col-md-6 offset-md-3'>
            <div className="input-group mb-3">
              <div className="input-group-prepend">
                <span className="input-group-text" id="basic-addon1">@</span>
              </div>
              <input type="text" className="form-control" value={this.props.applicant.email} />
            </div>
          </div>
        </div>
        <div className='row'>
          <div className='col-md-6 offset-md-3'>
            <div className="input-group mb-3">
              <div className="input-group-prepend">
                <span className="input-group-text" id="basic-addon1">First Name</span>
              </div>
              <input type="text" className="form-control" value={this.props.applicant.first_name}/>
            </div>
          </div>
        </div>
        <div className='row'>
          <div className='col-md-6 offset-md-3'>
            <div className="input-group mb-3">
              <div className="input-group-prepend">
                <span className="input-group-text" id="basic-addon1">Last Name</span>
              </div>
              <input type="text" className="form-control" value={this.props.applicant.last_name} />
            </div>
          </div>
        </div>
        <div className='row'>
          <div className='col-md-6 offset-md-3'>
            <div className="input-group mb-3">
              <div className="input-group-prepend">
                <span className="input-group-text" id="basic-addon1">Region</span>
              </div>
              <input type="text" className="form-control" value={this.props.applicant.country} />
            </div>
          </div>
        </div>
        <div className='row'>
          <div className='col-md-6 offset-md-3'>
            <div className="input-group mb-3">
              <div className="input-group-prepend">
                <span className="input-group-text" id="basic-addon1">Phone</span>
              </div>
              <input type="text" className="form-control" value={this.props.applicant.phone} />
            </div>
          </div>
        </div>
        <div className='row'>
          <div className="form-group col-md-6 offset-md-3">
            <label for="sel1">Select Stage:</label>
            <select className="form-control" id="sel1" onSelect={this.handleSelect}>
              <option>Filters</option>
              <option>Training</option>
              <option>Schoolkeep</option>
              <option>Rejected</option>
            </select>
          </div>
        </div>
        <div className='row'>
          <div className='col-md-6 offset-md-3'>
            <button type="button" className="btn btn-primary" onClick={this.handleClick}>Continue Activation</button>
          </div>
        </div>
      </div>



    )

  }
}

export default Driver;
