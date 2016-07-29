import Home             from './home/Home';
import Recherche        from './recherche/Recherche';
import {
  Mailbox,
  MailboxReception,
  MailboxEnvoi,
  MailConsult,
  MailWriteNew
}                       from './mailbox';
import Modals           from './modals/Modals';
// create
import {
  FicheContactCourier,
  FicheContactMail,
  FicheContactTelephone,
  FicheContactPersonnes
}                     from './create';

export {
  Home,
  Recherche,
  Modals,

  // mailboxes
  Mailbox,
  MailboxReception,
  MailboxEnvoi,
  MailConsult,
  MailWriteNew,

  // create
  FicheContactCourier,
  FicheContactMail,
  FicheContactTelephone,
  FicheContactPersonnes
};
