import React from 'react';
import '../Driver/Driver';

class Vehicle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
    this.handleChange=this.handleChange.bind(this);
  }

  handleChange(e){
    const value = e.target.value;
    const id = e.target.id;
    const type = e.target.name;
    this.setState({[id] : value})
    //this.props.changeApplicant(type, value);
    //console.log(this.state.type);
    //console.log(this.state.company);
    this.props.changeApplicant(type, id, value);

  }


  render(){
    return (
      <div>

        {/* Vehicle info section */}

          <div className="container" onKeyUp={this.handleChange}>
            <div className='row'>
              <h1>Vehicle info</h1>
            </div>
              <div className="row">
                <div className="twelve columns">
                  <div className="row">
                    <div className="six columns">
                      <label htmlFor="exampleEmailInput">Model</label>
                      <input className="u-full-width" name="data" type="first_name" id='vehicle_model_id' placeholder={this.props.applicant.data.vehicle_model_id}/>
                    </div>
                    <div className="six columns">
                      <label htmlFor="exampleEmailInput">License plate</label>
                      <input className="u-full-width" name="data" type="last_name" id='plate' placeholder={this.props.applicant.data.plate} />
                    </div>
                  </div>
                  <div className="row">
                    <div className="six columns">
                      <label htmlFor="exampleEmailInput">Color</label>
                      <input className="u-full-width" name="data" id='colour' placeholder={this.props.applicant.data.colour} />
                    </div>
                    <div className="six columns">
                      <label htmlFor="exampleEmailInput">Year</label>
                      <input className="u-full-width" name="data" id='vehicle_year' placeholder={this.props.applicant.data.vehicle_year} />
                    </div>
                  </div>
                  <div className="row">
                    <div className="four columns">
                      <label htmlFor="exampleEmailInput">Type</label>
                      <input className="u-full-width" name="data" id='vehicle_type_id' placeholder={this.props.applicant.data.vehicle_type_id} />
                    </div>
                    <div className="four columns">
                      <label htmlFor="exampleEmailInput">Product ID</label>
                      <input className="u-full-width" name="data" id='vehicle_product_ids' placeholder={this.props.applicant.data.vehicle_product_ids} />
                    </div>
                    <div className="four columns">
                      <label htmlFor="exampleEmailInput">Registration number</label>
                      <input className="u-full-width" name="data" id='vehicle_registration_number' placeholder={this.props.applicant.data.vehicle_registration_number} />
                    </div>
                  </div>


                </div>

              </div>
          </div>


      </div>


    )

  }
}

export default Vehicle;
