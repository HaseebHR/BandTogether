import ReactOnRails from 'react-on-rails';

import Users from '../bundles/App/components/Users';
import LandingPage from '../bundles/App/components/LandingPage';
import Concerts from '../bundles/App/components/Concerts';

// This is how react_on_rails can see the App in the browser.
ReactOnRails.register({
  Users,
  LandingPage,
  Concerts
});
