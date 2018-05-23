import React from 'react';
import ReactDOM from 'react-dom';
import { render } from 'react-dom'
import {Form,Row, Col, ButtonToolbar, Thumbnail, Image, Checkbox,HelpBlock,Button, Grid,Alert, FormControl, FormGroup, ControlLabel} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import Select from 'react-select';
import 'react-select/dist/react-select.css';
import moment from 'moment';
import IntlTelInput from 'react-bootstrap-intl-tel-input';
import './OtherForm.css'
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import ReactFileReader from 'react-file-reader';


const FieldGroup = function ({ id, label, help, ...props }) {
  return (
    <FormGroup controlId={id}>
      <ControlLabel>{label}</ControlLabel>
      <FormControl {...props} />
      {help && <HelpBlock>{help}</HelpBlock>}
    </FormGroup>
  );
}

class OtherForm extends React.Component {
  constructor(props, context){
    super(props)
    this.state = {
      value : ''
    }

    this.original_cc = '+34'
    this.original_mobile_num = 456783746

    this.handleChange=this.handleChange.bind(this)
    this.handleSend = this.handleSend.bind(this)
    this.handleSelect = this.handleSelect.bind(this)
    this.getValidationState=this.getValidationState.bind(this)
    this.dateOfBirthChange=this.dateOfBirthChange.bind(this)
    this.drivingLicenseDate=this.drivingLicenseDate.bind(this)
    this.criminalRecordsDate=this.criminalRecordsDate.bind(this)
    this.insuranceDate=this.insuranceDate.bind(this)
    this.handleTest=this.handleTest.bind(this)
    this.handleMultiChange = this.handleMultiChange.bind(this)
    this.handlePhoneChange= this.handlePhoneChange.bind(this)
    //this.showPicture = this.showPicture.bind(this)
    this.handleFileChange = this.handleFileChange.bind(this)
  }

  handleFileChange(file, id){
        this.props.onFileChange(file.base64, id)
    }


  handleMultiChange(option, id) {
      console.log(option[0]);
      this.props.onMultiSelect(option, id)
    }

  handleSubmit(e){
    e.preventDefault()
  }

// FUNCION PARA MOSTRAR ARCHIVOS ADJUNTOS VERSION ANTIGUA

/*
  showPicture(e, id){
    console.log(e);
    this.setState({[id]:[]})
    if (window.FileReader && e.target.files.length > 0) {
      Array.from(e.target.files).forEach((file) =>  {
        var reader = new FileReader();
        reader.onload = (e) => {
          this.setState({
              [id]: [...this.state[id], e.target.result]
          }, function(){
            console.log(this.state[id])
          })}
        reader.readAsDataURL(file)
      })
    console.log(this.state[id]);
    } else {
      this.setState({
          [id]: []
      }, function(){
        console.log(this.state[id])
      })
    }
  } */




  getOptions(options, type){

      switch (type) {
        case 'vehicle_models':
            return Object.entries(options).map(type=>{ return ({ value: type[0], label: type[1], id:'vehicle_info', name:'vehicle_model_id'})})
          break;

        case 'tariffs':
            return Object.entries(options).map(type=>{ return ({ value: type[0], label: type[1], id:'vehicle_info', name:'tariff_id'})})
          break;

        case 'vehicle_types':
            return Object.entries(options).map(type=>{ return ({ value: type[0], label: type[1], id:'vehicle_info', name:'vehicle_type_id'})})
          break;

        case 'bank_options':
            return Object.entries(options).map(type=>{ return ({ value: type[0], label: type[1], id:'bank_account_info', name:'company_bank_account_bank_id'})})
          break;

        case 'products':
            return Object.entries(options).map(type=>{ return ({ value: type[0], label: type[1], id:'vehicle_info', name:'vehicle_product_ids'})})
          break;

        /*case 'company_logistics_rep_id':
            return Object.entries(options).map(type=>{ return ({ value: type[0], label: type[1], id:'company_info', name:'company_logistics_rep_id'})})
          break;*/

        default:
      }


  }


  handleChange(e){
    this.props.onChange(e)
  }


  handlePhoneChange(data){
    console.log(data.callingCode);
    console.log(data.phoneNumber);
    this.props.onPhoneChange(data.callingCode, data.phoneNumber)
  }


  dateOfBirthChange(e){
    this.setState({date_of_birth: e})
    this.props.onDateChange(e.format('DD-MM-YYYY'), 'date_of_birth')
  }


  drivingLicenseDate(e){
    this.setState({driving_license_expiry_date: e})
    this.props.onDateChange(e.format('DD-MM-YYYY'), 'driving_license_expiry_date')
  }

  criminalRecordsDate(e){
    this.setState({criminal_records_date: e})
    this.props.onDateChange(e.format('DD-MM-YYYY'), 'criminal_records_date')
  }

  insuranceDate(e){
    this.setState({vehicle_insurance_policy_expiry_date: e})
    this.props.onDateChange(e.format('DD-MM-YYYY'), 'vehicle_insurance_policy_expiry_date')
  }


  handleSelect = (e) => {
    if (e != null) {
      this.props.onSelect(e)
    }
  }



  handleSend(e){
    this.props.onSend(e.target.id)
  }


  handleTest = (e) => {
    console.log(e);
    if (e!=null) {
        this.props.handleTestResponse(e)
    }
  }


  getValidationState() {
    return 'success';
  }



  render() {
    return (
      <div>

        <Alert bsStyle="warning">
          <p><strong>Send link to Schoolkeep!</strong> Ask the driver if he has completed the videos before sending the link</p>
          <Button onClick={this.handleDismiss}>Send link</Button>
        </Alert>


        <form id="form" onsubmit="return false">
        <label>Input<input type="email" id="input" /></label>
        <input type="submit" class="hide" id="inputButton"/>
    </form>

        <h3>Driver info</h3>
        <form onSubmit={this.handleSubmit}>
          <input type='email' required/>
          <input type='text' required/>
          <button type="submit" class="btn btn-primary">Submit</button>
        </form>

        <form onSubmit={this.handleSubmit}>
          <div class="form-group">
            <label for="exampleInputEmail1">Email address</label>
            <input type="email" required class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
            <small id="emailHelp" class="form-text text-muted">Well never share your email with anyone else.</small>
          </div>
          <div class="form-group">
            <label for="exampleInputEmail1">Name</label>
            <input type="text" onChange={(e)=>console.log(e.target.value)} required class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Name"/>
            <small id="emailHelp" class="form-text text-muted">Well never share your email with anyone else.</small>
          </div>
          <button type="submit" class="btn btn-primary" onSubmit={(e)=>{e.preventDefault(); console.log('hola');}}>Submit</button>
        </form>

            <FormGroup controlId="name" validationState='error'>
              <ControlLabel>Name</ControlLabel>
              <FormControl type="text"
                placeholder='Enter text'
                name='driver_info'
                id="first_name"
                onChange={this.handleChange}
                defaultValue={this.props.driver_info.first_name}>
                </FormControl>
            </FormGroup>


            <FormGroup controlId="surname">
              <ControlLabel>Lastname</ControlLabel>
              <FormControl type="text"
                placeholder="Enter text"
                name='driver_info'
                id="last_name"
                onChange={this.handleChange}
                defaultValue={this.props.driver_info.last_name}>
                </FormControl>
            </FormGroup>


            <FormGroup controlId="mobile_num">
              <ControlLabel>Phone number</ControlLabel>
              <IntlTelInput
                preferredCountries={['US', 'GB']}
                defaultValue={this.original_cc + ' ' + this.original_mobile_num}
                onChange={this.handlePhoneChange}
              />
            </FormGroup>


            <FormGroup controlId="email">
              <ControlLabel>Email</ControlLabel>
              <FieldGroup
                name='driver_info'
                id="email"
                type="email"
                onChange={this.handleChange}
                defaultValue={this.props.driver_info.email}
              />
            </FormGroup>


            <FormGroup controlId="national_id_number">
              <ControlLabel>National ID number</ControlLabel>
              <FormControl type="text"
                placeholder="Enter text"
                name='driver_info'
                id="national_id_number"
                onChange={this.handleChange}
                defaultValue={this.props.driver_info.national_id_number}>
                </FormControl>
            </FormGroup>


            <FormGroup controlId="date_of_birth">
              <ControlLabel>Date of Birth</ControlLabel>
              <DatePicker selected={this.state.date_of_birth} showYearDropdown onChange={this.dateOfBirthChange}/>
            </FormGroup>


            <FormGroup controlId="driving_license_number">
              <ControlLabel>Driving license number</ControlLabel>
              <FormControl type="text"
                placeholder="Enter text"
                name='driver_info'
                id="driving_license_number"
                onChange={this.handleChange}
                defaultValue={this.props.driver_info.driving_license_number}>
                </FormControl>
            </FormGroup>


            <FormGroup controlId="driving_license_expiry_date">
              <ControlLabel>Driving license expiry date</ControlLabel>
              <DatePicker selected={this.state.driving_license_expiry_date} showYearDropdown onChange={this.drivingLicenseDate}/>
            </FormGroup>


            <FormGroup controlId="driver_gender">
              <ControlLabel>Gender</ControlLabel>
              <Select
                name='driver_info'
                id='driver_gender'
                onChange={this.handleSelect}
                value={this.props.driver_info.driver_gender}
                options={[
                  { value: 'Male', label: 'Male', id: 'driver_info', name:'driver_gender'},
                  { value: 'Female', label: 'Female', id: 'driver_info', name:'driver_gender'},
                  ]}
              />
            </FormGroup>



            <FormGroup controlId="driver_fleet_role">
              <ControlLabel>Fleet Role</ControlLabel>
              <Select
                name='driver_info'
                name='driver_info'
                id='driver_fleet_role'
                onChange={this.handleSelect}
                value={this.props.driver_info.driver_fleet_role}
                options={[
                  { value: 'User', label: 'User', id: 'driver_info', name:'driver_fleet_role'},
                  { value: 'Manager', label: 'Manager', id: 'driver_info', name:'driver_fleet_role'},
                  ]}
              />
            </FormGroup>


            <FormGroup controlId="driver_reserve_class">
              <ControlLabel>Reserve Class</ControlLabel>
              <Select
                name='driver_info'
                id='driver_reserve_class'
                onChange={this.handleSelect}
                value={this.props.driver_info.driver_reserve_class}
                options={[
                  { value: 'Platinum', label: 'Platinum', id: 'driver_info', name:'driver_reserve_class' },
                  { value: 'Gold', label: 'Gold', id: 'driver_info' , name:'driver_reserve_class'},
                  { value: 'Silver', label: 'Silver', id: 'driver_info' , name:'driver_reserve_class'},
                  { value: 'Bronze', label: 'Bronze', id: 'driver_info' , name:'driver_reserve_class'},
                ]}
              />
            </FormGroup>


            <FormGroup controlId="criminal_records_date">
              <ControlLabel>Criminal records date</ControlLabel>
              <DatePicker selected={this.state.criminal_records_date} showYearDropdown onChange={this.criminalRecordsDate}/>
            </FormGroup>


        {/*   SELECT
          <FormGroup controlId="select">
          <ControlLabel>Multiple select</ControlLabel>
          <FormControl componentClass="select" multiple onChange={this.handleChange}>
            <option value='Otro'>Otro</option>
          </FormControl>
        </FormGroup>*/}



        <h3>Vehicle Info</h3>

        <FormGroup controlId="vehicle_model_id">
            <ControlLabel>Vehicle Model</ControlLabel>
            <Select
            name='vehicle_info'
            id='vehicle_model_id'
            value={this.props.vehicle_info.vehicle_model_id}
            onChange={this.handleSelect}
            options={this.getOptions(this.props.option_banks.vehicle_models, 'vehicle_models')}
            />
        </FormGroup>


        <FormGroup controlId="plate">
          <ControlLabel>Plate</ControlLabel>
          <FormControl type="text"
            placeholder="Enter text"
            name='vehicle_info'
            id="plate"
            onChange={this.handleChange}
            defaultValue={this.props.vehicle_info.plate}>
            </FormControl>
        </FormGroup>


        <FormGroup controlId="vehicle_year">
          <ControlLabel>Year</ControlLabel>
          <Select
            id='vehicle_info.vehicle_year'
            onChange={this.handleSelect}
            value={this.props.vehicle_info.vehicle_year}
            options={[
              { value: '2018', label: '2018', id: 'vehicle_info', name:'vehicle_year' },
              { value: '2017', label: '2017', id: 'vehicle_info' , name:'vehicle_year'},
              { value: '2016', label: '2016', id: 'vehicle_info' , name:'vehicle_year'},
              { value: '2015', label: '2015', id: 'vehicle_info' , name:'vehicle_year'},
              { value: '2014', label: '2014', id: 'vehicle_info' , name:'vehicle_year'},
              { value: '2013', label: '2013', id: 'vehicle_info' , name:'vehicle_year'},
              { value: '2012', label: '2012', id: 'vehicle_info' , name:'vehicle_year'},
              { value: '2011', label: '2011', id: 'vehicle_info' , name:'vehicle_year'},
              { value: '2010 o anterior', label: '2010 o anterior', id: 'vehicle_info', name:'vehicle_year' },
            ]}
          />
        </FormGroup>


        <FormGroup controlId="colour">
          <ControlLabel>Colour</ControlLabel>
          <Select
            id='vehicle_info.colour'
            value={this.props.vehicle_info.colour}
            onChange={this.handleSelect}
            options={[
              { value: 'Aqua', label: 'Aqua', id: 'vehicle_info' , name:'colour'},
              { value: 'Beige', label: 'Beige', id: 'vehicle_info' , name:'colour'},
              { value: 'Negro', label: 'Negro', id: 'vehicle_info' , name:'colour'},
              { value: 'Azul', label: 'Azul', id: 'vehicle_info' , name:'colour'},
              { value: 'Chocolate', label: 'Chocolate', id: 'vehicle_info' , name:'colour'},
              { value: 'Fucsia', label: 'Fucsia', id: 'vehicle_info' , name:'colour'},
              { value: 'Dorado', label: 'Dorado', id: 'vehicle_info' , name:'colour'},
              { value: 'Verde', label: 'Verde', id: 'vehicle_info' , name:'colour'},
              { value: 'Gris', label: 'Gris', id: 'vehicle_info' , name:'colour'},
              { value: 'Lima', label: 'Lima', id: 'vehicle_info' , name:'colour'},
              { value: 'Granate', label: 'Granate', id: 'vehicle_info' , name:'colour'},
              { value: 'Azul marino', label: 'Azul marino', id: 'vehicle_info' , name:'colour'},
              { value: 'Color aceituna', label: 'Color aceituna', id: 'vehicle_info' , name:'colour'},
              { value: 'Naranja', label: 'Naranja', id: 'vehicle_info' , name:'colour'},
              { value: 'Morado', label: 'Morado', id: 'vehicle_info' , name:'colour'},
              { value: 'Rojo', label: 'Rojo', id: 'vehicle_info' , name:'colour'},
              { value: 'Plata', label: 'Plata', id: 'vehicle_info' , name:'colour'},
              { value: 'Verde azulado', label: 'Verde azulado', id: 'vehicle_info' , name:'colour'},
              { value: 'Blanco', label: 'Blanco', id: 'vehicle_info' , name:'colour'},
              { value: 'Amarillo', label: 'Amarillo', id: 'vehicle_info' , name:'colour'},
            ]}
          />
        </FormGroup>


        <FormGroup controlId="tariff_id">
            <ControlLabel>Tariff ID</ControlLabel>
            <Select
            id="vehicle_info.tariff_id"
            value={this.props.vehicle_info.tariff_id}
            onChange={(e) => {
              this.handleMultiChange(e, 'tariff_id')
            }}
            multi
            closeOnSelect={false}
            options={this.getOptions(this.props.option_banks.tariffs, 'tariffs')}
            />
        </FormGroup>


        <FormGroup controlId="region">
          <ControlLabel>Region</ControlLabel>
          <FormControl type="text"
            placeholder="Enter text"
            name='vehicle_info'
            id="region_id"
            onChange={this.handleChange}
            defaultValue={this.props.vehicle_info.region_id}>
            </FormControl>
        </FormGroup>


        <FormGroup controlId="products">
            <ControlLabel>Vehicle products IDs</ControlLabel>
            <Select
            id="vehicle_info.products"
            value={this.props.vehicle_info.vehicle_product_ids}
            onChange={(e) => {
              this.handleMultiChange(e, 'vehicle_product_ids')
            }}
            multi
            closeOnSelect={false}
            options={this.getOptions(this.props.option_banks.products, 'products')}
            />
        </FormGroup>


        <FormGroup controlId="vehicle_type_id">
            <ControlLabel>Vehicle Type</ControlLabel>
            <Select
            id="vehicle_info.vehicle_type_id"
            value={this.props.vehicle_info.vehicle_type_id}
            onChange={(e) => {
              this.handleMultiChange(e, 'vehicle_type_id')
            }}
            multi
            closeOnSelect={false}
            options={this.getOptions(this.props.option_banks.vehicle_types, 'vehicle_types')}
            />
        </FormGroup>


        <FormGroup controlId="vehicle_insurance_policy_upload">
            <ControlLabel>Insurance policy upload</ControlLabel>
            <FieldGroup
              name='vehicle_info'
              id="vehicle_insurance_policy_upload"
              type="file"
              defaultValue={this.props.vehicle_info.vehicle_insurance_policy_upload}
              multiple
              onChange={(e) => {
                this.handleChange(e)
                this.showPicture(e, 'vehicle_insurance_policy_upload')
              }}
            />
        </FormGroup>


        <FormGroup controlId="vehicle_insurance_policy_number">
          <ControlLabel>Insurance policy number</ControlLabel>
          <FormControl type="text"
            placeholder="Enter text"
            name='vehicle_info'
            id="vehicle_insurance_policy_number"
            onChange={this.handleChange}
            defaultValue={this.props.vehicle_info.vehicle_insurance_policy_number}>
            </FormControl>
        </FormGroup>


        <FormGroup controlId="vehicle_insurance_policy_expiry_date">
          <ControlLabel>Insurance policy expiry date</ControlLabel>
          <DatePicker selected={this.state.vehicle_insurance_policy_expiry_date} showYearDropdown onChange={this.insuranceDate}/>
        </FormGroup>


        <h3>Company Info</h3>

        <FormGroup controlId="company_name">
          <ControlLabel>Name</ControlLabel>
          <FormControl type="text"
            placeholder="Enter text"
            name='company_info'
            id="company_name"
            onChange={this.handleChange}
            defaultValue={this.props.company_info.company_name}>
            </FormControl>
        </FormGroup>


        <FormGroup controlId="company_tax_code">
          <ControlLabel>Tax Code</ControlLabel>
          <FormControl type="text"
            placeholder="Enter text"
            name='company_info'
            id="company_tax_code"
            onChange={this.handleChange}
            defaultValue={this.props.company_info.company_tax_code}>
            </FormControl>
        </FormGroup>


        <FormGroup controlId="company_email">
          <ControlLabel>Email</ControlLabel>
          <FieldGroup
            name='company_info'
            id="company_email"
            type="email"
            defaultValue={this.props.company_info.company_email}
            onChange={this.handleChange}
          />
        </FormGroup>

        <FormGroup controlId="company_phone_number">
          <ControlLabel>Phone number</ControlLabel>
          <FormControl type="text"
            placeholder="Enter text"
            name='company_info'
            id="company_phone_number"
            onChange={this.handleChange}
            defaultValue={this.props.company_info.company_phone_number}>
            </FormControl>
        </FormGroup>


        <FormGroup controlId="company_city">
          <ControlLabel>City</ControlLabel>
          <FormControl type="text"
            placeholder="Enter text"
            name='company_info'
            id="company_city"
            onChange={this.handleChange}
            defaultValue={this.props.company_info.company_city}>
            </FormControl>
        </FormGroup>


        <FormGroup controlId="company_address">
          <ControlLabel>Addres</ControlLabel>
          <FormControl type="text"
            placeholder="Enter text"
            name='company_info'
            id="company_address"
            onChange={this.handleChange}
            defaultValue={this.props.company_info.company_address}>
            </FormControl>
        </FormGroup>

        <FormGroup controlId="company_post_code">
          <ControlLabel>Post code</ControlLabel>
          <FormControl type="text"
            placeholder="Enter text"
            name='company_info'
            id="company_post_code"
            onChange={this.handleChange}
            defaultValue={this.props.company_info.company_post_code}>
            </FormControl>
        </FormGroup>


        <FormGroup controlId="company_county">
          <ControlLabel>County</ControlLabel>
          <FormControl type="text"
            placeholder="Enter text"
            name='company_info'
            id="company_county"
            onChange={this.handleChange}
            defaultValue={this.props.company_info.company_county}>
            </FormControl>
        </FormGroup>



        /*Hay que incluir el listado en los option banks*/
        <FormGroup controlId="company_logistics_rep_id">
            <ControlLabel>Company Logistics Rep ID</ControlLabel>
            <Select
            id="company_info.company_logistics_rep_id"
            value={this.props.company_info.company_logistics_rep_id}
            onChange={this.handleSelect}
            options={this.getOptions(this.props.option_banks.company_logistics_rep_id, 'company_logistics_rep_id')}
            />
        </FormGroup>


        <h3>Payment Info</h3>

        <FormGroup controlId="company_bank_account_bank_id">
            <ControlLabel>Bank account bank ID</ControlLabel>
            <Select
            id="bank_account_info.company_bank_account_bank_id"
            value={this.props.bank_account_info.company_bank_account_bank_id}
            onChange={this.handleSelect}
            options={this.getOptions(this.props.option_banks.bank_options, 'bank_options')}
            />
        </FormGroup>


        <FormGroup controlId="company_bank_account_type">
          <ControlLabel>Bank account type</ControlLabel>
          <Select
          id="bank_account_info.company_bank_account_type"
          value={this.props.bank_account_info.company_bank_account_type}
          onChange={this.handleSelect}
          options={[
            { value: 'Cuenta corriente', label: 'Cuenta corriente', id: 'bank_account_info' , name:'company_bank_account_type'},
            { value: 'Cuenta de ahorros', label: 'Cuenta de ahorros', id: 'bank_account_info' , name:'company_bank_account_type'}
          ]}
          />
        </FormGroup>


        <FormGroup controlId="company_bank_account_format">
          <ControlLabel>Bank account format</ControlLabel>
          <Select
          id="bank_account_info.company_bank_account_format"
          value={this.props.bank_account_info.company_bank_account_format}
          onChange={this.handleSelect}
          options={[
            { value: 'IBAN', label: 'IBAN', id: 'bank_account_info' , name:'company_bank_account_format'},
            { value: 'Local', label: 'Local', id: 'bank_account_info' , name:'company_bank_account_format'}
          ]}
          />
        </FormGroup>


        <FormGroup controlId="company_bank_account_number">
          <ControlLabel>Bank account number</ControlLabel>
          <FormControl type="text"
            placeholder="Enter text"
            name='bank_account_info'
            id="company_bank_account_number"
            onChange={this.handleChange}
            defaultValue={this.props.bank_account_info.company_bank_account_number}>
            </FormControl>
        </FormGroup>


        <FormGroup controlId="company_bank_account_holder_type">
          <ControlLabel>Bank account holder type</ControlLabel>
          <Select
          id="bank_account_info.company_bank_account_holder_type"
          value={this.props.bank_account_info.company_bank_account_holder_type}
          onChange={this.handleSelect}
          options={[
            { value: 'Particular', label: 'Particular', id: 'bank_account_info' , name:'company_bank_account_holder_type'},
            { value: 'Empresa', label: 'Empresa', id: 'bank_account_info' , name:'company_bank_account_holder_type'}
          ]}
          />
        </FormGroup>


        <FormGroup controlId="company_bank_account_holder_name">
          <ControlLabel>Bank account holder name</ControlLabel>
          <FormControl type="text"
            placeholder="Enter text"
            name='bank_account_info'
            id="company_bank_account_holder_name"
            onChange={this.handleChange}
            defaultValue={this.props.bank_account_info.company_bank_account_holder_name}>
            </FormControl>
        </FormGroup>


        <FormGroup controlId="company_bank_account_tax_document_name">
          <ControlLabel>Bank account tax document name</ControlLabel>
          <FormControl type="text"
            placeholder="Enter text"
            name='bank_account_info'
            id="company_bank_account_tax_document_name"
            onChange={this.handleChange}
            defaultValue={this.props.bank_account_info.company_bank_account_tax_document_name}>
            </FormControl>
        </FormGroup>



        <FormGroup controlId="company_bank_account_tax_document_code">
          <ControlLabel>Bank account tax document code</ControlLabel>
          <FormControl type="text"
            placeholder="Enter text"
            name='bank_account_info'
            id="company_bank_account_tax_document_code"
            onChange={this.handleChange}
            defaultValue={this.props.bank_account_info.company_bank_account_tax_document_code}>
            </FormControl>
        </FormGroup>


        <h3>Documents upload</h3>

        //  ANTIGUA VERSION DE SUBIDA DE ARCHIVOS

  {     /*  <FormGroup controlId="driving_license_upload">
            <ControlLabel>Driving license upload</ControlLabel>
            <FieldGroup
              name='driver_info'
              id="driving_license_upload"
              type="file"
              multiple
              defaultValue={this.props.driver_info.driving_license_upload}
              onChange={(e) => {
                this.handleChange(e)
                this.showPicture(e, 'driving_license_upload')
              }}
            />
        </FormGroup>

        <FormGroup>
          <Row>
          {this.state.driving_license_upload.map(file=>{
            return (<Col lg={3}><Image src={file} style={{width:300}} thumbnail/></Col>)
            }
          )}
          </Row>
        </FormGroup>


        <FormGroup controlId="criminal_records_attachment">
            <ControlLabel>Criminal records attachment</ControlLabel>
            <FieldGroup
              name='driver_info'
              id='criminal_records_attachment'
              type="file"
              defaultValue={this.props.driver_info.criminal_records_attachment}
              multiple
              onChange={(e) => {
                this.handleChange(e)
                this.showPicture(e, 'criminal_records_attachment')
              }}
            />
        </FormGroup>

        <FormGroup>
          <Row>
          {this.state.criminal_records_attachment.map(file=>{
            return (<Col lg={3}><Image src={file} style={{width:300}} thumbnail/></Col>)
            }
          )}
          </Row>
        </FormGroup>



        <FormGroup controlId="vehicle_insurance_policy_upload">
            <ControlLabel>Insurance policy upload</ControlLabel>
            <FieldGroup
              name='vehicle_info'
              id="vehicle_insurance_policy_upload"
              type="file"
              defaultValue={this.props.vehicle_info.vehicle_insurance_policy_upload}
              multiple
              onChange={(e) => {
                this.handleChange(e)
                this.showPicture(e, 'vehicle_insurance_policy_upload')
              }}
            />
        </FormGroup>

        <FormGroup>
          <Row>
          {this.state.vehicle_insurance_policy_upload.map(file=>{
            return (<Col lg={3}><Image src={file} style={{width:300}} thumbnail/></Col>)
            }
          )}
          </Row>
        </FormGroup>
*/}


        <FormGroup controlId="driving_license_upload">
            <ControlLabel>Driving license</ControlLabel>
              <ReactFileReader fileTypes={[".csv",".zip", ".png"]} base64={true} multipleFiles={true} handleFiles={(e) => {
                this.handleFileChange(e, 'driving_license_upload')
              }}>
                <button className='btn-secondary'>Choose files</button>
              </ReactFileReader>
        </FormGroup>

        <FormGroup>
          <Row>
          {this.props.attachments.driving_license_upload.map(file=>{
            return (<Col lg={3}><Image src={file} style={{width:300}} thumbnail/></Col>)
            }
          )}
          </Row>
        </FormGroup>


        <FormGroup controlId="criminal_records_attachment">
            <ControlLabel>Criminal record</ControlLabel>
              <ReactFileReader fileTypes={[".csv",".zip", ".png"]} base64={true} multipleFiles={true} handleFiles={(e) => {
                this.handleFileChange(e, 'criminal_records_attachment')
              }}>
                <button className='btn-secondary'>Choose files</button>
              </ReactFileReader>
        </FormGroup>

        <FormGroup>
          <Row>
          {this.props.attachments.criminal_records_attachment.map(file=>{
            return (<Col lg={3}><Image src={file} style={{width:300}} thumbnail/></Col>)
            }
          )}
          </Row>
        </FormGroup>


        <FormGroup controlId="vehicle_insurance_policy_upload">
            <ControlLabel>Vehicle insurance policy</ControlLabel>
              <ReactFileReader fileTypes={[".csv",".zip", ".png"]} base64={true} multipleFiles={true} handleFiles={(e) => {
                this.handleFileChange(e, 'vehicle_insurance_policy_upload')
              }}>
                <button className='btn-secondary'>Choose files</button>
              </ReactFileReader>
        </FormGroup>

        <FormGroup>
          <Row>
          {this.props.attachments.vehicle_insurance_policy_upload.map(file=>{
            return (<Col lg={3}><Image src={file} style={{width:300}} thumbnail/></Col>)
            }
          )}
          </Row>
        </FormGroup>



        <h3>Medical and GPI test</h3>

        <FormGroup>
            <ControlLabel>GPI</ControlLabel>
            <Select
            name='test_info'
            id='gpi'
            value={this.props.test_info.gpi}
            onChange={this.handleTest}
            options={[
              { value: 'Approved', label: 'Approved', id: 'test_info' , name:'gpi'},
              { value: 'Failed', label: 'Failed', id: 'test_info' , name:'gpi'}
            ]}
            />
        </FormGroup>


        <FormGroup>
            <ControlLabel>Medical Test</ControlLabel>
            <Select
            name='test_info'
            id='medical_test'
            value={this.props.test_info.medical_test}
            onChange={this.handleTest}
            options={[
              { value: 'Approved', label: 'Approved', id: 'test_info' , name:'medical_test'},
              { value: 'Failed', label: 'Failed', id: 'test_info' , name:'medical_test'}
            ]}
            />
        </FormGroup>


        <Button type="button" id='approve' block className="btn-primary" onClick={this.handleSend}>Approve</Button>
        <Button type="button" id='save' block className="btn-secondary" onClick={this.handleSend}>Save</Button>



</div>

    )

  }
}

export default OtherForm
