import React, { PropTypes, Component }  from 'react';
import cx                               from 'classnames';
import Identite                         from './identite/Identite';
import Contact                          from './contact/Contact';
import Dossiers                         from './dossiers/Dossiers';
import ContactsEtActivites              from './contactsEtActivites/ContactsEtActivites';
import FetchingAllContent               from './fetchingAllContent/FetchingAllContent';


class GestBeneficiaires extends Component {
  constructor(props) {
    super(props);

    this.state = {
      animated: true
    };
    // identite related methods:
    this.handlesOnCiviliteChanged = this.handlesOnCiviliteChanged.bind(this);
    this.handlesOnNomChanged = this.handlesOnNomChanged.bind(this);
    this.handlesOnNomJeuneFilleChanged = this.handlesOnNomJeuneFilleChanged.bind(this);
    this.handlesOnPrenomChanged = this.handlesOnPrenomChanged.bind(this);
    this.handlesOnDateNaissanceChanged = this.handlesOnDateNaissanceChanged.bind(this);
    this.handlesOnNumssChanged = this.handlesOnNumssChanged.bind(this);
    this.handlesOnDateDecesChanged = this.handlesOnDateDecesChanged.bind(this);
    this.handlesOnMaritalStatusChanged = this.handlesOnMaritalStatusChanged.bind(this);
    this.handlesOnIdentiteCollapseClick = this.handlesOnIdentiteCollapseClick.bind(this);
    this.handlesOnEditIdentiteClick = this.handlesOnEditIdentiteClick.bind(this);
    this.handlesOnCancelEditIdentiteClick = this.handlesOnCancelEditIdentiteClick.bind(this);
    this.handlesOnSaveIdentiteForm = this.handlesOnSaveIdentiteForm.bind(this);
    // contact related methods:
    this.handlesOnFixedPhoneChanged = this.handlesOnFixedPhoneChanged.bind(this);
    this.handlesOnMobilePhoneChanged = this.handlesOnMobilePhoneChanged.bind(this);
    this.handlesOnEmailChanged = this.handlesOnEmailChanged.bind(this);
    this.handlesOnNumAdressChanged = this.handlesOnNumAdressChanged.bind(this);
    this.handlesOnVoieChanged = this.handlesOnVoieChanged.bind(this);
    this.handlesOnComplementAdrChanged = this.handlesOnComplementAdrChanged.bind(this);
    this.handlesOnCodePostalChanged = this.handlesOnCodePostalChanged.bind(this);
    this.handlesOnVilleChanged = this.handlesOnVilleChanged.bind(this);
    this.handlesOnPaysChanged = this.handlesOnPaysChanged.bind(this);
    this.handlesOnSaveContactForm = this.handlesOnSaveContactForm.bind(this);
    this.handlesOnEditContactClick = this.handlesOnEditContactClick.bind(this);
    this.handlesOnCancelEditContactClick = this.handlesOnCancelEditContactClick.bind(this);
    this.handlesOnContactCollapseClick = this.handlesOnContactCollapseClick.bind(this);
    // dossiers related methods:
    this.handlesOnDossiersCollapseClick = this.handlesOnDossiersCollapseClick.bind(this);
    this.handlesOnDossierSelection = this.handlesOnDossierSelection.bind(this);
    this.handlesOnDossierEdition = this.handlesOnDossierEdition.bind(this);
    this.handlesOnDossierValidEdition = this.handlesOnDossierValidEdition.bind(this);
    this.handlesOnDossierCancelEdition = this.handlesOnDossierCancelEdition.bind(this);
    this.handlesOnCreateNewDossiersClick = this.handlesOnCreateNewDossiersClick.bind(this);
    // contactsEtActivites related methods
    // dossiers related methods:
    this.handlesOnContactsEtActivitesCollapseClick = this.handlesOnContactsEtActivitesCollapseClick.bind(this);
  }

  componentDidMount() {
    const { params: { benefId } } =  this.props;
    const { actions: { enterGestBeneficiaires, resetGestBenef } } =  this.props;
    const { actions: { addNotificationMessage } } = this.props;

    enterGestBeneficiaires();

    this.resetIdentiteEditingAndCollpasing();
    this.resetContactEditingAndCollpasing();
    this.resetDossierEditingAndCollpasing();

    const idBenef = parseInt(benefId, 10);
    if (idBenef) {
      addNotificationMessage({
        message: 'Consultation / Edition d\'un bénéficiaire existant',
        level: 'info'
      });
      this.refreshAllBenefData(idBenef);
    } else {
      addNotificationMessage({
        message: 'Création d\'un nouveau bénéficiaire',
        level: 'info'
      });
      // reset gestBenef form model
      resetGestBenef();
    }
  }

  componentWillReceiveProps(newProps) {
    const { params: { benefId } } =  newProps;
    const { actions: { resetGestBenef } } =  this.props;
    const { actions: { addNotificationMessage } } = this.props;

    const idBenef = parseInt(benefId, 10);

    if (benefId !== this.props.params.benefId) {
      // search another benef from same page = need to refresh
      this.resetIdentiteEditingAndCollpasing();
      this.resetContactEditingAndCollpasing();
      this.resetDossierEditingAndCollpasing();

      if (idBenef) {
        addNotificationMessage({
          message: 'Consultation / Edition d\'un bénéficiaire existant',
          level: 'info'
        });
        this.refreshAllBenefData(idBenef);
      } else {
        addNotificationMessage({
          message: 'Création d\'un nouveau bénéficiaire',
          level: 'info'
        });
        // reset gestBenef form model
        resetGestBenef();
      }
    }
  }

  componentWillUnmount() {
    const { actions: {leaveGestBeneficiaires  } } = this.props;
    leaveGestBeneficiaires();
  }

  render() {
    const { animated } = this.state;
    const { isFetchingAll } = this.props;
    // id benef if === 0  then create
    const { id } = this.props;
    // identite:
    const { isFetchingIdentite, lastFetchTimeIdentite, isEditingIdentite, isSavingIdentite, isCollapsedIdentite } = this.props;
    const { civilite, nom, prenom, nomJeuneFille, dateNaissance, numss, dateDeces, maritalStatus } = this.props;
    // contact:
    const { isFetchingContact, lastFetchTimeContact, isSavingContact, isEditingContact, isCollapsedContact } = this.props;
    const { fixedPhone, mobilePhone, email, numAdress, voie, complementAdr, codePostal, ville, pays } = this.props;
    // dossiers:
    const { isFetchingDossiers, lastFetchTimeDossiers, isSavingDossiers, isEditingDossiers, isCollapsedDossiers } = this.props;
    const { dossiers, editDossierId } = this.props;
    // contacts et activitées
    const { isFetchingContactsEtActivites, lastFetchTimeContactsEtActivites, contactsEtActivites, numDossierSelected, isCollapsedContactsEtActivites } = this.props;

    return(
      <section
        className={cx({
          'content':        true,
          'animatedViews':  animated,
          'view-enter':     animated
        })}>

        <div
          className="row"
          style={{marginBottom: '5px'}}>

          <div className="col-md-12">
            <section
              className="panel"
              style={{ paddingBottom: '10px'}}>
              <header className="panel-heading">
                {
                  (!id || id <= 0)
                  ? 'Ajout Bénéficiaire'
                  : 'Détail Bénéficiaire'
                }
              </header>

              <div className="panel-body">
              {
                isFetchingAll &&
                <div style={{height: '1000px'}}>
                  <div style={{height: '80px'}}></div>
                  <FetchingAllContent />
                </div>
              }
              {
                !isFetchingAll &&
                <div>

                  <Identite
                    isFetchingIdentite={isFetchingIdentite}
                    lastFetchTimeIdentite={lastFetchTimeIdentite}

                    isSavingIdentite={isSavingIdentite}
                    onSaveFormIdentite={this.handlesOnSaveIdentiteForm}

                    onEditClick={this.handlesOnEditIdentiteClick}
                    onCancelEditClick={this.handlesOnCancelEditIdentiteClick}
                    isEditingIdentite={isEditingIdentite}

                    isCollapsedIdentite={isCollapsedIdentite}
                    onCollapseClick={this.handlesOnIdentiteCollapseClick}

                    civilite={civilite}
                    onCiviliteChange={this.handlesOnCiviliteChanged}

                    nom={nom}
                    onNomChanged={this.handlesOnNomChanged}

                    nomJeuneFille={nomJeuneFille}
                    onNomJeuneFilleChanged={this.handlesOnNomJeuneFilleChanged}

                    prenom={prenom}
                    onPrenomChanged={this.handlesOnPrenomChanged}

                    dateNaissance={dateNaissance}
                    onDateNaissanceChanged={this.handlesOnDateNaissanceChanged}

                    numss={numss}
                    onNumssChanged={this.handlesOnNumssChanged}

                    dateDeces={dateDeces}
                    onDateDecesChanged={this.handlesOnDateDecesChanged}

                    maritalStatus={maritalStatus}
                    onMaritalStatusChanged={this.handlesOnMaritalStatusChanged}
                  />

                  <div style={{height: '10px'}}></div>

                  <Contact
                    isFetchingContact={isFetchingContact}
                    lastFetchTimeContact={lastFetchTimeContact}

                    isSavingContact={isSavingContact}
                    onSaveFormContact={this.handlesOnSaveContactForm}

                    onEditClick={this.handlesOnEditContactClick}
                    onCancelEditClick={this.handlesOnCancelEditContactClick}
                    isEditingContact={isEditingContact}

                    isCollapsedContact={isCollapsedContact}
                    onCollapseClick={this.handlesOnContactCollapseClick}

                    fixedPhone={fixedPhone}
                    onFixedPhoneChanged={this.handlesOnFixedPhoneChanged}

                    mobilePhone={mobilePhone}
                    onMobilePhoneChanged={this.handlesOnMobilePhoneChanged}

                    email={email}
                    onEmailChanged={this.handlesOnEmailChanged}

                    numAdress={numAdress}
                    onNumAdressChanged={this.handlesOnNumAdressChanged}

                    voie={voie}
                    onVoieChanged={this.handlesOnVoieChanged}

                    complementAdr={complementAdr}
                    onComplementAdrChanged={this.handlesOnComplementAdrChanged}

                    codePostal={codePostal}
                    onCodePostalChanged={this.handlesOnCodePostalChanged}

                    ville={ville}
                    onVilleChanged={this.handlesOnVilleChanged}

                    pays={pays}
                    onPaysChanged={this.handlesOnPaysChanged}
                  />

                  {
                    !isCollapsedIdentite &&
                      <div style={{height: '10px'}}></div>
                  }

                  {
                    !isCollapsedContact &&
                      <div style={{height: '40px'}}></div>
                  }

                  <div style={{height: '10px'}}></div>

                  {/* pas de dossier si beneficiaire sans id (il suffit de sauvegarder une fois pour lui créer un id et passer à modification de benef) */}
                  {
                    (parseInt(id, 10) > 0) &&
                    <div>
                      {/* dossiers */}
                      <Dossiers
                        dossiers={dossiers}

                        isFetchingDossiers={isFetchingDossiers}
                        lastFetchTimeDossiers={lastFetchTimeDossiers}

                        isEditingDossiers={isEditingDossiers}
                        editDossierId={editDossierId}
                        isSavingDossiers={isSavingDossiers}

                        onDossierValidEdition={this.handlesOnDossierValidEdition}
                        onDossierCancelEdition={this.handlesOnDossierCancelEdition}

                        isCollapsedDossiers={isCollapsedDossiers}
                        onCollapseClick={this.handlesOnDossiersCollapseClick}

                        onDossierSelection={this.handlesOnDossierSelection}

                        onDossierEdition={this.handlesOnDossierEdition}

                        onCreateDossierClick={this.handlesOnCreateNewDossiersClick}
                      />
                    </div>
                  }

                  {/* pas de contactsEtActivites si beneficiaire sans id */}
                  {
                    (parseInt(id, 10) > 0) &&
                    <div>
                      {/* contacts et activites */}

                      <div style={{height: '10px'}}></div>

                      <ContactsEtActivites
                        isFetchingContactsEtActivites={isFetchingContactsEtActivites}
                        lastFetchTimeContactsEtActivites={lastFetchTimeContactsEtActivites}

                        contactsEtActivites={contactsEtActivites}

                        numDossierSelected={numDossierSelected}

                        isCollapsedContactsEtActivites={isCollapsedContactsEtActivites}
                        onCollapseClick={this.handlesOnContactsEtActivitesCollapseClick}
                      />

                      <div style={{height: '10px'}}></div>
                    </div>
                  }
                </div>
              }
              </div>
            </section>
          </div>

        </div>
      </section>
    );
  }
  // ////////////////////////////////
  //  general
  // ////////////////////////////////

  // fetch all benef data and add notifications
  refreshAllBenefData(idBenef = 0) {
    if (idBenef && (parseInt(idBenef, 10) > 0)) {
      const { actions: { getGestBenefIfNeeded, addNotificationMessage } } = this.props;

      getGestBenefIfNeeded(idBenef)
        .then(
          notificationPayload => {
            if (notificationPayload && notificationPayload.showNotification) {
              addNotificationMessage({
                message: notificationPayload.message ? notificationPayload.message : '',
                level: notificationPayload.level ? notificationPayload.level : 'info'
              });
            }
          }
        )
        .catch(
          notificationPayload => {
            if (notificationPayload && notificationPayload.showNotification) {
              addNotificationMessage({
                message: notificationPayload.message ? notificationPayload.message : '',
                level: notificationPayload.level ? notificationPayload.level : 'error'
              });
            }
          }
        );
    }
  }

  // ////////////////////////////////
  //  Identite related methods
  // ////////////////////////////////
  refreshIdentiteBenefData(idBenef = 0, resetMessage = '') {
    if (idBenef && (parseInt(idBenef, 10) > 0)) {
      const { actions: { getGestBenefIdentiteIfNeeded, addNotificationMessage } } = this.props;

      getGestBenefIdentiteIfNeeded(idBenef)
        .then(
          notificationPayload => {
            if (notificationPayload && notificationPayload.showNotification) {
              /* eslint-disable no-nested-ternary */
              const message = resetMessage
                ? resetMessage
                : notificationPayload.message ? notificationPayload.message : '';
              /* eslint-enable no-nested-ternary */
              addNotificationMessage({
                message: message,
                level: notificationPayload.level ? notificationPayload.level : 'info'
              });
            }
          }
        )
        .catch(
          notificationPayload => {
            if (notificationPayload && notificationPayload.showNotification) {
              addNotificationMessage({
                message: notificationPayload.message ? notificationPayload.message : '',
                level: notificationPayload.level ? notificationPayload.level : 'error'
              });
            }
          }
        );
    }
  }

  handlesOnCiviliteChanged(civilite) {
    const { actions: { updateCiviliteIdentite } } = this.props;
    updateCiviliteIdentite(civilite);
  }

  handlesOnNomChanged(nom) {
    const { actions: { updateNomIdentite } } = this.props;
    updateNomIdentite(nom);
  }

  handlesOnNomJeuneFilleChanged(nomJeuneFille) {
    const { actions: { updateNomDeJeuneFilleIdentite } } = this.props;
    updateNomDeJeuneFilleIdentite(nomJeuneFille);
  }

  handlesOnPrenomChanged(prenom) {
    const { actions: { updatePrenomIdentite } } = this.props;
    updatePrenomIdentite(prenom);
  }

  handlesOnDateNaissanceChanged(dateNaissance) {
    const { actions: { updateDateNaissanceIdentite } } = this.props;
    updateDateNaissanceIdentite(dateNaissance);
  }

  handlesOnNumssChanged(numss) {
    const { actions: { updateNumssIdentite } } = this.props;
    updateNumssIdentite(numss);
  }

  handlesOnDateDecesChanged(dateDeces) {
    const { actions: { updateDateDecesIdentite } } = this.props;
    updateDateDecesIdentite(dateDeces);
  }

  handlesOnMaritalStatusChanged(maritalStatus) {
    const { actions: { updateMaritalStatusIdentite } } = this.props;
    updateMaritalStatusIdentite(maritalStatus);
  }

  handlesOnIdentiteCollapseClick() {
    const { isCollapsedIdentite, actions: { setIsCollapsedIdentite, unsetIsCollapsedIdentite } } = this.props;
    if (isCollapsedIdentite) {
      unsetIsCollapsedIdentite();
    } else {
      setIsCollapsedIdentite();
    }
  }

  handlesOnEditIdentiteClick() {
    const { actions: { setIsEditingIdentite, addNotificationMessage } } = this.props;
    setIsEditingIdentite();
    // notification to inform enter edit mode
    addNotificationMessage({
      message: 'Les informations "Identité" sont maintenant éditables',
      level: 'info'
    });
  }

  handlesOnCancelEditIdentiteClick() {
    const {
      actions: {
        unsetIsEditingIdentite,
        addNotificationMessage,
        resetGestBenefIdentite
      }
    } = this.props;
    const { params: { benefId } } =  this.props;

    unsetIsEditingIdentite();
    // notification to inform enter edit mode
    addNotificationMessage({
      message: 'Annulation de l\'édition des informations "Identité" (les changements ne seront pas sauvegardés)',
      level: 'warning'
    });

    const idBenef = parseInt(benefId, 10);
    if (idBenef) {
      // EXISTING BENEF: refresh Indentite data from backend to reset changes:
      const resetMessage = 'Données "Identité" du bénéficiaire réinitialisées';
      this.refreshIdentiteBenefData(idBenef, resetMessage);
    } else {
      // NEW BENEF: reset changes:
      resetGestBenefIdentite();
    }
  }

  // to reset identite editing state and collapsed state
  resetIdentiteEditingAndCollpasing() {
    const { actions: { unsetIsEditingIdentite, unsetIsCollapsedIdentite } } = this.props;
    unsetIsEditingIdentite();
    unsetIsCollapsedIdentite();
  }

  handlesOnSaveIdentiteForm() {
    const {
      actions: {
        postGestBenefIdentiteIfNeeded,
        unsetIsEditingIdentite
      }
    } = this.props;
    const {
      id,
      civilite,
      nom,
      nomJeuneFille,
      prenom,
      dateNaissance,
      numss,
      dateDeces,
      maritalStatus
    } = this.props;

    const payload = {
      id,
      civilite,
      nom,
      nomJeuneFille,
      prenom,
      dateNaissance,
      numss,
      dateDeces,
      maritalStatus
    };
    postGestBenefIdentiteIfNeeded(payload)
      .then(
        response => {
          unsetIsEditingIdentite();
          // fetch from server to refresh
          this.refreshIdentiteBenefData(response.id);
        }
      )
      .catch(
        error => {
          const {actions: {addNotificationMessage}} = this.props;
          addNotificationMessage({
            message: error.message ? error.message : 'Enregistrement des modifications des informations "Identité" du bénéficiaire en erreur',
            level: 'error'
          });
        }
      );
  }

  // ////////////////////////////////
  //  Contact related methods
  // ////////////////////////////////
  refreshContactBenefData(idBenef = 0, resetMessage = '') {
    if (idBenef && (parseInt(idBenef, 10) > 0)) {
      const { actions: { getGestBenefContactIfNeeded, addNotificationMessage } } = this.props;

      getGestBenefContactIfNeeded(idBenef)
        .then(
          notificationPayload => {
            if (notificationPayload && notificationPayload.showNotification) {
              /* eslint-disable no-nested-ternary */
              const message = resetMessage
                ? resetMessage
                : notificationPayload.message ? notificationPayload.message : '';
              /* eslint-enable no-nested-ternary */
              addNotificationMessage({
                message: message,
                level: notificationPayload.level ? notificationPayload.level : 'info'
              });
            }
          }
        )
        .catch(
          notificationPayload => {
            if (notificationPayload && notificationPayload.showNotification) {
              addNotificationMessage({
                message: notificationPayload.message ? notificationPayload.message : '',
                level: notificationPayload.level ? notificationPayload.level : 'error'
              });
            }
          }
        );
    }
  }

  handlesOnFixedPhoneChanged(fixedPhone) {
    const { actions: { updateTelephoneFixeContact } } = this.props;
    updateTelephoneFixeContact(fixedPhone);
  }

  handlesOnMobilePhoneChanged(mobilePhone) {
    const { actions: { updateTelephoneMobileContact } } = this.props;
    updateTelephoneMobileContact(mobilePhone);
  }

  handlesOnEmailChanged(email) {
    const { actions: { updateEmailContact } } = this.props;
    updateEmailContact(email);
  }

  handlesOnNumAdressChanged(numAdr) {
    const { actions: { updateNumAdressNumber } } = this.props;
    updateNumAdressNumber(numAdr);
  }

  handlesOnVoieChanged(voie) {
    const { actions: { updateVoieAdressContact } } = this.props;
    updateVoieAdressContact(voie);
  }

  handlesOnComplementAdrChanged(complementAdr) {
    const { actions: { updateComplementAdressContact } } = this.props;
    updateComplementAdressContact(complementAdr);
  }

  handlesOnCodePostalChanged(codePostal) {
    const { actions: { updateCodePostalContact } } = this.props;
    updateCodePostalContact(codePostal);
  }

  handlesOnVilleChanged(ville) {
    const { actions: { updateVilleContact } } = this.props;
    updateVilleContact(ville);
  }

  handlesOnPaysChanged(pays) {
    const { actions: { updatePaysContact } } = this.props;
    updatePaysContact(pays);
  }

  handlesOnContactCollapseClick() {
    const { isCollapsedContact, actions: { setIsCollapsedContact, unsetIsCollapsedContact } } = this.props;
    if (isCollapsedContact) {
      unsetIsCollapsedContact();
    } else {
      setIsCollapsedContact();
    }
  }

  handlesOnEditContactClick() {
    const { actions: { setIsEditingContact, addNotificationMessage } } = this.props;
    setIsEditingContact();
    // notification to inform enter edit mode
    addNotificationMessage({
      message: 'Les informations "Contact" sont maintenant éditables',
      level: 'info'
    });
  }

  handlesOnCancelEditContactClick() {
    const {
      actions: {
        unsetIsEditingContact,
        addNotificationMessage,
        resetGestBenefContact
      }
    } = this.props;
    const { params: { benefId } } =  this.props;

    unsetIsEditingContact();
    // notification to inform enter edit mode
    addNotificationMessage({
      message: 'Annulation de l\'édition des informations "Contact" (les changements ne seront pas sauvegardés)',
      level: 'warning'
    });

    const idBenef = parseInt(benefId, 10);
    if (idBenef) {
      // EXISTING BENEF: refresh Contact data from backend to reset changes:
      const resetMessage = 'Données "Contact" du bénéficiaire réinitialisées';
      this.refreshContactBenefData(idBenef, resetMessage);
    } else {
      // NEW BENEF: reset changes:
      resetGestBenefContact();
    }
  }

  handlesOnSaveContactForm() {
    const {
      actions: {
        postGestBenefContactIfNeeded,
        unsetIsEditingContact
      }
    } = this.props;
    const {
      id,
      fixedPhone,
      mobilePhone,
      email,
      numAdress,
      voie,
      complementAdr,
      codePostal,
      ville,
      pays
    } = this.props;

    const payload = {
      id,
      fixedPhone,
      mobilePhone,
      email,
      numAdress,
      voie,
      complementAdr,
      codePostal,
      ville,
      pays
    };
    postGestBenefContactIfNeeded(payload)
      .then(
        response => {
          unsetIsEditingContact();
          // fetch from server to refresh
          this.refreshContactBenefData(response.id);
        }
      )
      .catch(
        error => {
          const {actions: {addNotificationMessage}} = this.props;
          addNotificationMessage({
            message: error.message ? error.message : 'Enregistrement des modifications des informations "Contact" du bénéficiaire en erreur',
            level: 'error'
          });
        }
      );
  }

  // to reset contact editing state and collapsed state
  resetContactEditingAndCollpasing() {
    const { actions: { unsetIsEditingContact, unsetIsCollapsedContact } } = this.props;
    unsetIsEditingContact();
    unsetIsCollapsedContact();
  }

  // ////////////////////////////////
  //  dossiers related methods
  // ////////////////////////////////
  refreshDossiersBenefData(idBenef = 0, resetMessage = '') {
    if (idBenef && (parseInt(idBenef, 10) > 0)) {
      const { actions: { getGestBenefAllDossiersIfNeeded, addNotificationMessage } } = this.props;

      getGestBenefAllDossiersIfNeeded(idBenef)
        .then(
          notificationPayload => {
            if (notificationPayload && notificationPayload.showNotification) {
              /* eslint-disable no-nested-ternary */
              const message = resetMessage
                ? resetMessage
                : notificationPayload.message ? notificationPayload.message : '';
              /* eslint-enable no-nested-ternary */
              addNotificationMessage({
                message: message,
                level: notificationPayload.level ? notificationPayload.level : 'info'
              });
            }

            // refresh all contact et activites:
            this.refreshAllContactEtActivites(idBenef);
          }
        )
        .catch(
          notificationPayload => {
            if (notificationPayload && notificationPayload.showNotification) {
              addNotificationMessage({
                message: notificationPayload.message ? notificationPayload.message : '',
                level: notificationPayload.level ? notificationPayload.level : 'error'
              });
            }
          }
        );
    }
  }

  refreshAllContactEtActivites(idBenef = 0, resetMessage = '') {
    if (!idBenef || !(parseInt(idBenef, 10) > 0)) {
      return;
    }

    const {
      actions: {
        getGestBenefAllContactsEtActivitesIfNeeded,
        addNotificationMessage
      }
    } = this.props;

    getGestBenefAllContactsEtActivitesIfNeeded(idBenef)
      .then(
        notificationPayload => {
          if (notificationPayload && notificationPayload.showNotification) {
            /* eslint-disable no-nested-ternary */
            const message = resetMessage
              ? resetMessage
              : notificationPayload.message ? notificationPayload.message : '';
            /* eslint-enable no-nested-ternary */
            addNotificationMessage({
              message: message,
              level: notificationPayload.level ? notificationPayload.level : 'info'
            });
          }
        }
      )
      .catch(
        notificationPayload => {
          if (notificationPayload && notificationPayload.showNotification) {
            addNotificationMessage({
              message: notificationPayload.message ? notificationPayload.message : '',
              level: notificationPayload.level ? notificationPayload.level : 'error'
            });
          }
        }
      );
  }

  handlesOnDossiersCollapseClick() {
    const { isCollapsedDossiers, actions: { setIsCollapsedDossiers, unsetIsCollapsedDossiers } } = this.props;
    if (isCollapsedDossiers) {
      unsetIsCollapsedDossiers();
    } else {
      setIsCollapsedDossiers();
    }
  }

  handlesOnDossierSelection(dossierSelected = 0) {
    /* eslint-disable no-console */
    console.log('TODO: dossier selected: ', dossierSelected);
    // finalement pas besoin de cette méthode pour l'instant
    /* eslint-enable no-console */
  }

  handlesOnDossierEdition(dossierToEdit) {
    const { actions: { addNotificationMessage, setIsEditingDossier } } = this.props;
    // notification to inform enter edit mode
    const dossierIdToEdit = dossierToEdit.id;
    const numDossToEdit = dossierToEdit.numDossier;

    addNotificationMessage({
      message: `Les informations "Dossier" (${numDossToEdit}) sont maintenant éditables`,
      level: 'info'
    });
    setIsEditingDossier(dossierIdToEdit);
  }

  handlesOnDossierValidEdition(dossierUpdated) {
    const {
      actions: {
        unsetIsEditingDossier,
        updateGestBenefDossierIfNeeded
      },
      id
    } = this.props;

    /* eslint-disable no-unused-vars */
    updateGestBenefDossierIfNeeded(dossierUpdated)
      .then(
        response => {
          unsetIsEditingDossier();
          // IMPORTANT IF NOT ALREADY: UNCOMMENT LINE BELOW FOR PRODUCTION!!!!
          this.refreshDossiersBenefData(id); // refresh all dossiers for this bnefId
        }
      )
      .catch(
        error => {
          const {actions: {addNotificationMessage}} = this.props;
          addNotificationMessage({
            message: error.message ? error.message : 'Enregistrement des modifications du "Dossier" en erreur',
            level: 'error'
          });
        }
      );
    /* eslint-enable no-unused-vars */
  }

  handlesOnDossierCancelEdition() {
    const {
      actions: {
        unsetIsEditingDossier,
        addNotificationMessage,
        resetGestBenefDossier
      }
    } = this.props;
    const { params: { benefId } } =  this.props;

    unsetIsEditingDossier();
    // notification to inform leave edit mode
    addNotificationMessage({
      message: 'Annulation de l\'édition du "Dossier" (les changements ne seront pas sauvegardés)',
      level: 'warning'
    });

    const idBenef = parseInt(benefId, 10);
    if (idBenef) {
      // EXISTING BENEF: refresh Dossier data from backend to reset changes:
      const resetMessage = 'Données "Dossiers" du bénéficiaire réinitialisées';
      this.refreshDossiersBenefData(idBenef, resetMessage);
    } else {
      // NEW BENEF: reset changes:
      resetGestBenefDossier();
    }
  }

  // to reset contact editing state and collapsed state
  resetDossierEditingAndCollpasing() {
    const { actions: { unsetIsEditingContact, unsetIsCollapsedContact } } = this.props;
    unsetIsEditingContact();
    unsetIsCollapsedContact();
  }

  handlesOnCreateNewDossiersClick(event) {
    event.preventDefault();
    const { params: { benefId } } =  this.props;
    const { actions: { showNewBenefDossierModal } } = this.props;
    // needs a benefId to add a dossiers!:
    const idBenef = parseInt(benefId, 10);
    if (idBenef) {
      showNewBenefDossierModal(idBenef)
        .then(
          () => {
            return;
          }
        )
        .catch(
          error => {
            const {actions: {addNotificationMessage}} = this.props;
            addNotificationMessage({
              message: error.message ? error.message : 'Création d\'un nouveau dossiers impossible',
              level: 'error'
            });
          }
        );
    } else {
      const {actions: {addNotificationMessage}} = this.props;
      addNotificationMessage({
        message: 'Veuillez enregister les informations du nouveau bénéficiaire. \nLe bénéficaire doit exister dans l\'application avant de pouvoir lui ajouter des dossiers.',
        level: 'error'
      });
    }
  }

  // /////////////////////////////////////
  //  ContactsEtActivites related methods
  // /////////////////////////////////////
  handlesOnContactsEtActivitesCollapseClick() {
    const {
      isCollapsedContactsEtActivites,
      actions: {
        setIsCollapsedContactsEtActivites,
        unsetIsCollapsedContactsEtActivites
      }
    } = this.props;

    if (isCollapsedContactsEtActivites) {
      unsetIsCollapsedContactsEtActivites();
    } else {
      setIsCollapsedContactsEtActivites();
    }
  }
}

GestBeneficiaires.propTypes = {
  // react router
  params: PropTypes.object,
  location: PropTypes.object,

  currentView:  PropTypes.string.isRequired,
  // ///////////////////////
  // gestBenef data:
  // ///////////////////////
  lastActionTime: PropTypes.string.isRequired,
  isFetchingAll: PropTypes.bool.isRequired,

  id: PropTypes.number.isRequired,
  // ///////////////////////
  // identité
  // ///////////////////////
  isFetchingIdentite: PropTypes.bool.isRequired,
  lastFetchTimeIdentite: PropTypes.string.isRequired,
  isEditingIdentite: PropTypes.bool.isRequired,
  isSavingIdentite: PropTypes.bool.isRequired,
  isCollapsedIdentite: PropTypes.bool.isRequired,
  civilite: PropTypes.string.isRequired,
  nom: PropTypes.string.isRequired,
  nomJeuneFille: PropTypes.string.isRequired,
  prenom: PropTypes.string.isRequired,
  dateNaissance: PropTypes.string.isRequired,
  numss: PropTypes.string.isRequired,
  dateDeces: PropTypes.string.isRequired,
  maritalStatus: PropTypes.string.isRequired,
  // ///////////////////////
  // contact data
  // ///////////////////////
  isFetchingContact: PropTypes.bool.isRequired,
  lastFetchTimeContact: PropTypes.string.isRequired,
  isEditingContact: PropTypes.bool.isRequired,
  isSavingContact: PropTypes.bool.isRequired,
  isCollapsedContact: PropTypes.bool.isRequired,
  fixedPhone: PropTypes.string.isRequired,
  mobilePhone: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  // contact data > sub: adress
  numAdress: PropTypes.string.isRequired,
  voie: PropTypes.string.isRequired,
  complementAdr: PropTypes.string.isRequired,
  codePostal: PropTypes.string.isRequired,
  ville: PropTypes.string.isRequired,
  pays: PropTypes.string.isRequired,
  // ///////////////////////
  // dossiers:
  // ///////////////////////
  isFetchingDossiers: PropTypes.bool.isRequired,
  lastFetchTimeDossiers: PropTypes.string.isRequired,
  isEditingDossiers: PropTypes.bool.isRequired,
  isSavingDossiers: PropTypes.bool.isRequired,
  isCollapsedDossiers: PropTypes.bool.isRequired,
  dossiers: PropTypes.array.isRequired,
  editDossierId: PropTypes.number.isRequired,
  // ///////////////////////
  // contacts Et activites:
  // ///////////////////////
  isFetchingContactsEtActivites: PropTypes.bool.isRequired,
  lastFetchTimeContactsEtActivites: PropTypes.string.isRequired,
  contactsEtActivites: PropTypes.array.isRequired,
  numDossierSelected: PropTypes.string.isRequired,
  isCollapsedContactsEtActivites: PropTypes.bool.isRequired,

  // ///////////////////////// ///////////////////////
  actions: PropTypes.shape({
    // view:
    enterGestBeneficiaires: PropTypes.func,
    leaveGestBeneficiaires: PropTypes.func,
    // notifications:
    addNotificationMessage: PropTypes.func,
    // get gestBenef:
    getGestBenefIfNeeded: PropTypes.func,
    // reset:
    resetGestBenef: PropTypes.func.isRequired,
    // //////////////////
    // identite
    // /////////////////
    // get
    getGestBenefIdentiteIfNeeded: PropTypes.func,
    // post
    postGestBenefIdentiteIfNeeded: PropTypes.func,
    // reset:
    resetGestBenefIdentite: PropTypes.func,
    // UI: Identite
    setIsEditingIdentite: PropTypes.func,
    unsetIsEditingIdentite: PropTypes.func,
    setIsCollapsedIdentite: PropTypes.func,
    unsetIsCollapsedIdentite: PropTypes.func,
    updateCiviliteIdentite: PropTypes.func,
    updateNomIdentite: PropTypes.func,
    updateNomDeJeuneFilleIdentite: PropTypes.func,
    updatePrenomIdentite: PropTypes.func,
    updateDateNaissanceIdentite: PropTypes.func,
    updateNumssIdentite: PropTypes.func,
    updateDateDecesIdentite: PropTypes.func,
    updateMaritalStatusIdentite: PropTypes.func,
    // //////////////////
    // contact
    // /////////////////
    // get
    getGestBenefContactIfNeeded: PropTypes.func,
    // post
    postGestBenefContactIfNeeded: PropTypes.func,
    // reset
    resetGestBenefContact: PropTypes.func,
    // UI: contact
    setIsEditingContact: PropTypes.func,
    unsetIsEditingContact: PropTypes.func,
    setIsCollapsedContact: PropTypes.func,
    unsetIsCollapsedContact: PropTypes.func,
    updateTelephoneFixeContact: PropTypes.func,
    updateTelephoneMobileContact: PropTypes.func,
    updateEmailContact: PropTypes.func,
    updateNumAdressNumber: PropTypes.func,
    updateVoieAdressContact: PropTypes.func,
    updateComplementAdressContact: PropTypes.func,
    updateCodePostalContact: PropTypes.func,
    updateVilleContact: PropTypes.func,
    updatePaysContact: PropTypes.func,
    // //////////////////
    // dossiers
    // /////////////////
    // get
    getGestBenefAllDossiersIfNeeded: PropTypes.func,
    // post (insert)
    addGestBenefNewDossierIfNeeded: PropTypes.func,
    // post (update)
    updateGestBenefDossierIfNeeded: PropTypes.func,
    // reset:
    resetGestBenefDossier: PropTypes.func,
    // UI dossiers
    setIsCollapsedDossiers: PropTypes.func,
    unsetIsCollapsedDossiers: PropTypes.func,
    setIsSavingNewDossier: PropTypes.func,
    unsetIsSavingNewDossier: PropTypes.func,
    setIsEditingDossier: PropTypes.func,
    unsetIsEditingDossier: PropTypes.func,
    // modal create new dossier:
    showNewBenefDossierModal: PropTypes.func.isRequired, // returns promise with notification data
    hideNewBenefDossierModal: PropTypes.func.isRequired,
    // ///////////////////////
    // contacts Et activites:
    // ///////////////////////
    // get
    getGestBenefAllContactsEtActivitesIfNeeded: PropTypes.func.isRequired,
    getGestBenefThisDossierContactsEtActivitesIfNeeded: PropTypes.func.isRequired,
    // UI
    setIsCollapsedContactsEtActivites: PropTypes.func.isRequired,
    unsetIsCollapsedContactsEtActivites: PropTypes.func.isRequired
  })
};

// to remove when full redux store is done:
GestBeneficiaires.defaultProps = {
  isEditingIdentite: false,
  isSavingIdentite: false
};

export default GestBeneficiaires;
