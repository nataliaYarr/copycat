import React from 'react';
import { styles } from './styles';
import PropTypes from 'prop-types';
//here are some changes
const images = {
  quietcat: 'https://content.codecademy.com/courses/React/react_photo_quietcat.png',
  copycat: 'https://content.codecademy.com/courses/React/react_photo_copycat.png'
};

export class CopyCat extends React.Component {
  render() {
    return (
      <div style={styles.divStyles}>
        <input type='text' value={this.props.name}
        onChange={this.props.handleName} />

        <h1 style={{marginBottom: 80}}>Copy Cat {this.props.name ? this.props.name : 'Tom'}</h1>
        
        <input type='text' value={this.props.input} onChange={this.props.handleChange} />

        <img 
        style={styles.imgStyles}
        alt='cat'
        src={this.props.copying ? images.copycat : images.quietcat} 
        onClick={this.props.toggleTape}/>
         <p> Copied text: {this.props.copying && this.props.input} </p> 
        
      </div>
    );
  };
}

CopyCat.propTypes = {
  input: PropTypes.string.isRequired,
  copying: PropTypes.bool.isRequired,
  handleChange: PropTypes.func.isRequired,
  toggleTape: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
};

export default CopyCat;