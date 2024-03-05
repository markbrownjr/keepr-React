import React from 'react'
import ReactDOM from 'react-dom'
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom'

import './style.css'
import PrivacyPolicy from './views/privacy-policy'
import TermsConditions from './views/terms-conditions'
import ProfileKeepr from './views/profile-keepr'
import NotFound from './views/not-found'

const App = () => {
  return (
    <Router>
      <Switch>
        <Route component={PrivacyPolicy} exact path="/privacy-policy" />
        <Route component={TermsConditions} exact path="/terms-conditions" />
        <Route component={ProfileKeepr} exact path="/" />
        <Route component={NotFound} path="**" />
        <Redirect to="**" />
      </Switch>
    </Router>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
