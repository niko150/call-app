import {
  enterHome,
  leaveHome
}                                 from './home/home';
import {
  enterRecherche,
  leaveRecherche
}                                 from './recherche/recherche';
import {
  enterCreateFicheContactCourier,
  leaveCreateFicheContactCourier,
  enterCreateFicheContactMail,
  leaveCreateFicheContactMail,
  enterCreateFicheContactTelephone,
  leaveCreateFicheContactTelephone,
  enterCreateFicheContactPersonnes,
  leaveCreateFicheContactPersonnes
}                                 from './create';
import {
  enterMailboxInbox,
  leaveMailboxInbox,
  enterMailboxSentbox,
  leaveMailboxSentbox,
  enterMailboxConsult,
  leaveMailboxConsult,
  enterMailboxWriteNew,
  leaveMailboxWriteNew,
  enterMailboxReplyMail,
  leaveMailboxReplyMail
}                                 from './mailbox/mailbox';
import {
  enterGestBeneficiaires,
  leaveGestBeneficiaires
}                                 from './gestBeneficiaires/gestBeneficiaires';
// gest/edit Contacts
import {
  enterGestContacts,
  leaveGestContacts
}                                 from './gestContacts/gestContacts';
export {
  // home
  enterHome,
  leaveHome,

  // recherche
  enterRecherche,
  leaveRecherche,

  // create fiche contact
  enterCreateFicheContactCourier,
  leaveCreateFicheContactCourier,
  enterCreateFicheContactMail,
  leaveCreateFicheContactMail,
  enterCreateFicheContactTelephone,
  leaveCreateFicheContactTelephone,
  enterCreateFicheContactPersonnes,
  leaveCreateFicheContactPersonnes,

  // mailbox
  enterMailboxInbox,
  leaveMailboxInbox,
  enterMailboxSentbox,
  leaveMailboxSentbox,
  enterMailboxConsult,
  leaveMailboxConsult,
  enterMailboxWriteNew,
  leaveMailboxWriteNew,
  enterMailboxReplyMail,
  leaveMailboxReplyMail,

  // gest/maj benef:
  enterGestBeneficiaires,
  leaveGestBeneficiaires,

  // gest/edit Contacts
  enterGestContacts,
  leaveGestContacts
};
