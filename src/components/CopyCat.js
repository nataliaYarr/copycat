import React from 'react';
import { styles } from './styles';
import PropTypes from 'prop-types';

const images = {
  copycat: 'https://content.codecademy.com/courses/React/react_photo_copycat.png',
  quietcat: 'https://content.codecademy.com/courses/React/react_photo_quietcat.png'
};

export class CopyCat extends React.Component {
  render() {
    return (
      <div style={styles.divStyles}>
        <input type='text' value={this.props.name}
        onChange={this.props.handleName} />

        <h1 style={{marginBottom: 80}}>Copy Cat {this.props.name ? this.props.name : 'Tom'}</h1>
        
        <input type='text' value={this.props.input} onChange={this.props.handleChange} />

        <p> Copied text: {this.props.copying && this.props.input} </p>  

        <img 
        style={styles.imgStyles}
        alt='cat'
        src={this.props.copying ? images.copycat : images.quietcat} 
        onClick={this.props.toggleTape}/>
        
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
