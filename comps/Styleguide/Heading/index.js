import React from 'react';

import './heading.css';

const Heading = ({ text }) =>
  <div id="styleguide_heading">
    {text}
  </div>


Heading.defaultProps = {
  text: "Colour Palette",
}

export default Heading;