/* eslint no-process-env:0 */

import React from 'react';
import {
  Router,
  Route,
  IndexRoute,
  // useRouterHistory,
  hashHistory // static app
  // browserHistory // with server
 }                              from 'react-router';
import { Provider }             from 'react-redux';
import { syncHistoryWithStore } from 'react-router-redux';
import {
  App,
  HomeConnected
}                               from '../containers';
import configureStore           from '../redux/store/configureStore';
import DevTools                 from '../redux/devTools/DevTools.jsx';
import { appConfig }            from '../config';
// import { createHistory }        from 'history';


// specified base url
// const browserHistory = useRouterHistory(createHistory)({
//   basename: '/app'
// });

const store         = configureStore();
const syncedHistory = syncHistoryWithStore(hashHistory, store);
const { home, createFicheContactCourier, createFicheContactMail, createFicheContactTelephone, createFicheContactPersonnes } = appConfig.views;

export const Routes = () => {
  return (
    <Provider store={store}>
      <div>
        <Router history={syncedHistory}>
          <Route path={home.path} component={App} >
            <IndexRoute component={HomeConnected} />
            <Route path={createFicheContactCourier.path} component={HomeConnected} />
            <Route path={createFicheContactMail.path} component={HomeConnected} />
            <Route path={createFicheContactTelephone.path} component={HomeConnected} />
            <Route path={createFicheContactPersonnes.path} component={HomeConnected} />
          </Route>
        </Router>
        { process.env.NODE_ENV !== 'production' ? <DevTools /> : null }
      </div>
    </Provider>
  );
};
