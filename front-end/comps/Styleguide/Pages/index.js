import React from 'react';

import Button from '../Button';
import Form from '../Form';
import Heading from '../Heading';
import Hyperlink from '../Hyperlink';
import Icon from '../Icon';

const Logo = require('../../../imgs/Logo.png');
const Primary = require('../../../imgs/Primary.png');
const Secondary = require('../../../imgs/Secondary.png');
const LogoBackground = require('../../../imgs/Logo_background.png');
const LogoVariation = require('../../../imgs/Logo_variation.png');
const LogoDonts = require('../../../imgs/Logo_donts.png');
const Imagery = require('../../../imgs/Imagery.png');


import './pages.css';

const Pages = ({ }) =>
  <div id="styleguide_body" >

    {/* Page 1 */}
    <div className="styleguide_body_pages" id="styleguide_body_page1">
      <div>
        <img src={Logo} />
      </div>
      <Heading
        fontSize="50px"
        text="Digital Styleguide" />
      <Heading
        margin="20px 0px 20px 0px"
        fontSize="20px"
        text="Group 3: Tanisha, Evelyn, Caleb, Megan, Parsa" />
    </div>

    {/* Page 2 */}

    <div className="styleguide_body_pages" id="styleguide_body_page2">
      <Heading
        fontSize="50px"
        text="Colour Palette"
        margin="20px"
      />
      <div className="styleguide_body_second">
        <Heading
          fontSize="18px"
          text="(colors): teal, pink, red, green, rose, black, gold, white, beige"
        />
        <Heading
          fontSize="18px"
          text="(effects): shiny, gradient, bubbly, peaceful, smooth, calm"
        />
        <Heading
          fontSize="40px"
          text="Primary" />
        <Heading
          fontSize="18px"
          text="Used for header, footer, buttons, and keywords."
        />
        <img src={Primary} />
        <Heading
          fontSize="40px"
          text="Secondary" />
        <Heading
          fontSize="18px"
          text="Used for texts, backgrounds, shadows, hover effects, and some other special effects."
        />
        <img src={Secondary} />
      </div>
    </div>
    {/* Page 3 */}
    <div className="styleguide_body_pages" id="styleguide_body_page3">
      <div>
        <Heading
          fontSize="50px"
          text="Logo"
          margin="20px"
        />
      </div>
      <div className="styleguide_body_second">
        <img src={LogoBackground} />
      </div>

    </div>


    {/* Page 4 */}
    <div className="styleguide_body_pages" id="styleguide_body_page4">
      <Heading
        fontSize="50px"
        text="Logos"
        margin="20px"
      />
      <img src={LogoVariation} />
    </div>

    {/* Page 5 */}
    <div className="styleguide_body_pages" id="styleguide_body_page5">
      <Heading
        fontSize="50px"
        text="Logos"
        margin="20px"
      />
      <img src={LogoDonts} />
    </div>
    {/* Page 6 */}
    <div className="styleguide_body_pages" id="styleguide_body_page6">
      <Heading
        fontSize="50px"
        text="Typography"
        margin="20px"
      />
      <div>
        <Heading
          text="Headline H1"
          fontSize="36pt"
          margin="0 0 0 100px" />
        <Heading
          fontSize="12pt"
          margin="0 0 0 150px"
          text="Font: Raleway, Size: 46pt, Colour: #000000, Purpose: Headers" />
        <Heading
          text="Headline H2"
          fontSize="32pt"
          margin="0 0 0 100px" />
        <Heading
          fontSize="12pt"
          margin="0 0 0 150px"
          text="Font: Raleway, Size: 42pt, Colour: #000000, Purpose: Sub-Headers" />
        <Heading
          text="Headline H3"
          fontSize="26pt"
          margin="0 0 0 100px" />
        <Heading
          fontSize="12pt"
          margin="0 0 0 150px"
          text="Font: Raleway, Size: 36pt, Colour: #000000, Purpose: Sub-Headers" />
        <Heading
          text="Headline H4"
          fontSize="20pt"
          margin="0 0 0 100px" />
        <Heading
          fontSize="12pt"
          margin="0 0 0 150px"
          text="Font: Raleway, Size: 30pt, Colour: #000000, Purpose: Paragraphs/text" />
        <Heading
          text="Headline H5"
          fontSize="16pt"
          margin="0 0 0 100px" />
        <Heading
          fontSize="12pt"
          margin="0 0 0 150px"
          text="Font: Raleway, Size: 26pt, Colour: #000000, Purpose: Paragraphs/text" />
        <Heading
          fontSize="16pt"
          text="Sample paragraph"
          margin="30px 0 0 100px" />
        <Heading
          fontSize="12pt"
          margin="0 100px 30px 150px"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque hendrerit fermentum libero ac convallis. Aliquam erat volutpat. Nulla lobortis ligula libero, viverra dignissim tortor semper nec. Proin varius purus eu turpis mattis, sed feugiat metus cursus." />
      </div>
    </div>
    {/* Page 7 */}
    <div className="styleguide_body_pages" id="styleguide_body_page7">
      <Heading
        fontSize="50px"
        text="Iconography"
        margin="20px"
      />
      <Icon />
    </div>
    {/* Page 8 */}
    <div className="styleguide_body_pages" >
      <Heading
        fontSize="50px"
        text="Buttons"
        margin="20px"
      />
      <div id="styleguide_body_page8">
        <div>
          <span>Normal</span>
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
        </div>
        <div>
          <span>Hover</span>
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
        </div>
      </div>

    </div>
    {/* Page 9 */}
    <div className="styleguide_body_pages" id="styleguide_body_page9">
      <Heading
        fontSize="50px"
        text="Hyperlinks"
        margin="20px"
      />
      <div>
        <span>Normal</span>
        <Hyperlink />
        <span>Hover</span>
        <Hyperlink
          color="#FFFFFF" />
      </div>
    </div>
    {/* Page 10 */}
    <div className="styleguide_body_pages" id="styleguide_body_page10">
      <Heading
        fontSize="50px"
        text="Imagery"
        margin="20px"
      />
      <div>
        <img src={Imagery} />
      </div>
      <Heading
        fontSize="12pt"
        text="Because Lustr welcomes everyone regardless of your sexual orientation and lifestyle, our imagery must be diversified. The images convey intimacy and love." />
    </div>
    {/* Page 11 */}
    <div className="styleguide_body_pages" id="styleguide_body_page11">
      <Heading
        fontSize="50px"
        text="Forms"
        margin="20px"
      />
      <Form
        margin="0 0 30px 0" />
    </div>
    {/* Page 12 */}
    <div className="styleguide_body_pages" >
      <Heading
        fontSize="60px"
        text="Thank you for your interest in Lustr!"
        margin="150px 20px"
      />
      <div id="styleguide_body_page12">
        <div>
          <Heading
            fontSize="16pt"
            text="Assignment IDSP-06" />
          <Heading
            fontSize="16pt"
            text="Style Guide & Branding" />
          <Heading
            fontSize="16pt"
            text="Group 3: TaMeCaPaEv" />
        </div>
        <img src={Logo} />
      </div>
    </div>
    {/* Page 13 */}
    <div className="styleguide_body_pages" id="styleguide_body_page13">
      <img src={Logo} />
    </div>
  </div >

export default Pages;