import React from 'react';
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom';
import Profile from '../components/Profile'
import ProfileEdit from '../components/ProfileEdit'
import Faq from '../components/Faq'
import Contact from '../components/Contact'
import Menu from '../components/Menu'
const AppRouter = () => (
  <BrowserRouter>
    <Menu />
    <div>
      <Switch>
        <Route path="/" component={Profile} exact={true} />
        <Route path="/profile/edit" component={ProfileEdit} />
        <Route path="/contact" component={Contact} />
        <Route path="/faq" component={Faq}/>
        <Route component={Contact} />
      </Switch>
    </div>
  </BrowserRouter>
);

export default AppRouter;