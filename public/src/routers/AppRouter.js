import React from 'react';
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom';
import MyProfile from '../components/MyProfile'
import MyProfileEdit from '../components/MyProfileEdit'
import Faq from '../components/Faq'
import Contact from '../components/Contact'
import Menu from '../components/Menu'
import DiscoverProfile from '../components/DiscoverProfile'
import Chat from '../components/Chats'
import PrivacyPolicy from '../components/PrivacyPolicy'
import TermsOfUse from '../components/TermsOfUse'
import SignIn from '../components/Signin'
import SignUp from '../components/SignUp';
const AppRouter = () => (
  <BrowserRouter>
    <div className="display-wrapper">
      <div className="switch-wrapper">
        <Switch>
          <Route path="/" component={() => (<div className="main-page-wrapper"><Menu/><MyProfile/></div>)} exact={true} />
          <Route path="/edit" component={() => (<div className="main-page-wrapper"><Menu/><MyProfileEdit /></div>) } />
          <Route path="/contact" component={() => (<div className="main-page-wrapper"><Menu/><Contact/></div>)} />
          <Route path="/faq" component={() => (<div className="main-page-wrapper"><Menu/><Faq /></div>)}/>
          <Route path="/discovery" component={() => (<div className="main-page-wrapper"><Menu/><DiscoverProfile /></div>)}/>
          <Route path="/chat" component={() => (<div className="main-page-wrapper"><Menu/><Chat /></div>)}/>
          <Route path="/privacypolicy" component={() => (<div className="main-page-wrapper"><Menu/><PrivacyPolicy /></div>)}/>
          <Route path="/chat" component={() => (<div className="main-page-wrapper"><Menu/><Chat /></div>)}/>
          <Route path="/termsofuse" component={() => (<div className="main-page-wrapper"><Menu/><TermsOfUse /></div>)}/>
          <Route path="/signin" component={SignIn}/>
          <Route path="/signup" component={SignUp}/>
          <Route component={Contact} />
        </Switch>
      </div>
    </div>
  </BrowserRouter>
);

export default AppRouter;