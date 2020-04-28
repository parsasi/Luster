import React from 'react';
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom';
import MyProfile from '../components/MyProfile'
import ProfileEdit from '../components/ProfileEdit'
import Faq from '../components/Faq'
import Contact from '../components/Contact'
import Menu from '../components/Menu'
import DiscoverProfile from '../components/DiscoverProfile'
import Chat from '../components/Chats'
const AppRouter = () => (
  <BrowserRouter>
    <div className="display-wrapper">
      <Menu />
      <div className="switch-wrapper">
        <Switch>
          <Route path="/" component={MyProfile} exact={true} />
          <Route path="/profile/edit" component={ProfileEdit} />
          <Route path="/contact" component={Contact} />
          <Route path="/faq" component={Faq}/>
          <Route path="/discovery" component={DiscoverProfile}/>
          <Route path="/chat" component={Chat}/>
          <Route component={Contact} />
        </Switch>
      </div>
    </div>
  </BrowserRouter>
);

export default AppRouter;