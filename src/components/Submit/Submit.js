import React from 'react';
import '../Driver/Driver';

class Submit extends React.Component {
  constructor(props) {
    super(props);
    this.state={};
    this.handleClick=this.handleClick.bind(this);
  }


  handleClick(){
    this.props.updateApplicant();
  }

  render(){
    return (
      <div className='container'>
        <br/>
        <br/>
        <div className='row' style={{marginBottom:25}}>
          <button style={{background: 'rgb(111, 54, 255)', color: 'white', fontSize:15}} onClick={this.handleClick}>Submit</button>
        </div>
      </div>
    )
  }
}

export default Submit;
