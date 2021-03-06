import React, { PropTypes } from 'react';
import {
  EditValidIcons
}                           from '../../../components';
import Form                 from './form/Form';
import SavingIndicator      from '../savingIndicator/SavingIndicator';
import Collapse             from 'react-collapse';


const Identite = ({
  onSaveFormIdentite,
  isCollapsedIdentite,
  onCollapseClick,
  isSavingIdentite,
  isEditingIdentite,
  onEditClick,
  onCancelEditClick,
  civilite,
  onCiviliteChange,
  nom,
  onNomChanged,
  nomJeuneFille,
  onNomJeuneFilleChanged,
  prenom,
  onPrenomChanged,
  dateNaissance,
  onDateNaissanceChanged,
  numss,
  onNumssChanged,
  dateDeces,
  onDateDecesChanged,
  maritalStatus,
  onMaritalStatusChanged
}) => {
  return (
      <div>
        <div className="page-header">
          <i
            className="fa fa-user"
            aria-hidden="true"
            style={{color: '#444444'}}>
          </i>
          &nbsp;
          Identité
          {
            !isSavingIdentite &&
            <EditValidIcons
              isEditing={isEditingIdentite}
              setEdit={onEditClick}
              cancelEditing={onCancelEditClick}
              saveEdit={onSaveFormIdentite}
              isCollapsed={isCollapsedIdentite}
              toggleCollapse={onCollapseClick}
            />
          }
        </div>
        <Collapse
          isOpened={!isCollapsedIdentite}
          keepCollapsedContent={false}>
          <div style={{ height: '230px' }}>
          {
            isSavingIdentite
            ?
              <SavingIndicator />
            :
              <Form
                isEditingIdentite={isEditingIdentite}
                civilite={civilite}
                onCiviliteChange={onCiviliteChange}
                nom={nom}
                onNomChanged={onNomChanged}
                nomJeuneFille={nomJeuneFille}
                onNomJeuneFilleChanged={onNomJeuneFilleChanged}
                prenom={prenom}
                onPrenomChanged={onPrenomChanged}
                dateNaissance={dateNaissance}
                onDateNaissanceChanged={onDateNaissanceChanged}
                numss={numss}
                onNumssChanged={onNumssChanged}
                dateDeces={dateDeces}
                onDateDecesChanged={onDateDecesChanged}
                maritalStatus={maritalStatus}
                onMaritalStatusChanged={onMaritalStatusChanged}
              />
          }
          </div>
        </Collapse>
      </div>

  );
};

Identite.propTypes = {
  onSaveFormIdentite: PropTypes.func.isRequired,
  isSavingIdentite: PropTypes.bool.isRequired,

  isEditingIdentite: PropTypes.bool.isRequired,
  onEditClick: PropTypes.func.isRequired,
  onCancelEditClick: PropTypes.func.isRequired,

  isCollapsedIdentite: PropTypes.bool.isRequired,
  onCollapseClick: PropTypes.func.isRequired,

  civilite: PropTypes.string.isRequired,
  onCiviliteChange: PropTypes.func.isRequired,

  nom: PropTypes.string.isRequired,
  onNomChanged: PropTypes.func.isRequired,

  nomJeuneFille: PropTypes.string.isRequired,
  onNomJeuneFilleChanged: PropTypes.func.isRequired,

  prenom: PropTypes.string.isRequired,
  onPrenomChanged: PropTypes.func.isRequired,

  dateNaissance: PropTypes.string.isRequired,
  onDateNaissanceChanged: PropTypes.func.isRequired,

  numss: PropTypes.string.isRequired,
  onNumssChanged: PropTypes.func.isRequired,

  dateDeces: PropTypes.string.isRequired,
  onDateDecesChanged: PropTypes.func.isRequired,

  maritalStatus: PropTypes.string.isRequired,
  onMaritalStatusChanged: PropTypes.func.isRequired
};


export default Identite;
