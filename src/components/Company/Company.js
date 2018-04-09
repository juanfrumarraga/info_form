import React from 'react';
import '../Driver/Driver';

class Company extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      company:''
    }
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e){
    const value = e.target.value;
    const id = e.target.id;
    const type = e.target.name;
    this.setState({[type] : value})
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
              <h1>Company info</h1>
            </div>
              <div className="row">
                <div className="six columns">
                  <div className="row">
                    <div className="six columns">
                      <label htmlFor="exampleEmailInput">Company name</label>
                      <input className="u-full-width" name="data" id="company" placeholder={this.props.applicant.data.company_name}/>
                    </div>
                    <div className="six columns">
                      <label htmlFor="exampleEmailInput">Company ID</label>
                      <input className="u-full-width" name="data" id="company_id" placeholder={this.props.applicant.data.company_id} />
                    </div>
                  </div>
                  <div className="row">
                    <div className="six columns">
                      <label htmlFor="exampleEmailInput">Address</label>
                      <input className="u-full-width" name="data" id="company_address" placeholder={this.props.applicant.data.company_address} />
                    </div>
                    <div className="six columns">
                      <label htmlFor="exampleEmailInput">City</label>
                      <input className="u-full-width" name="data" id='company_city' placeholder={this.props.applicant.data.company_city} />
                    </div>
                  </div>
                  <div className="row">
                    <div className="four columns">
                      <label htmlFor="exampleEmailInput">County</label>
                      <input className="u-full-width" name="data" id='company_county' placeholder={this.props.applicant.data.company_county} />
                    </div>
                    <div className="four columns">
                      <label htmlFor="exampleEmailInput">Tax code</label>
                      <input className="u-full-width" name="data" id='company_tax_code' placeholder={this.props.applicant.data.company_tax_code} />
                    </div>
                    <div className="four columns">
                      <label htmlFor="exampleEmailInput">Email</label>
                      <input className="u-full-width" name="data" id='company_email' placeholder={this.props.applicant.data.company_email} />
                    </div>
                  </div>


                </div>
                <div className="six columns">
                <div className="row">
                  <div className="six columns">
                    <label htmlFor="exampleEmailInput">Holder Type</label>
                    <input className="u-full-width" name="data" id='company_bank_account_holder_type' placeholder={this.props.applicant.data.company_bank_account_holder_type}/>
                  </div>
                  <div className="six columns">
                    <label htmlFor="exampleEmailInput">Holder Name</label>
                    <input className="u-full-width" name="data" id='company_bank_account_holder_name' placeholder={this.props.applicant.data.company_bank_account_holder_name} />
                  </div>
                </div>
                <div className="row">
                  <div className="six columns">
                    <label htmlFor="exampleEmailInput">Account htmlFormat</label>
                    <input className="u-full-width" name="data" id='company_bank_account_htmlFormat' placeholder={this.props.applicant.data.company_bank_account_htmlFormat}/>
                  </div>
                  <div className="six columns">
                    <label htmlFor="exampleEmailInput">Account Number</label>
                    <input className="u-full-width" name="data" id='company_bank_account_number' placeholder={`${this.props.applicant.data.company_bank_account_digit}-${this.props.applicant.data.company_bank_agency_number}-${this.props.applicant.data.company_bank_account_bank_id}`} />
                  </div>
                  <div className="row">
                    <div className="six columns">
                      <label htmlFor="exampleEmailInput">Holder Type</label>
                      <input className="u-full-width" name="data" id='company_bank_account_holder_type' placeholder={this.props.applicant.data.company_bank_account_holder_type}/>
                    </div>
                    <div className="six columns">
                      <label htmlFor="exampleEmailInput">Holder Name</label>
                      <input className="u-full-width" name="data" id='company_bank_account_holder_name' placeholder={this.props.applicant.data.company_bank_account_holder_name} />
                    </div>
                  </div>
                </div>
                </div>
              </div>
          </div>


      </div>


    )

  }
}

export default Company;
