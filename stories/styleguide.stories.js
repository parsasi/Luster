import React from 'react';

import Button from '../comps/Styleguide/Button';
import Form from '../comps/Styleguide/Form';
import Heading from '../comps/Styleguide/Heading';
import Hyperlink from '../comps/Styleguide/Hyperlink';
import Icon from '../comps/Styleguide/Icon';



export default {
  title: "Styleguide comps",
  component: Heading
}

export const StyleguideButton = () => <div>
  <Button
    color="#FFFFFF"
    text="SIGN UP"
    backgroundColor="#B2DFDB"
  />
  <Button
    color="#00909B"
    text="SUBMIT"
    backgroundColor="#FFFFFF"
    border="#FFE8D1 3px solid"
  />
  <Button
    color="#FFFFFF"
    text="SIGN UP"
    backgroundColor="#FFD9DF"
  />
  <Button
    color="#FFFFFF"
    text="SIGN UP"
    backgroundColor="#00909B"
  />
  <Button
    color="#00909B"
    text="SUBMIT"
    backgroundColor="#E7FFF8"
    border="#FFE8D1 3px solid"
  />
  <Button
    color="#FFFFFF"
    text="SUBMIT"
    backgroundColor="#FFD9DF"
    border="#979CB3 3px solid"
  />

</div>;
export const StyleguideForm = () => <Form />;
export const StyleguideHeading = () => <div>
  <Heading />
  <Heading
    text="Normal"
    fontSize="25px" />
  <Heading
    text="Hover"
    fontSize="25px" />
</div>;
export const StyleguideHyperlink = () => <div>
  <Hyperlink />
  <Hyperlink
    color="#FFFFFF" />
</div>;
export const StyleguideIcon = () => <Icon />;