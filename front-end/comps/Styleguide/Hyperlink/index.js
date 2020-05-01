import React from 'react';

import './hyperlink.css';

const Hyperlink = ({ color }) =>
  <div id="styleguide_hyperlink">
    <span className="styleguide_hyperlink_text">FAQ</span>
    <span className="styleguide_hyperlink_text">|</span>
    <span className="styleguide_hyperlink_text">Contact Us</span>
    <span className="styleguide_hyperlink_text">|</span>
    <span className="styleguide_hyperlink_text" style={{color:color}}>Terms & Conditions</span>
  </div>


Hyperlink.defaultProps = {
  color: "#000000",
}

export default Hyperlink;