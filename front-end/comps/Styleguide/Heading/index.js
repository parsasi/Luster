import React from 'react';

import './heading.css';

const Heading = ({ text, fontSize, margin, left, bottom }) =>
  <div 
  id="styleguide_heading" 
  style={{fontSize: fontSize, margin: margin, left: left, bottom: bottom }}>
    {text}
  </div>


Heading.defaultProps = {
  text: "Colour Palette",
  fontSize: "38px",
  margin: "",
}

export default Heading;