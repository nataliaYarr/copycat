import React from 'react';
import ReactDOM from 'react-dom';
import { CopyCat } from '../components/CopyCat.js';

export class CopyCatContainer extends React.Component {
    constructor(props) {
    super(props);

    this.state = { 
      copying: true,
      input: '',
      name: ''
    };

    this.toggleTape = this.toggleTape.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleName = this.handleName.bind(this);
  }

  handleChange(e) {
    this.setState({input: e.target.value})
  }
  
  handleName(e) {
    this.setState({name: e.target.value})
  }

  toggleTape() {
    this.setState({copying: !this.state.copying})
  }
  
  render() {
    return (
      <CopyCat input={this.state.input} 
      copying={this.state.copying} 
      handleChange={this.handleChange}
      handleName={this.handleName}
      toggleTape={this.toggleTape} 
      name={this.state.name}/> 
    );
  };
}

export default CopyCatContainer;


