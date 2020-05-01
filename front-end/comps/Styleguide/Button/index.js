import React from 'react';

import './button.css';

const Button = ({ color, text, backgroundColor, border }) =>
  <div
    className="styleguide_buttons"
    text={text}
    style={{ backgroundColor: backgroundColor, color: color, border: border }}>
    {text}
  </div>


Button.defaultProps = {
  color: "#FFFFFF",
  text: "SIGN UP",
  backgroundColor: "#B2DFDB",
  border: ""
}

export default Button;