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
      <div className='Driver container'>
        <div className="row">
          <div className="col-sm-5 my-1 offset-sm-3">
            <h3>Driver Info</h3>
          </div>
        </div>
        <div className='row'>
          <div className='col-md-6 offset-md-3'>
            <div className="input-group form-group">
              <div className="input-group-prepend">
                <label htmlFor="email" className="input-group-text" id="basic-addon1">Email</label>
              </div>
              <input id="email" type="text" className="form-control form-control-reset" placeholder={this.props.driver.email} />
            </div>

            
            <div className="input-group form-group">
              <div className="input-group-prepend">
                <label htmlFor="name" className="input-group-text" id="basic-addon1">First Name</label>
              </div>
              <input id="name" type="text" className="form-control form-control-reset" placeholder={this.props.driver.first_name}/>
            </div>


            <div className="input-group form-group">
              <div className="input-group-prepend">
                <label htmlFor="lastName" className="input-group-text">Last Name</label>
              </div>
              <input id="lastName" type="text" className="form-control form-control-reset" placeholder={this.props.driver.last_name} />
            </div>


            <div className="input-group form-group">
              <div className="input-group-prepend">
                <label htmlFor="region" className="input-group-text">Region</label>
              </div>
              <input id="region" type="text" className="form-control form-control-reset" placeholder={this.props.driver.country} />
            </div>


            <div className="input-group form-group">
              <div className="input-group-prepend">
                <label htmlFor="region" className="input-group-text">Phone Number</label>
              </div>
              <input id="region" type="text" className="form-control form-control-reset" placeholder={this.props.driver.phone_number} />
            </div>


            <div className="input-group form-group">
              <div className="input-group-prepend">
                <label htmlFor="region" className="input-group-text">Birth Date</label>
              </div>
              <input id="region" type="text" className="form-control form-control-reset" placeholder={this.props.driver.date_of_birth} />
            </div>


            <div className="input-group form-group">
              <div className="input-group-prepend">
                <label htmlFor="region" className="input-group-text">Documento de Identidad</label>
              </div>
              <input id="region" type="text" className="form-control form-control-reset" placeholder={this.props.driver.id_document} />
            </div>


            <div className="input-group form-group">
              <div className="input-group-prepend">
                <label htmlFor="region" className="input-group-text">Driving License</label>
              </div>
              <input id="region" type="text" className="form-control form-control-reset" placeholder={this.props.driver.driving_license_number} />
            </div>


            <div className="input-group form-group">
              <div className="input-group-prepend">
                <label htmlFor="region" className="input-group-text">Driving License expiry date</label>
              </div>
              <input id="region" type="text" className="form-control form-control-reset" placeholder={this.props.driver.driving_license_expiry_date} />
            </div>


            <div className="input-group form-group">
              <div className="input-group-prepend">
                <label htmlFor="region" className="input-group-text">Antecedentes</label>
              </div>
              <input id="region" type="text" className="form-control form-control-reset" placeholder={this.props.driver.tiene_usted_antecedentes_penales} />
            </div>


            <div className="input-group form-group">
              <div className="input-group-prepend">
                <label htmlFor="region" className="input-group-text">Fecha Antecedentes</label>
              </div>
              <input id="region" type="text" className="form-control form-control-reset" placeholder={this.props.driver.criminal_records_date} />
            </div>


            <div className="input-group form-group">
              <div className="input-group-prepend">
                <label htmlFor="region" className="input-group-text">Gender</label>
              </div>
              <input id="region" type="text" className="form-control form-control-reset" placeholder={this.props.driver.driver_gender} />
            </div>


            <div className="input-group form-group">
              <div className="input-group-prepend">
                <label htmlFor="region" className="input-group-text">Clase</label>
              </div>
              <input id="region" type="text" className="form-control form-control-reset" placeholder={this.props.driver.driver_reserve_class} />
            </div>


            <div className="input-group form-group">
              <div className="input-group-prepend">
                <label htmlFor="phone" className="input-group-text">Role</label>
              </div>
              <input id="phone" type="phone" className="form-control form-control-reset" placeholder={this.props.driver.driver_fleet_role} />
            </div>


            <div className="form-group form-group-last">
              <label htmlFor="sel1">Select Stage:</label>
              <select className="form-control form-control-reset" id="sel1" onSelect={this.handleSelect}>
                <option>Filters</option>
                <option>Training</option>
                <option>Schoolkeep</option>
                <option>Rejected</option>
              </select>
            </div>
            {/*<div>
              <button type="button" className="btn btn-main" onClick={this.handleClick}>Continue Activation</button>
            </div>*/}
          </div>
        </div>
      </div>

    )

  }
}

export default Driver;
