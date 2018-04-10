import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import Driver from '../Driver/Driver';
import Header from '../Header/Header';
import Fountain from '../../Util/endpoint';
import SearchApplicant from '../SearchApplicant/SearchApplicant';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      company_name:'',
      data:{}
    }
    this.getApplicant=this.getApplicant.bind(this);
  }

  getApplicant(email){
    console.log(email);
    let applicant = Fountain.search(email)
    console.log(applicant);
    this.setState({data:applicant})

  }


  searchInfo(){
    if (this.state.data.first_name) {
        return (<div className='container'><Driver applicant={this.state.data} /></div>)
    }
  }

  render() {
    return (
      <div className="App">
      <Header />
        {/*}<div className='container' style={{background:'rgb(134, 91, 244)', marginBottom:20}}>
            <img src={Logo} alt='logo' style={{height:150, align:'center'}}/>
        </div>*/}
        <SearchApplicant getApplicant={this.getApplicant}/>
        {this.searchInfo()}
        {/*}<br/>
        <br/>
        <Driver applicant={applicant} changeApplicant={this.changeApplicant} />
        <br/>
        <br/>
        <Vehicle applicant={applicant} changeApplicant={this.changeApplicant}/>
        <br/>
        <br/>
        <Company applicant={applicant} changeApplicant={this.changeApplicant}/>
        <Submit updateApplicant={this.updateApplicant}/>*/}
      </div>
    );
  }
}

export default App;
