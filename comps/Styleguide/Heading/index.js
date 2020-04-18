import React from 'react';

import './heading.css';

const Heading = ({ text, fontSize }) =>
  <div id="styleguide_heading" style={{fontSize: fontSize}}>
    {text}
  </div>


Heading.defaultProps = {
  text: "Colour Palette",
  fontSize: "38px"
}

export default Heading;