// views:
import views                from './views';
// stats:
import fichesTraitees       from './stats/fichesTraitees';
import fichesParCanal       from './stats/fichesParCanal';
import principauxMotifs     from './stats/principauxMotifs';
// user
import userInfos            from './user/userInfos';
import userGroupActivity    from './user/userGroupActivity';
import userBoitesMails      from './user/userBoitesMails';
// UI
import sideMenu             from './ui/sideMenu';
import teamMates            from './teamMates';
// mailbox
import inboxContent         from './mailbox/inbox';
import sentboxContent       from './mailbox/sentbox';
import mailContent          from './mailbox/consult';
import writeNewMailContent  from './mailbox/writeNew';
import replyMailContent     from './mailbox/reply';
// Modals
import {
  rechercheBenefModal,
  createNewDossierBenefModal,
  selectBenefModal
}                           from './modals';
// search
import search               from './search/search';
// gest benef
import gestBenef            from './gestBenef/gestBenef';
// notifications
import notifications        from './notifications/notifications';
// gestContacts:
import gestContacts         from './gestContacts/gestContacts';

export {
  // views:
  views,

  // stats:
  fichesTraitees,
  fichesParCanal,
  principauxMotifs,

  // user
  userInfos,
  userGroupActivity,
  userBoitesMails,

  // UI
  sideMenu,
  teamMates,

  // mailbox
  inboxContent,
  sentboxContent,
  mailContent,
  writeNewMailContent,
  replyMailContent,

  // modals
  rechercheBenefModal,
  createNewDossierBenefModal,
  selectBenefModal,

  // search
  search,

  // gest benef
  gestBenef,

  // notifications
  notifications,

  // gestContacts:
  gestContacts
};
