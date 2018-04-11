import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';


class Vehicle extends React.Component {
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
      <div className='Vehicle container'>
        <div className="row">
          <div className="col-sm-5 my-1 offset-sm-3">
            <h3>Vehicle Info</h3>
          </div>
        </div>
        <div className='row'>
          <div className='col-md-6 offset-md-3'>
            <div className="input-group form-group">
              <div className="input-group-prepend">
                <label htmlFor="email" className="input-group-text" id="basic-addon1">Email</label>
              </div>
              <input id="email" type="text" className="form-control form-control-reset" placeholder={this.props.vehicle.email} />
            </div>
            <div className="input-group form-group">
              <div className="input-group-prepend">
                <label htmlFor="name" className="input-group-text" id="basic-addon1">First Name</label>
              </div>
              <input id="name" type="text" className="form-control form-control-reset" placeholder={this.props.vehicle.first_name}/>
            </div>
            <div className="input-group form-group">
              <div className="input-group-prepend">
                <label htmlFor="lastName" className="input-group-text">Last Name</label>
              </div>
              <input id="lastName" type="text" className="form-control form-control-reset" placeholder={this.props.vehicle.last_name} />
            </div>
            <div className="input-group form-group">
              <div className="input-group-prepend">
                <label htmlFor="region" className="input-group-text">Region</label>
              </div>
              <input id="region" type="text" className="form-control form-control-reset" placeholder={this.props.vehicle.country} />
            </div>
            <div className="input-group form-group">
              <div className="input-group-prepend">
                <label htmlFor="phone" className="input-group-text">Phone</label>
              </div>
              <input id="phone" type="phone" className="form-control form-control-reset" placeholder={this.props.vehicle.phone} />
            </div>
          </div>
        </div>
      </div>

    )

  }
}

export default Vehicle;
