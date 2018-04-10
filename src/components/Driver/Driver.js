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
      <div>
        <div className="row">
          <div className="col-sm-5 my-1 offset-sm-3">
            <h3>Info</h3>
          </div>
        </div>
        <div className='row'>
          <div className='col-md-6 offset-md-3'>
            <div className="input-group form-group">
              <div className="input-group-prepend">
                <label htmlFor="email" className="input-group-text" id="basic-addon1">Email</label>
              </div>
              <input id="email" type="text" className="form-control" value={this.props.applicant.email} />
            </div>
            <div className="input-group form-group">
              <div className="input-group-prepend">
                <label htmlFor="name" className="input-group-text" id="basic-addon1">First Name</label>
              </div>
              <input id="name" type="text" className="form-control" value={this.props.applicant.first_name}/>
            </div>
            <div className="input-group form-group">
              <div className="input-group-prepend">
                <label htmlFor="lastName" className="input-group-text">Last Name</label>
              </div>
              <input id="lastName" type="text" className="form-control" value={this.props.applicant.last_name} />
            </div>
            <div className="input-group form-group">
              <div className="input-group-prepend">
                <label htmlFor="region" className="input-group-text">Region</label>
              </div>
              <input id="region" type="text" className="form-control" value={this.props.applicant.country} />
            </div>
            <div className="input-group form-group">
              <div className="input-group-prepend">
                <label htmlFor="phone" className="input-group-text">Phone</label>
              </div>
              <input id="phone" type="text" className="form-control" value={this.props.applicant.phone} />
            </div>
            <div className="form-group form-group-last">
              <label htmlFor="sel1">Select Stage:</label>
              <select className="form-control" id="sel1" onSelect={this.handleSelect}>
                <option>Filters</option>
                <option>Training</option>
                <option>Schoolkeep</option>
                <option>Rejected</option>
              </select>
            </div>
            <div>
              <button type="button" className="btn btn-main" onClick={this.handleClick}>Continue Activation</button>
            </div>
          </div>
        </div>
      </div>

    )

  }
}

export default Driver;
