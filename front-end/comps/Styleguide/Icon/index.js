import React from 'react';

import './icon.css';

const Message = require('../../../imgs/Messages.svg');
const Liked = require('../../../imgs/Heartfull.svg');
const NotLiked = require('../../../imgs/Heart.svg');
const Inbox = require('../../../imgs/Inbox.svg');
const Menu = require('../../../imgs/Hamburger.svg');
const Profile = require('../../../imgs/Profile.svg');
const Settings = require('../../../imgs/Settings.svg');

const Icon = ({ }) =>
  <div id="styleguide_icon">
    <div className="styleguide_icon_grp1">
      <div className="styleguide_icon_img">
        <img src={Message} />
        <img src={Liked} />
        <img src={NotLiked} />
        <img src={Inbox} />
      </div>
      <div className="styleguide_icon_text">
        <span>Message</span>
        <span>Liked</span>
        <span>Not Liked</span>
        <span>Inbox</span>
      </div>
    </div>
    <div className="styleguide_icon_grp2">
      <div className="styleguide_icon_img">
        <img src={Menu} />
        <img src={Profile} />
        <img src={Settings} />
      </div>
      <div className="styleguide_icon_text">
        <span>Menu</span>
        <span>Profile</span>
        <span>Settings</span>
      </div>
    </div>
  </div>



export default Icon;