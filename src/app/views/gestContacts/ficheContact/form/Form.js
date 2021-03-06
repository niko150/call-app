import React, { PropTypes } from 'react';
import moment               from 'moment';
import { appConfig }        from '../../../../config';
import {
  StatutFicheDropDown,
  TextAreaInput,
  FormLabel,
  DateInput,
  NumsDossiersDropDown,
  TypeFicheContactNavPills,
  // StatutBenefFicheContactDropDown,
  FicheContactGroupeDestinataireDropDown,
  FicheContactMotifs
}                           from '../../../../components';
import {
  isValidDateOrReturnDefault
}                           from '../../../../services';
import ListAttachments      from './listAttachments/ListAttachments';


moment.locale('fr');
const formatDate = appConfig.formatDate.defaut;

const Form = ({
  benefId,
  isCollapsedFicheContact,
  onCollapseClick,
  lastFetchTimeFicheContact,
  isFetchingFicheContact,
  isSavingFicheContact,
  dateCreationFicheContact,
  onDateCreationFicheContactChanged,
  creeParFicheContact,
  dateReceptionFicheContact,
  onDateReceptionFicheContactChanged,
  statutIndexFicheContact,
  onStatutIndexFicheContactChanged,
  listStatutFicheContact,
  dateClotureFicheContact,
  // onDateClotureFicheContactChanged,
  clotureParFicheContact,
  // onClotureParFicheContactChanged,
  typeIndexFicheContact,
  onTypeIndexFicheContactChanged,
  listTypeFicheContact,
  canalIndexFicheContact,
  // onCanalIndexFicheContactChanged,
  listCanauxFicheContact,
  // onListCanauxFicheContactChanged,
  numDossierIndexSelected,
  onNumDossierIndexSelectedChanged,
  listNumDossierFicheContact,
  // onListNumDossierFicheContactChanged,
  domaineFicheContact,
  onDomaineFicheContactChanged,
  statutBenefFicheContact,
  // onStatutBenefFicheContactChanged,
  listStatutBenefFicheContact,
  attachmentsFicheContact,
  // onAttachmentsFicheContactChanged,
  commentaireFicheContact,
  onCommentaireFicheContactChanged,
  groupeDestinataireIsActive,
  // onGroupeDestinataireIsActiveChanged,
  groupeDestinataireIdSelected,
  onGroupeDestinataireIdSelectedChanged,
  listGroupeDestinataire,
  // onListGroupeDestinataireChanged,
  activites,
  isSavingFicheNewActivite,
  saveFicheContact,

  listMotifsNiveau2,
  listMotifsNiveau3,
  listMotifsNiveau4,

  addNewMotifs,
  saveMotifs,
  onRemoveMotifs,

  onChangeNiveau2,
  onChangeNiveau3,
  onChangeNiveau4
}) => {
  return (
    <form role="form">

      {/* 1st row */}
      <div className="row">
        {/* date de création */}
        <div className="col-md-4">
          <DateInput
            id="inputDateCreation"
            label={'Date de création'}
            value={isValidDateOrReturnDefault(dateCreationFicheContact, formatDate)}
            onChange={onDateCreationFicheContactChanged}
          />
        </div>
        {/* créé par */}
        <div className="col-md-4">
          <FormLabel
            id="inputCreePar"
            label={'créé par'}
            value={creeParFicheContact}
          />
        </div>
        {/* date reception */}
        <div className="col-md-4">
          <DateInput
            id="inputDateReception"
            label={'Date de réception'}
            value={isValidDateOrReturnDefault(dateReceptionFicheContact, formatDate)}
            onChange={onDateReceptionFicheContactChanged}
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
        <div className="col-md-4">
          {/* <DateInput
            id="inputDateCloture"
            label={'Date de clôture'}
            value={isValidDateOrReturnDefault(dateClotureFicheContact, formatDate)}
            onChange={onDateClotureFicheContactChanged}
          /> */}
          <FormLabel
            id="inputDateCloture"
            label={'Date de clôture'}
            value={isValidDateOrReturnDefault(dateClotureFicheContact, formatDate)}
          />
        </div>
        {/* cloture par */}
        <div className="col-md-4">
          {/* <TextInput
            id="inputCloturePar"
            label={'Clôturé par'}
            value={clotureParFicheContact}
            onChange={onClotureParFicheContactChanged}
          /> */}
          <FormLabel
            id="inputCloturePar"
            label={'Clôturé par'}
            value={clotureParFicheContact}
          />
        </div>
      </div>

      <div style={{height: '20px'}}></div>

      {/* 3rd row */}
      <div className="row">
        {/* type */}
        <div className="col-md-12">
          <TypeFicheContactNavPills
            selectedValue={typeIndexFicheContact}
            onChange={()=>console.log('TypeFicheContactNavPills onClick disabled')}
            listTypeFicheContact={listTypeFicheContact}
          />
        </div>
      </div>

      <div style={{height: '15px'}}></div>

      {/* 4th row */}
      <div className="row">
        {/* canal */}
        <div className="col-xs-3">
          <FormLabel
            id="labelCanal"
            label={'Canal'}
            value={listCanauxFicheContact[canalIndexFicheContact] ? listCanauxFicheContact[canalIndexFicheContact] : ' --- '}
          />
        </div>

        {/* nums dossier */}
        <div className="col-xs-3">
          <NumsDossiersDropDown
            id="numsDossiers"
            label={'N° Dossier'}
            benefId={benefId}
            value={numDossierIndexSelected}
            onChange={onNumDossierIndexSelectedChanged}
            listNumDossierFicheContact={listNumDossierFicheContact}
          />
        </div>

        {/* domaine */}
        <div className="col-xs-3">
          <FormLabel
            id="labelDomaineFicheContact"
            label={'Domaine'}
            value={domaineFicheContact}
          />
        </div>

        {/* statut */}
        <div className="col-xs-3">
          {/* <StatutBenefFicheContactDropDown
            id="statutBenefDropDownFicheContact"
            label={'Statut'}
            value={statutBenefFicheContact}
            onChange={onStatutBenefFicheContactChanged}
            listStatutBenefFicheContact={listStatutBenefFicheContact}
          /> */}
          <FormLabel
            id="labelStatut"
            label={'Statut'}
            value={listStatutBenefFicheContact[statutIndexFicheContact] ? listStatutBenefFicheContact[statutIndexFicheContact] : ' --- '}
          />
        </div>
      </div>

      <div style={{height: '20px'}}></div>

      <div className="row">
        <div className="col-xs-12">
          <FicheContactMotifs
            saveMotifs={saveMotifs}
            isSavingFicheNewActivite={isSavingFicheNewActivite}
            addNewMotifs={addNewMotifs}
            onRemoveMotifs={onRemoveMotifs}
            listMotifs={activites}
            labelNiveau2={'Niveau 2'}
            labelNiveau3={'Niveau 3'}
            labelNiveau4={'Niveau 4'}
            listMotifsNiveau2={listMotifsNiveau2}
            listMotifsNiveau3={listMotifsNiveau3}
            listMotifsNiveau4={listMotifsNiveau4}
            onChangeNiveau2={onChangeNiveau2}
            onChangeNiveau3={onChangeNiveau3}
            onChangeNiveau4={onChangeNiveau4}
          />
        </div>
      </div>

      <div style={{height: '20px'}}></div>

      {/* 5th row */}
      <div className="row">
        <div
          className="col-xs-12">
          <ListAttachments
            id={'ficheContactPJ'}
            label={attachmentsFicheContact.length > 0 ?  `Pièces jointes reçus (${attachmentsFicheContact.length})` : 'Pièces jointes reçus'}
            attachments={attachmentsFicheContact}
            onDelete={()=>console.log('on fiche contact delete attachments: disabled')}
          />
        </div>
      </div>
      {/* 6th row */}
      <div className="row">
        <div className="col-xs-12">
          <TextAreaInput
            id={'ficheContactCommentaireTextArea'}
            label={'Commentaires'}
            value={commentaireFicheContact}
            nbrows={3}
            onChange={onCommentaireFicheContactChanged}
          />
        </div>

      </div>
      {/* <div style={{height: '20px'}}></div> */}

      {/* 7th row */}
      <div className="row">
        <div className="col-xs-6 ">
          <div className="pull-right">
            <FicheContactGroupeDestinataireDropDown
              id={'groupdDestDropDownFicheContact'}
              label={''}
              value={groupeDestinataireIdSelected}
              onChange={onGroupeDestinataireIdSelectedChanged}
              groupDestinataires={listGroupeDestinataire}
            />
          </div>
        </div>
        <div className="col-xs-6">
          {/* buttons */}
          <a
            className="btn btn-primary btn-block mailBoxNewEmailButton_button"
            style={{width: '120px'}}
            onClick={saveFicheContact}>
            <i className="fa fa-floppy-o" aria-hidden="true"></i>&nbsp;
            Enregister
          </a>
        </div>
      </div>
      <div style={{height: '20px'}}></div>
    </form>
  );
};

Form.propTypes = {
  benefId: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  isCollapsedFicheContact: PropTypes.bool.isRequired,
  lastFetchTimeFicheContact: PropTypes.string.isRequired,
  isFetchingFicheContact: PropTypes.bool.isRequired,
  isSavingFicheContact: PropTypes.bool.isRequired,
  dateCreationFicheContact: PropTypes.string.isRequired,
  onDateCreationFicheContactChanged: PropTypes.func.isRequired,
  creeParFicheContact: PropTypes.string.isRequired,
  dateReceptionFicheContact: PropTypes.string.isRequired,
  onDateReceptionFicheContactChanged: PropTypes.func.isRequired,
  statutIndexFicheContact: PropTypes.number.isRequired,
  onStatutIndexFicheContactChanged: PropTypes.func.isRequired,
  listStatutFicheContact: PropTypes.arrayOf(PropTypes.string).isRequired,
  dateClotureFicheContact: PropTypes.string.isRequired,
  // onDateClotureFicheContactChanged: PropTypes.func.isRequired,
  clotureParFicheContact: PropTypes.string.isRequired,
  // onClotureParFicheContactChanged: PropTypes.func.isRequired,
  typeIndexFicheContact: PropTypes.number.isRequired, // index par default du type de fiche contact de listTypeFicheContact
  onTypeIndexFicheContactChanged: PropTypes.func.isRequired,
  listTypeFicheContact: PropTypes.arrayOf(PropTypes.string).isRequired, // tous (enum) les types de fiche de contact
  canalIndexFicheContact: PropTypes.number.isRequired,
  // onCanalIndexFicheContactChanged: PropTypes.func.isRequired,
  listCanauxFicheContact: PropTypes.arrayOf(PropTypes.string).isRequired,
  // onListCanauxFicheContactChanged: PropTypes.func.isRequired,
  numDossierIndexSelected: PropTypes.number.isRequired,
  onNumDossierIndexSelectedChanged: PropTypes.func.isRequired,
  listNumDossierFicheContact: PropTypes.arrayOf(PropTypes.string).isRequired,
  // onListNumDossierFicheContactChanged: PropTypes.func.isRequired,
  domaineFicheContact: PropTypes.string.isRequired,
  onDomaineFicheContactChanged: PropTypes.func.isRequired,
  statutBenefFicheContact: PropTypes.string.isRequired,
  // onStatutBenefFicheContactChanged: PropTypes.func.isRequired,

  listStatutBenefFicheContact: PropTypes.arrayOf(PropTypes.string).isRequired,

  attachmentsFicheContact: PropTypes.arrayOf(
    PropTypes.shape({
      type: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      filePath: PropTypes.string.isRequired,
      size: PropTypes.string.isRequired
    })
  ).isRequired,
  // onAttachmentsFicheContactChanged: PropTypes.func.isRequired,

  commentaireFicheContact: PropTypes.string.isRequired,
  onCommentaireFicheContactChanged: PropTypes.func.isRequired,

  groupeDestinataireIsActive: PropTypes.bool.isRequired,  // la list de choix doit être desactivée si statutIndexFicheContact <> En-cours
  // onGroupeDestinataireIsActiveChanged: PropTypes.func.isRequired,

  groupeDestinataireIdSelected: PropTypes.number.isRequired,
  onGroupeDestinataireIdSelectedChanged: PropTypes.func.isRequired,

  listGroupeDestinataire: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      libelle: PropTypes.string
    })
  ).isRequired, // to fill from server query
  // onListGroupeDestinataireChanged: PropTypes.func.isRequired,

  listMotifsNiveau2: PropTypes.array.isRequired,
  listMotifsNiveau3: PropTypes.array.isRequired,
  listMotifsNiveau4: PropTypes.array.isRequired,

  addNewMotifs: PropTypes.func.isRequired,
  saveMotifs: PropTypes.func.isRequired,
  onRemoveMotifs: PropTypes.func.isRequired,
  isSavingFicheNewActivite: PropTypes.bool.isRequired,

  onChangeNiveau2: PropTypes.func.isRequired,
  onChangeNiveau3: PropTypes.func.isRequired,
  onChangeNiveau4: PropTypes.func.isRequired,

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
  ),
  saveFicheContact: PropTypes.func.isRequired
};

export default Form;
