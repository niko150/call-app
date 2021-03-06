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
  HomeConnected,
  RechercheConnected,
  FicheContactCourierConnected,
  FicheContactMailConnected,
  FicheContactTelephoneConnected,
  FicheContactPersonnesConnected,
  MailboxConnected,
  MailboxReceptionConnected,
  MailboxEnvoiConnected,
  MailConsultConnected,
  MailWriteNewConnected,
  MailReplyConnected,
  GestBeneficiairesConnected,
  GestContactsConnected
}                               from '../containers';
import configureStore           from '../redux/store/configureStore';
import DevTools                 from '../redux/devTools/DevTools.jsx';
import { appConfig }            from '../config';
import { PageNotFound }         from '../views';
// import { createHistory }        from 'history';

// specified base url
// const browserHistory = useRouterHistory(createHistory)({
//   basename: '/app'
// });

const store         = configureStore();
const syncedHistory = syncHistoryWithStore(hashHistory, store);
const {
  home,
  recherche,
  createFicheContactCourier,
  createFicheContactMail,
  createFicheContactTelephone,
  createFicheContactPersonnes,
  mailbox,
  beneficaires,
  contacts
} = appConfig.views;

export const Routes = () => {
  return (
    <Provider store={store}>
      <div>
        <Router history={syncedHistory}>
          <Route path={home.path} component={App} >
            <IndexRoute component={HomeConnected} />

            <Route path={recherche.path} component={RechercheConnected} />

            <Route path={createFicheContactCourier.path} component={FicheContactCourierConnected} />
            <Route path={createFicheContactMail.path} component={FicheContactMailConnected} />
            <Route path={createFicheContactTelephone.path} component={FicheContactTelephoneConnected} />
            <Route path={createFicheContactPersonnes.path} component={FicheContactPersonnesConnected} />

            {/* gest beneficiares create new or edit */}
            <Route path={beneficaires.maj.path} component={GestBeneficiairesConnected} />
            <Route path={`${beneficaires.maj.path}/:benefId`} component={GestBeneficiairesConnected} />

            {/* gest contacts (benef must exist) */}
            <Route path={`${contacts.edit.path}/:benefId`} component={GestContactsConnected} />

            <Route path={mailbox.root.path} component={MailboxConnected}>
              <Route path={`${mailbox.reception.path}/:mailboxId`} component={MailboxReceptionConnected} />
              <Route path={`${mailbox.envoi.path}/:mailboxId`} component={MailboxEnvoiConnected} />
              <Route path={`${mailbox.consult.path}/:mailboxId/:mailId`} component={MailConsultConnected} />
              <Route path={`${mailbox.writeNew.path}/:mailboxId`} component={MailWriteNewConnected} />
              <Route path={`${mailbox.reply.path}/:mailboxId`} component={MailReplyConnected} />
            </Route>

            <Route path="*" component={PageNotFound} />

          </Route>
        </Router>
        { process.env.NODE_ENV !== 'production' ? <DevTools /> : null }
      </div>
    </Provider>
  );
};
