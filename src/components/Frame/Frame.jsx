import React from 'react';

const frameStyle = {
  padding: '1rem',
  borderRadius: '10px',
  border: '1px solid #cfc',
  backgroundColor: 'white',
  margin: '0.5rem'
}

const Frame = (props) => {

  return <div style={{...frameStyle, width: props.width}}>
    {props.children}
  </div>

}

export default Frame;