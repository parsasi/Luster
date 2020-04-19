import React from 'react';

import './form.css';

const Form = ({ color, text, backgroundColor, border, margin}) =>
  <div id="styleguide_form"
  style={{margin: margin}}>
    <p>First Name</p>
    <input className="styleguide_inputs1" placeholder="First Name"></input>
    <p>Email Address</p>
    <input className="styleguide_inputs1" placeholder="Email Address"></input>
    <p>Gender</p>
    <input className="styleguide_inputs2" placeholder="Options"></input>
    <p>Birthday</p>
    <input className="styleguide_inputs3" placeholder="Month"></input>
    <input className="styleguide_inputs3" placeholder="Day"></input>
    <input className="styleguide_inputs3" placeholder="Year"></input>
    <p>Preferences</p>
    <input className="styleguide_inputs2" placeholder="Options"></input>
  </div>


Form.defaultProps = {
  color: "#FFFFFF",
  text: "SIGN UP",
  backgroundColor: "#B2DFDB",
  border: "",
  margin: ""
}

export default Form;