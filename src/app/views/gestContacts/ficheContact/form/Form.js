import React, { PropTypes } from 'react';
import moment               from 'moment';
import { appConfig }        from '../../../../config';
import {
  StatutFicheDropDown,
  TextInput,
  DateInput
}                           from '../../../../components';
import {
  isValidDateOrReturnDefault
}                           from '../../../../services';

moment.locale('fr');
const formatDate = appConfig.formatDate.defaut;

const Form = ({
  isCollapsedFicheContact,
  onCollapseClick,
  lastFetchTimeFicheContact,
  isFetchingFicheContact,
  isSavingFicheContact,
  dateCreationFicheContact,
  onDateCreationFicheContactChanged,
  creeParFicheContact,
  onCreeParFicheContactChanged,
  dateReceptionFicheContact,
  onDateReceptionFicheContactChanged,
  statutIndexFicheContact,
  onStatutIndexFicheContactChanged,
  listStatutFicheContact,
  onListStatutFicheContactChanged,
  dateClotureFicheContact,
  onDateClotureFicheContactChanged,
  clotureParFicheContact,
  onClotureParFicheContactChanged,
  typeIndexFicheContact,
  onTypeIndexFicheContactChanged,
  listTypeFicheContact,
  onListTypeFicheContactChanged,
  canalIndexFicheContact,
  onCanalIndexFicheContactChanged,
  listCanauxFicheContact,
  onListCanauxFicheContactChanged,
  numDossierIndexSelected,
  onNumDossierIndexSelectedChanged,
  listNumDossierFicheContact,
  onListNumDossierFicheContactChanged,
  domaineFicheContact,
  onDomaineFicheContactChanged,
  statutBenefFicheContact,
  onStatutBenefFicheContactChanged,
  attachmentsFicheContact,
  onAttachmentsFicheContactChanged,
  commentaireFicheContact,
  onCommentaireFicheContactChanged,
  groupeDestinataireIsActive,
  onGroupeDestinataireIsActiveChanged,
  groupeDestinataireIdSelected,
  onGroupeDestinataireIdSelectedChanged,
  listGroupeDestinataire,
  onListGroupeDestinataireChanged,
  activites
}) => {
  return (
    <form role="form">

      {/* 1st row */}
      <div className="row">
        {/* date de création */}
        <div className="col-md-2">
          <DateInput
            id="inputDateCreation"
            label={'Date de création'}
            value={isValidDateOrReturnDefault(dateCreationFicheContact, formatDate)}
            onChange={onDateCreationFicheContactChanged}
          />
        </div>
        {/* créé par */}
        <div className="col-md-2">
          <TextInput
            id="inputCreePar"
            label={'Par'}
            value={creeParFicheContact}
            onChange={onCreeParFicheContactChanged}
          />
        </div>
        {/* traité par */}
        <div className="col-md-2 col-md-offset-6">
          <TextInput
            id="inputCreePar"
            label={'Par'}
            value={creeParFicheContact}
            onChange={onCreeParFicheContactChanged}
          />
        </div>
      </div>

      {/* 2nd row */}
      <div className="row">
        {/* statut */}
        <div className="col-md-4">
          <StatutFicheDropDown
            id="statutFiche"
            label={'Statut'}
            value={statutIndexFicheContact}
            onChange={onStatutIndexFicheContactChanged}
            listeStatutFiche={listStatutFicheContact}
          />
        </div>

        {/* date cloture */}
        <div className="col-md-2 col-md-offset-4">
          <DateInput
            id="inputDateCloture"
            label={'Date de clôture'}
            value={isValidDateOrReturnDefault(dateClotureFicheContact, formatDate)}
            onChange={onDateClotureFicheContactChanged}
          />
        </div>
        <div className="col-md-2">
          <TextInput
            id="inputCloturePar"
            label={'Par'}
            value={clotureParFicheContact}
            onChange={onClotureParFicheContactChanged}
          />
        </div>
      </div>

      {/* 3rd row */}
      <div className="row">
        <div className="col-md-6">
        </div>

        {/* statut marital */}
        <div className="col-md-6">
        </div>

      </div>

    </form>
  );
};

Form.propTypes = {
  isCollapsedFicheContact: PropTypes.bool.isRequired,
  lastFetchTimeFicheContact: PropTypes.string.isRequired,
  isFetchingFicheContact: PropTypes.bool.isRequired,
  isSavingFicheContact: PropTypes.bool.isRequired,

  dateCreationFicheContact: PropTypes.string.isRequired,
  onDateCreationFicheContactChanged: PropTypes.func.isRequired,

  creeParFicheContact: PropTypes.string.isRequired,
  onCreeParFicheContactChanged: PropTypes.func.isRequired,

  dateReceptionFicheContact: PropTypes.string.isRequired,
  onDateReceptionFicheContactChanged: PropTypes.func.isRequired,

  statutIndexFicheContact: PropTypes.number.isRequired,
  onStatutIndexFicheContactChanged: PropTypes.func.isRequired,

  listStatutFicheContact: PropTypes.arrayOf(PropTypes.string).isRequired,
  onListStatutFicheContactChanged: PropTypes.func.isRequired,

  dateClotureFicheContact: PropTypes.string.isRequired,
  onDateClotureFicheContactChanged: PropTypes.func.isRequired,

  clotureParFicheContact: PropTypes.string.isRequired,
  onClotureParFicheContactChanged: PropTypes.func.isRequired,

  typeIndexFicheContact: PropTypes.number.isRequired, // index par default du type de fiche contact de listTypeFicheContact
  onTypeIndexFicheContactChanged: PropTypes.func.isRequired,

  listTypeFicheContact: PropTypes.arrayOf(PropTypes.string).isRequired, // tous (enum) les types de fiche de contact
  onListTypeFicheContactChanged: PropTypes.func.isRequired,

  canalIndexFicheContact: PropTypes.number.isRequired,
  onCanalIndexFicheContactChanged: PropTypes.func.isRequired,

  listCanauxFicheContact: PropTypes.arrayOf(PropTypes.string).isRequired,
  onListCanauxFicheContactChanged: PropTypes.func.isRequired,

  numDossierIndexSelected: PropTypes.number.isRequired,
  onNumDossierIndexSelectedChanged: PropTypes.func.isRequired,

  listNumDossierFicheContact: PropTypes.arrayOf(PropTypes.string).isRequired,
  onListNumDossierFicheContactChanged: PropTypes.func.isRequired,

  domaineFicheContact: PropTypes.string.isRequired,
  onDomaineFicheContactChanged: PropTypes.func.isRequired,

  statutBenefFicheContact: PropTypes.string.isRequired,
  onStatutBenefFicheContactChanged: PropTypes.func.isRequired,

  attachmentsFicheContact: PropTypes.arrayOf(
    PropTypes.shape({
      type: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      filePath: PropTypes.string.isRequired,
      size: PropTypes.string.isRequired
    })
  ).isRequired,
  onAttachmentsFicheContactChanged: PropTypes.func.isRequired,

  commentaireFicheContact: PropTypes.string.isRequired,
  onCommentaireFicheContactChanged: PropTypes.func.isRequired,

  groupeDestinataireIsActive: PropTypes.bool.isRequired,  // la list de choix doit être desactivée si statutIndexFicheContact <> En-cours
  onGroupeDestinataireIsActiveChanged: PropTypes.func.isRequired,

  groupeDestinataireIdSelected: PropTypes.number.isRequired,
  onGroupeDestinataireIdSelectedChanged: PropTypes.func.isRequired,

  listGroupeDestinataire: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      libelle: PropTypes.string
    })
  ).isRequired, // to fill from server query
  onListGroupeDestinataireChanged: PropTypes.func.isRequired,

  activites: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      contactId: PropTypes.number.isRequired,
      libelleActiviteNiv2: PropTypes.string.isRequired,
      libelleActiviteNiv3: PropTypes.string.isRequired,
      libelleActiviteNiv4: PropTypes.string.isRequired,
      dateCreation: PropTypes.string,
      creePar: PropTypes.string,
      traiteePar: PropTypes.string,
      statut: PropTypes.arrayOf(
        PropTypes.shape({
          id: PropTypes.number.isRequired,
          libelle: PropTypes.string.isRequired
        })
      ),
      dateCloture: PropTypes.string,
      motif: PropTypes.string,
      canal: PropTypes.arrayOf(
        PropTypes.shape({
          id: PropTypes.number.isRequired,
          libelle: PropTypes.string.isRequired
        })
      ),
      piecesJointesEmises: PropTypes.arrayOf(
        PropTypes.shape({
          nomFichier: PropTypes.string,
          extensionFichier: PropTypes.string,
          lienFichier: PropTypes.string
        })
      ),
      commentaires: PropTypes.arrayOf(PropTypes.string)
    })
  )
};

export default Form;