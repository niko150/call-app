import moment               from 'moment';
import { appConfig }        from '../../../../config';
import {
  fetchMockGetGestContactsFicheContact,
  getGestContactsFicheContactInit,
  getGestContactsFicheContactDomaineStatutfFromNumDossier,
  fetchMockGestContactsNumDossierDomaineStatutBenef,
  postGestContactsSaveFicheContact,
  fetchMockPostGestContactsSaveFicheContact,
  // fiche activite
  postGestContactsSaveNewActivite,
  fetchMockPostGestContactsSaveNewActivite

}                           from '../../../../services';

moment.locale('fr');
const formatDate = appConfig.formatDate.defaut;

const formatDateCreation  = 'DD/MM/YYYY';
const formatDateReception = 'DD/MM/YYYY';
const formatDateCloture   = 'DD/MM/YYYY';

export const REQUEST_GET_GEST_CONTACTS_FICHE_CONTACT    = 'REQUEST_GET_GEST_CONTACTS_FICHE_CONTACT';
export const RECEIVED_GET_GEST_CONTACTS_FICHE_CONTACT   = 'RECEIVED_GET_GEST_CONTACTS_FICHE_CONTACT';
export const ERROR_GET_GEST_CONTACTS_FICHE_CONTACT      = 'ERROR_GET_GEST_CONTACTS_FICHE_CONTACT';

export const REQUEST_SAVE_GEST_CONTACTS_FICHE_CONTACT    = 'REQUEST_SAVE_GEST_CONTACTS_FICHE_CONTACT';
export const RECEIVED_SAVE_GEST_CONTACTS_FICHE_CONTACT   = 'RECEIVED_SAVE_GEST_CONTACTS_FICHE_CONTACT';
export const ERROR_SAVE_GEST_CONTACTS_FICHE_CONTACT      = 'ERROR_SAVE_GEST_CONTACTS_FICHE_CONTACT';

export const SET_IS_COLLAPSED_CONTACTS_FICHE_CONTACT    = 'SET_IS_COLLAPSED_CONTACTS_FICHE_CONTACT';
export const UNSET_IS_COLLAPSED_CONTACTS_FICHE_CONTACT  = 'UNSET_IS_COLLAPSED_CONTACTS_FICHE_CONTACT';

export const ADD_NEW_COMBINAISON_MOTIS_CONTACTS_FICHE_CONTACT     = 'ADD_NEW_COMBINAISON_MOTIS_CONTACTS_FICHE_CONTACT';
export const REMOVE_NEW_COMBINAISON_MOTIS_CONTACTS_FICHE_CONTACT  = 'REMOVE_NEW_COMBINAISON_MOTIS_CONTACTS_FICHE_CONTACT';

export const UPDATE_GEST_CONTACTS_DATE_CREATION         = 'UPDATE_GEST_CONTACTS_DATE_CREATION';
export const UPDATE_GEST_CONTACTS_DATE_RECEPTION        = 'UPDATE_GEST_CONTACTS_DATE_RECEPTION';
export const UPDATE_GEST_CONTACTS_STATUT_FICHE          = 'UPDATE_GEST_CONTACTS_STATUT_FICHE';
export const UPDATE_GEST_CONTACTS_DATE_CLOTURE          = 'UPDATE_GEST_CONTACTS_DATE_CLOTURE';
export const UPDATE_GEST_CONTACTS_TYPE_INDEX            = 'UPDATE_GEST_CONTACTS_TYPE_INDEX';
export const UPDATE_GEST_CONTACTS_NUM_DOSSIER_INDEX     = 'UPDATE_GEST_CONTACTS_NUM_DOSSIER_INDEX';
export const UPDATE_GEST_CONTACTS_DOMAINE_FICHE_CONTACT = 'UPDATE_GEST_CONTACTS_DOMAINE_FICHE_CONTACT';
export const UPDATE_GEST_CONTACTS_COMMENTAIRES_FICHE_CONTACT        = 'UPDATE_GEST_CONTACTS_COMMENTAIRES_FICHE_CONTACT';
export const UPDATE_GEST_CONTACTS_GROUPE_DEST_ID_FICHE_CONTACT      = 'UPDATE_GEST_CONTACTS_GROUPE_DEST_ID_FICHE_CONTACT';

export const REQUEST_GET_GEST_CONTACTS_BENEF_INFO_FROM_NUM_DOSSIER  = 'REQUEST_GET_GEST_CONTACTS_BENEF_INFO_FROM_NUM_DOSSIER';
export const RECEIVED_GET_GEST_CONTACTS_BENEF_INFO_FROM_NUM_DOSSIER = 'RECEIVED_GET_GEST_CONTACTS_BENEF_INFO_FROM_NUM_DOSSIER';
export const ERROR_GET_GEST_CONTACTS_BENEF_INFO_FROM_NUM_DOSSIER    = 'ERROR_GET_GEST_CONTACTS_BENEF_INFO_FROM_NUM_DOSSIER';

export const ON_CHANGE_FICHE_CONTACT_MOTIF_NIVEAU_2 = 'ON_CHANGE_FICHE_CONTACT_MOTIF_NIVEAU_2';
export const ON_CHANGE_FICHE_CONTACT_MOTIF_NIVEAU_3 = 'ON_CHANGE_FICHE_CONTACT_MOTIF_NIVEAU_3';
export const ON_CHANGE_FICHE_CONTACT_MOTIF_NIVEAU_4 = 'ON_CHANGE_FICHE_CONTACT_MOTIF_NIVEAU_4';

export const REQUEST_SAVE_GEST_CONTACTS_SAVE_NEW_ACTIVITE   = 'REQUEST_SAVE_GEST_CONTACTS_SAVE_NEW_ACTIVITE';
export const RECEIVED_SAVE_GEST_CONTACTS_SAVE_NEW_ACTIVITE  = 'RECEIVED_SAVE_GEST_CONTACTS_SAVE_NEW_ACTIVITE';
export const ERROR_SAVE_GEST_CONTACTS_SAVE_NEW_ACTIVITE     = 'ERROR_SAVE_GEST_CONTACTS_SAVE_NEW_ACTIVITE';


//  -----------------------------------------------------------------
//    update dateCreationFicheContact value
//  -----------------------------------------------------------------
export const updateDateCreationFicheContact = (dateCreation = '', time = moment().format(formatDate)) => {
  if (dateCreation) {
    const dateCreationStr = moment(dateCreation, formatDateCreation).format(formatDateCreation);
    return {
      type: UPDATE_GEST_CONTACTS_DATE_CREATION,
      dateCreationFicheContact: dateCreationStr,
      time
    };
  }
  return false;
};
//  -----------------------------------------------------------------
//    update updateDateReceptionFicheContact value
//  -----------------------------------------------------------------
export const updateDateReceptionFicheContact = (dateReception = '', time = moment().format(formatDate)) => {
  if (dateReception) {
    const dateReceptionStr = moment(dateReception, formatDateReception).format(formatDateReception);
    return {
      type: UPDATE_GEST_CONTACTS_DATE_RECEPTION,
      dateReceptionFicheContact: dateReceptionStr,
      time
    };
  }
  return false;
};
//  -----------------------------------------------------------------
//    update updateStatutIndexFicheContact value
//  -----------------------------------------------------------------
export const updateStatutIndexFicheContact = (statutIndex = null, time = moment().format(formatDate)) => {
  if (statutIndex) {
    return {
      type: UPDATE_GEST_CONTACTS_STATUT_FICHE,
      statutIndexFicheContact: statutIndex,
      time
    };
  }
  return false;
};
//  -----------------------------------------------------------------
//    update updateDateClotureFicheContact value
//  -----------------------------------------------------------------
export const updateDateClotureFicheContact = (dateCloture = null, time = moment().format(formatDate)) => {
  if (dateCloture) {
    const dateClotureStr = moment(dateCloture, formatDateCloture).format(formatDateCloture);
    return {
      type: UPDATE_GEST_CONTACTS_DATE_CLOTURE,
      dateClotureFicheContact: dateClotureStr,
      time
    };
  }
  return false;
};
//  -----------------------------------------------------------------
//    update updateTypeIndexFicheContact value
//  -----------------------------------------------------------------
export const updateTypeIndexFicheContact = (typeIndex = null, time = moment().format(formatDate)) => {
  if (typeIndex) {
    return {
      type: UPDATE_GEST_CONTACTS_TYPE_INDEX,
      typeIndexFicheContact: typeIndex,
      time
    };
  }
  return false;
};
//  -----------------------------------------------------------------
//    update updateDomaineFicheContactChanged value
//  -----------------------------------------------------------------
export const updateDomaineFicheContactChanged = (domaine = null, time = moment().format(formatDate)) => {
  if (domaine) {
    return {
      type: UPDATE_GEST_CONTACTS_DOMAINE_FICHE_CONTACT,
      domaineFicheContact: domaine,
      time
    };
  }
  return false;
};
//  -----------------------------------------------------------------
//    update updateCommentaireFicheContactChanged value
//  -----------------------------------------------------------------
export const updateCommentaireFicheContactChanged = (commentaires = null, time = moment().format(formatDate)) => {
  if (commentaires) {
    return {
      type: UPDATE_GEST_CONTACTS_COMMENTAIRES_FICHE_CONTACT,
      commentaireFicheContact: commentaires,
      time
    };
  }
  return false;
};
//  -----------------------------------------------------------------
//    update updateGroupeDestinataireIdSelected value
//  -----------------------------------------------------------------
export const updateGroupeDestinataireIdSelected = (groupeDestinataireId = null, time = moment().format(formatDate)) => {
  if (!parseInt(groupeDestinataireId, 10 > 0)) {
    return {
      type: UPDATE_GEST_CONTACTS_GROUPE_DEST_ID_FICHE_CONTACT,
      groupeDestinataireIdSelected: groupeDestinataireId,
      time
    };
  }
  return false;
};


//  -----------------------------------------------------------------
//    GET contacts contact
//  -----------------------------------------------------------------
const requestGetGestContactsFicheContact = (benefId = 0, contactId = 0, time = moment().format(formatDate)) => {
  return {
    type: REQUEST_GET_GEST_CONTACTS_FICHE_CONTACT,
    isFetchingFicheContact : true,
    benefId,
    contactId,
    time
  };
};

const receivedGetGestContactsFicheContact = (ficheContact, time = moment().format(formatDate)) => {
  return {
    type: RECEIVED_GET_GEST_CONTACTS_FICHE_CONTACT,
    isFetchingFicheContact : false,
    ficheContact,
    time
  };
};

const errorGetGestContactsFicheContact = (error, time = moment().format(formatDate)) => {
  return {
    type: ERROR_GET_GEST_CONTACTS_FICHE_CONTACT,
    isFetchingFicheContact : false,
    data: [],
    error,
    time
  };
};

const getQueryGestContactsFicheContact = (contactId) => dispatch => {
  if (!contactId) {
    dispatch(errorGetGestContactsFicheContact('getGestContactsFicheContact API error: contactId is not defined or not valid'));
    return Promise.reject({
      message: 'Rafraichissement des données "Contact" de la fiche de contact en erreur (identifiant de contact non valide)',
      level: 'error',
      showNotification: true
    });
  }

  dispatch(requestGetGestContactsFicheContact(contactId));
  if (appConfig.DEV_MODE) {
    // DEV ONLY
    return fetchMockGetGestContactsFicheContact(contactId) // mock is the as all gestBenef object
            .then(
              data => {
                dispatch(receivedGetGestContactsFicheContact(data));
                return Promise.resolve({
                  message: 'Données "Contact" de la fiche de contact raffraichies',
                  level: 'success',
                  showNotification: true
                });
              }
            )
            .catch(
              err => {
                dispatch(errorGetGestContactsFicheContact(err));
                return Promise.reject({
                  message: 'Données "Contact" de la fiche de contact non raffraichies',
                  level: 'error',
                  showNotification: true
                });
              }
            );
  } else {
    return getGestContactsFicheContactInit(contactId)
            .then(
              response => {
                dispatch(receivedGetGestContactsFicheContact(response));
                return Promise.resolve({
                  message: 'Données "Contact" de la fiche de contact raffraichies',
                  level: 'success',
                  showNotification: true
                });
              }
            )
            .catch(
              error => {
                dispatch(errorGetGestContactsFicheContact(error));
                return Promise.reject({
                  message: 'Données "Contact" de la fiche de contact non raffraichies',
                  level: 'error',
                  showNotification: true
                });
              }
            );
  }
};

export const getGestContactsFicheContactIfNeeded = (contactId) => (dispatch, getState) => {
  if (shouldGetGestContactsFicheContact(getState())) {
    return dispatch(getQueryGestContactsFicheContact(contactId));
  }
  return Promise.resolve({
    message: 'fetch des modifications des informations "Contact" de la fiche de contact déjà en cours',
    level: 'info',
    showNotification: false
  });
};

function shouldGetGestContactsFicheContact(state) {
  const gestContact = state.gestContacts;
  // just check wether fetching (assuming data could be refreshed and should not persist in store)
  if (gestContact.isFetchingFicheContact) {
    return false;
  } else {
    return true;
  }
}


//  -----------------------------------------------------------------
//    set / unset isCollapsed flag
//  -----------------------------------------------------------------
export const setIsCollapsedContactsFicheContact = (time = moment().format(formatDate)) => {
  return {
    type: SET_IS_COLLAPSED_CONTACTS_FICHE_CONTACT,
    isCollapsedFicheContact: true,
    time
  };
};
export const unsetIsCollapsedContactsFicheContact = (time = moment().format(formatDate)) => {
  return {
    type: UNSET_IS_COLLAPSED_CONTACTS_FICHE_CONTACT,
    isCollapsedFicheContact: false,
    time
  };
};


//  -----------------------------------------------------------------
//    GET contacts contact benef info from numDossier
//  -----------------------------------------------------------------
const requestGetGestContactsBenefInfoFromNumDossier = (benefId = 0, numDossier = null, time = moment().format(formatDate)) => {
  return {
    type: REQUEST_GET_GEST_CONTACTS_BENEF_INFO_FROM_NUM_DOSSIER,
    isFetchingBenefInfoFromNumDossier : true,
    benefId,
    numDossier,
    time
  };
};
const receivedGetGestContactsBenefInfoFromNumDossier = (benefInfos, time = moment().format(formatDate)) => {
  return {
    type: RECEIVED_GET_GEST_CONTACTS_BENEF_INFO_FROM_NUM_DOSSIER,
    isFetchingBenefInfoFromNumDossier : false,
    benefInfos,
    time
  };
};
const errorGetGestContactsBenefInfoFromNumDossier = (error, time = moment().format(formatDate)) => {
  return {
    type: ERROR_GET_GEST_CONTACTS_BENEF_INFO_FROM_NUM_DOSSIER,
    isFetchingBenefInfoFromNumDossier : false,
    data: [],
    error,
    time
  };
};

const getQueryGestContactsBenefInfoFromNumDossier = (benefId = 0, numDossier = null) => dispatch => {
  if (!benefId) {
    dispatch(errorGetGestContactsBenefInfoFromNumDossier('getQueryGestContactsBenefInfoFromNumDossier API error: benefId is not defined or not valid'));
    return Promise.reject({
      message: 'Rafraichissement des données suite à la sélection de "numDossier" de la fiche de contact en erreur (identifiant de bénéficaire non valide)',
      level: 'error',
      showNotification: true
    });
  }
  if (!numDossier) {
    dispatch(errorGetGestContactsBenefInfoFromNumDossier('getQueryGestContactsBenefInfoFromNumDossier API error: numDossier is not defined or not valid'));
    return Promise.reject({
      message: 'Rafraichissement des données suite à la sélection de "numDossier" de la fiche de contact en erreur (numDossier non valide)',
      level: 'error',
      showNotification: true
    });
  }

  dispatch(requestGetGestContactsBenefInfoFromNumDossier(benefId, numDossier));
  if (appConfig.DEV_MODE) {
    // DEV ONLY
    return fetchMockGestContactsNumDossierDomaineStatutBenef(benefId, numDossier) // mock is the as all gestBenef object
            .then(
              data => {
                dispatch(receivedGetGestContactsBenefInfoFromNumDossier(data));
                return Promise.resolve({
                  message: 'Rafraichissement des données suite à la sélection de "numDossier" terminé avec succès.',
                  level: 'success',
                  showNotification: true
                });
              }
            )
            .catch(
              err => {
                dispatch(errorGetGestContactsBenefInfoFromNumDossier(err));
                return Promise.reject({
                  message: 'Rafraichissement des données suite à la sélection de "numDossier" en erreur.',
                  level: 'error',
                  showNotification: true
                });
              }
            );
  } else {
    return getGestContactsFicheContactDomaineStatutfFromNumDossier(benefId, numDossier)
            .then(
              response => {
                dispatch(receivedGetGestContactsBenefInfoFromNumDossier(response));
                return Promise.resolve({
                  message: 'Rafraichissement des données suite à la sélection de "numDossier" terminé avec succès.',
                  level: 'success',
                  showNotification: true
                });
              }
            )
            .catch(
              error => {
                dispatch(errorGetGestContactsBenefInfoFromNumDossier(error));
                return Promise.reject({
                  message: 'Rafraichissement des données suite à la sélection de "numDossier" en erreur.',
                  level: 'error',
                  showNotification: true
                });
              }
            );
  }
};

export const getGestContactsBenefInfoFromNumDossierIfNeeded = (benefId, numDossier) => (dispatch, getState) => {
  if (shouldGetGestContactsBenefInfoFromNumDossier(getState())) {
    return dispatch(getQueryGestContactsBenefInfoFromNumDossier(benefId, numDossier));
  }
  return Promise.resolve({
    message: 'fetch des des données suite à la sélection de "numDossier" de la fiche de contact déjà en cours',
    level: 'info',
    showNotification: false
  });
};

function shouldGetGestContactsBenefInfoFromNumDossier(state) {
  const gestContact = state.gestContacts;
  // just check wether fetching (assuming data could be refreshed and should not persist in store)
  if (gestContact.isFetchingBenefInfoFromNumDossier) {
    return false;
  } else {
    return true;
  }
}

//  -----------------------------------------------------------------
//    update updateNumDossierIndexSelected value
//  -----------------------------------------------------------------
export const updateNumDossierIndexSelected = (benefId, numDossierIndex) => dispatch => {
  return dispatch(getGestContactsBenefInfoFromNumDossierIfNeeded(benefId, numDossierIndex));
  // if (numDossierIndex) {
  //   return {
  //     type: UPDATE_GEST_CONTACTS_NUM_DOSSIER_INDEX,
  //     numDossierIndexSelected: numDossierIndex,
  //     time
  //   };
  // }
  // return false;
};

//  -----------------------------------------------------------------
//    POST fiche contact
//  -----------------------------------------------------------------
const requestPostGestContactsSaveFicheContact = (payload = {}, time = moment().format(formatDate)) => {
  return {
    type: REQUEST_SAVE_GEST_CONTACTS_FICHE_CONTACT,
    isFetchingFicheContact: true,
    isSavingFicheContact: true,
    payload,
    time
  };
};
const receivedPostGestContactsSaveFicheContact = (response = {}, time = moment().format(formatDate)) => {
  return {
    type: RECEIVED_SAVE_GEST_CONTACTS_FICHE_CONTACT,
    isFetchingFicheContact : false,
    isSavingFicheContact: false,
    response,
    time
  };
};
const errorPostGestContactsSaveFicheContact = (error, time = moment().format(formatDate)) => {
  return {
    type: ERROR_SAVE_GEST_CONTACTS_FICHE_CONTACT,
    isFetchingFicheContact : false,
    isSavingFicheContact: false,
    error,
    time
  };
};

const postQueryGestContactsSaveFicheContact = payload => dispatch => {
  if (!payload) {
    dispatch(errorPostGestContactsSaveFicheContact('postQueryGestContactsSaveFicheContact API error: payload is not defined or not valid'));
    return Promise.reject({
      message: 'Enregistrement de la fiche contact en erreur (payload non valide)',
      level: 'error',
      showNotification: true
    });
  }

  dispatch(requestPostGestContactsSaveFicheContact(payload));
  if (appConfig.DEV_MODE) {
    // DEV ONLY
    return fetchMockPostGestContactsSaveFicheContact(payload) // mock is the same all gestBenef object
            .then(
              data => {
                if (!data || !data.id) { // ATTENTION: doit retourner l'id de la fiche contact en update ou insert
                  dispatch(errorPostGestContactsSaveFicheContact({'error': 'post fiche contact unsuccessfull with no server error'}));
                  return Promise.reject({
                    message: 'Enregistrement de la fiche contact en erreur (retour invalide)',
                    level: 'error',
                    showNotification: true
                  });
                }
                dispatch(receivedPostGestContactsSaveFicheContact(data));
                return Promise.resolve({
                  id: data.id,
                  message: 'Enregistrement de la fiche contact terminé',
                  level: 'success',
                  showNotification: true
                });
              }
            )
            .catch(
              err => {
                dispatch(errorPostGestContactsSaveFicheContact(err));
                return Promise.reject({
                  message: 'Enregistrement de la fiche contact en erreur (erreur serveur)',
                  level: 'error',
                  showNotification: true
                });
              }
            );
  } else {
    return postGestContactsSaveFicheContact(payload)
            .then(
              response => {
                if (!response || !response.id) {
                  dispatch(errorPostGestContactsSaveFicheContact({'error': 'post benef identite unsuccessfull with no server error'}));
                  return Promise.reject({
                    message: 'Enregistrement de la fiche contact en erreur (retour invalide)',
                    level: 'error',
                    showNotification: true
                  });
                }
                dispatch(receivedPostGestContactsSaveFicheContact(response));
                return Promise.resolve({
                  id: response.id,
                  message: 'Enregistrement de la fiche contact terminé',
                  level: 'success',
                  showNotification: true
                });
              }
            )
            .catch(
              error => {
                dispatch(errorPostGestContactsSaveFicheContact(error));
                return Promise.reject({
                  message: 'Enregistrement de la fiche contact en erreur (erreur serveur)',
                  level: 'error',
                  showNotification: true
                });
              }
            );
  }
};

export const postGestContactsSaveFicheContactIfNeeded = payload => (dispatch, getState) => {
  if (shouldPostGestContactsSaveFicheContact(getState())) {
    return dispatch(postQueryGestContactsSaveFicheContact(payload));
  }
  return Promise.resolve({
    message: 'post des modifications de la fiche contact déjà en cours',
    level: 'info',
    showNotification: false
  });
};

function shouldPostGestContactsSaveFicheContact(state) {
  const gestContacts = state.gestContacts;
  // just check wether fetching (assuming data could be refreshed and should not persist in store)
  if (gestContacts.isFetchingFicheContact ||
      gestContacts.isSavingFicheContact) {
    return false;
  } else {
    return true;
  }
}


//  -----------------------------------------------------------------
//    fiche contact add new activite = combinaison of motifs 2,3 and 4
//  -----------------------------------------------------------------
export const addNewCombinaisonMotifsFicheContact = (time = moment().format(formatDate)) => (dispatch, getState) => {
  // check there is no unsaved listMotif otherwise can't accept to add new one until saved
  const currentActivities = getState().gestContacts.activites;
  const isBeingEditing = currentActivities.some(activite => activite.isEditable === true);

  if (!isBeingEditing) {
    dispatch({
      type : ADD_NEW_COMBINAISON_MOTIS_CONTACTS_FICHE_CONTACT,
      time
    });
    return Promise.resolve({
      message: 'Ajout d\'un nouveau motif. Editer le motif puis cliquez enregistrer pour confirmer.',
      level: 'success',
      showNotification: true
    });
  } else {
    return Promise.reject({
      message: 'Ajout d\'un nouveau motif impossible. Veuillez enregister ou annuler le motif en cours d\édition.',
      level: 'error',
      showNotification: true
    });
  }
};
//  -----------------------------------------------------------------
//    fiche contact remove new activite = combinaison of motifs 2,3 and 4
//  -----------------------------------------------------------------
export const removeNewCombinaisonMotifsFicheContact = (activiteIndex = 0, time = moment().format(formatDate)) => (dispatch, getState) => {
  if (parseInt(activiteIndex, 10) > 0) {
    const previsousState = getState().gestContacts;
    const activites = previsousState.activites.filter((_, idx)=>idx !== activiteIndex);

    dispatch({
      type : REMOVE_NEW_COMBINAISON_MOTIS_CONTACTS_FICHE_CONTACT,
      time,
      activites
    });
    return Promise.resolve({
      message: 'Ajout du nouveau motif annulé',
      level: 'warning',
      showNotification: true
    });
  }
  return false;
};
//  -----------------------------------------------------------------
//    POST: fiche contact save motifs combinaison
//  -----------------------------------------------------------------
const requestPostGestContactsSaveNewActivite = (activite = {}, time = moment().format(formatDate)) => {
  return {
    type: REQUEST_SAVE_GEST_CONTACTS_SAVE_NEW_ACTIVITE,
    isFetchingFicheContactListMotifs: true,
    isSavingFicheNewActivite: true,
    newActivite: activite,
    time
  };
};
const receivedPostGestContactsSaveNewActivite = (response = {}, time = moment().format(formatDate)) => {
  return {
    type: RECEIVED_SAVE_GEST_CONTACTS_SAVE_NEW_ACTIVITE,
    isFetchingFicheContactListMotifs : false,
    isSavingFicheNewActivite: false,
    response,
    time
  };
};
const errorPostGestContactsSaveNewActivite = (error, time = moment().format(formatDate)) => {
  return {
    type: ERROR_SAVE_GEST_CONTACTS_SAVE_NEW_ACTIVITE,
    isFetchingFicheContactListMotifs : false,
    isSavingFicheNewActivite: false,
    error,
    time
  };
};

const postQueryGestContactsSaveNewActivite = (activiteIndex = 0) => (dispatch, getState) => {
  if (!(parseInt(activiteIndex, 10) >= 0)) {
    dispatch(errorPostGestContactsSaveNewActivite('postQueryGestContactsSaveNewActivite API error: activiteIndex is not defined or not valid'));
    return Promise.reject({
      message: 'Enregistrement de la fiche contact en erreur (payload non valide)',
      level: 'error',
      showNotification: true
    });
  }
  // new activite lives in state but its fields like id tell us it is not saved into server
  const unSavedNewActivite = getState().gestContacts.activites[activiteIndex];

  dispatch(requestPostGestContactsSaveNewActivite(unSavedNewActivite));
  if (appConfig.DEV_MODE) {
    // DEV ONLY
    return fetchMockPostGestContactsSaveNewActivite(unSavedNewActivite) // mock is the same all gestBenef object
            .then(
              data => {
                if (!data) { // ATTENTION: doit retourner toutes les activites de la fiche contact
                  dispatch(errorPostGestContactsSaveNewActivite({'error': 'post de la nouvelle activité unsuccessfull with no server error'}));
                  return Promise.reject({
                    message: 'Enregistrement de la nouvelle activité en erreur (retour invalide)',
                    level: 'error',
                    showNotification: true
                  });
                }
                // mock : API will return all activites but mock won't so just polyfill some fake server behaviour:
                // previous state contains unseved activite => filter it then reconcat to state with updated fileds from server
                const newActiviteSaved = {...data.activiteSaved};

                const newActivites = getState()
                                      .gestContacts
                                      .activites
                                      .map(
                                        (activite, activiteIdx) => {
                                          if (activiteIdx === activiteIndex) {
                                            // update inserted activite fields (merge fields) in state:
                                            return {
                                              ...activite,
                                              ...newActiviteSaved
                                            };
                                          } else {
                                            return activite;
                                          }
                                        });

                dispatch(receivedPostGestContactsSaveNewActivite(newActivites));
                return Promise.resolve({
                  message: 'Enregistrement de la nouvelle activité terminé',
                  level: 'success',
                  showNotification: true
                });
              }
            )
            .catch(
              err => {
                dispatch(errorPostGestContactsSaveNewActivite(err));
                return Promise.reject({
                  message: 'Enregistrement de la nouvelle activité en erreur (erreur serveur)',
                  level: 'error',
                  showNotification: true
                });
              }
            );
  } else {
    return postGestContactsSaveNewActivite(unSavedNewActivite)
            .then(
              response => {
                if (!response || Array.isArray(response)) {
                  dispatch(errorPostGestContactsSaveFicheContact({'error': 'post de la nouvelle activité unsuccessfull with no server error'}));
                  return Promise.reject({
                    message: 'Enregistrement de la nouvelle activité en erreur (retour invalide)',
                    level: 'error',
                    showNotification: true
                  });
                }
                dispatch(receivedPostGestContactsSaveFicheContact(response));
                return Promise.resolve({
                  id: response.id,
                  message: 'Enregistrement de la nouvelle activité terminé',
                  level: 'success',
                  showNotification: true
                });
              }
            )
            .catch(
              error => {
                dispatch(errorPostGestContactsSaveFicheContact(error));
                return Promise.reject({
                  message: 'Enregistrement de la nouvelle activité en erreur (erreur serveur)',
                  level: 'error',
                  showNotification: true
                });
              }
            );
  }
};

export const postGestContactsSaveNewActiviteIfNeeded = activiteIndex => (dispatch, getState) => {
  const allMotifsAreValid = checkAllMotifAreValid(activiteIndex, getState());
  if (shouldPostGestContactsSaveNewActivite(getState()) && allMotifsAreValid) {
    return dispatch(postQueryGestContactsSaveNewActivite(activiteIndex));
  }
  if (!allMotifsAreValid) {
    return Promise.resolve({
      message: 'Tous les motifs doivent être valides avant de pouvoir les sauvegarder',
      level: 'warning',
      showNotification: true
    });
  }
  return Promise.resolve({
    message: 'post d\ajout de motif de la fiche contact déjà en cours',
    level: 'info',
    showNotification: false
  });
};

function shouldPostGestContactsSaveNewActivite(state) {
  const gestContacts = state.gestContacts;
  // just check wether fetching (assuming data could be refreshed and should not persist in store)
  if (gestContacts.isFetchingFicheContact ||
      gestContacts.isSavingFicheContact   ||
      gestContacts.isFetchingFicheContactListMotifs)  {
    return false;
  } else {
    return true;
  }
}

function checkAllMotifAreValid(activiteIndex, state) {
  const gestContacts = state.gestContacts;
  if (!(parseInt(activiteIndex, 10) >= 0)) {
    return false;
  }

  const activiteToCheck = gestContacts.activites[activiteIndex];
  if (activiteToCheck) {
    return (
      (parseInt(activiteToCheck.selectMotifLevel2IdFicheContact, 10) > -1) &&
      (parseInt(activiteToCheck.selectMotifLevel3IdFicheContact, 10) > -1) &&
      (parseInt(activiteToCheck.selectMotifLevel4IdFicheContact, 10) > -1)
    );
  } else {
    return false;
  }
}

//  -----------------------------------------------------------------
//    fiche contact change motif niveau 2
//  -----------------------------------------------------------------
export const onChangeFicheContactMotifNiveau2 = (payload = {}, time = moment().format(formatDate)) => {
  return function (dispatch, getState) {
    const previousState = getState().gestContacts;
    const activites = [...previousState.activites];
    activites[payload.motifLineIndex].selectMotifLevel2IdFicheContact = payload.indexMotif;

    dispatch({
      type : ON_CHANGE_FICHE_CONTACT_MOTIF_NIVEAU_2,
      time,
      activites: [...activites]
    });
  };
};
//  -----------------------------------------------------------------
//    fiche contact change motif niveau 3
//  -----------------------------------------------------------------
export const onChangeFicheContactMotifNiveau3 = (payload = {}, time = moment().format(formatDate)) => {
  return function (dispatch, getState) {
    const previousState = getState().gestContacts;
    const activites = [...previousState.activites];
    activites[payload.motifLineIndex].selectMotifLevel3IdFicheContact = payload.indexMotif;

    dispatch({
      type : ON_CHANGE_FICHE_CONTACT_MOTIF_NIVEAU_3,
      time,
      activites: [...activites]
    });
  };
};
//  -----------------------------------------------------------------
//    fiche contact change motif niveau 4
//  -----------------------------------------------------------------
export const onChangeFicheContactMotifNiveau4 = (payload = {}, time = moment().format(formatDate)) => {
  return function (dispatch, getState) {
    const previousState = getState().gestContacts;
    const activites = [...previousState.activites];
    activites[payload.motifLineIndex].selectMotifLevel4IdFicheContact = payload.indexMotif;

    dispatch({
      type : ON_CHANGE_FICHE_CONTACT_MOTIF_NIVEAU_4,
      time,
      activites: [...activites]
    });
  };
};
