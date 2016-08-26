import React, {
  Component,
  PropTypes
}                         from 'react';
import shallowCompare     from 'react-addons-shallow-compare';
import {
  Modal
}                         from 'react-bootstrap';
import { appConfig }      from '../../../config';
import ModalHeader        from './modalHeader/ModalHeader';
import ModalFooter        from './modalFooter/ModalFooter';
import SearchInput        from './searchInput/SearchInput';
import SearchButton       from './searchButton/SearchButton';
import SearchCommand      from './searchCommand/SearchCommand';
import Collapse           from 'react-collapse';

const searchInputBenefFilters = [...appConfig.searchBenefInputFilters];
const seachBenefDefaultFilter = searchInputBenefFilters[0].id;

const SearchCriteria = [...appConfig.searchCriterias];


class RechercheBenefModal extends Component {
  constructor(props) {
    super(props);

    this.state = {
      // Identifiant
      identValue: '',
      identSelectedFilterId: -1,
      identSelectedFilter: '',
      identActive: false,
      // Nom
      nomValue: '',
      NomSelectedFilterId: -1,
      NomSelectedFilter: '',
      NomActive: true,
      // Prenom
      prenomValue: '',
      PrenomSelectedFilterId: -1,
      PrenomSelectedFilter: '',
      PrenomActive: false,
      // NumSS
      numssValue: '',
      numssSelectedFilterId: -1,
      numssSelectedFilter: '',
      NumSSActive: false,

      criterias: [...SearchCriteria]
    };

    this.handlesOnClose = this.handlesOnClose.bind(this);
    this.handlesOnSearch = this.handlesOnSearch.bind(this);
    this.handlesOnIdentFilterChange = this.handlesOnIdentFilterChange.bind(this);
    this.handlesOnNomFilterChange = this.handlesOnNomFilterChange.bind(this);
    this.handlesOnPrenomFilterChange = this.handlesOnPrenomFilterChange.bind(this);
    this.handlesOnNumssFilterChange = this.handlesOnNumssFilterChange.bind(this);
    this.handlesOnCriteriaClick = this.handlesOnCriteriaClick.bind(this);
    this.handlesIndentValueChanged = this.handlesIndentValueChanged.bind(this);
    this.handlesNomValueChanged = this.handlesNomValueChanged.bind(this);
    this.handlesPrenomValueChanged = this.handlesPrenomValueChanged.bind(this);
    this.handlesNumssValueChanged = this.handlesNumssValueChanged.bind(this);
  }

  componentDidMount() {
    this.initFilters();
  }

  shouldComponentUpdate(nextProps, nextState) {
    return shallowCompare(this, nextProps, nextState);
  }

  render() {
    const { showModal, title  } = this.props;
    const { identSelectedFilter, NomSelectedFilter, PrenomSelectedFilter, numssSelectedFilter } = this.state;
    const { criterias } = this.state;
    const { identActive, NomActive, PrenomActive, NumSSActive } = this.state;
    const { identValue, nomValue, prenomValue, numssValue } = this.state;

    return (
      <div>
        <Modal
          {...this.props}
          show={showModal}
          onHide={this.handlesOnClose}
          bsSize="lg"
          aria-labelledby="contained-modal-title-md">
          <ModalHeader
            title={title}
          />
          <Modal.Body>

            <SearchCommand
              criterias={criterias}
              onCriteriaClick={this.handlesOnCriteriaClick}
            />

            <div style={{height: '20px'}}></div>
            <hr />

            <form role="form">
              <Collapse
                isOpened={identActive}
                keepCollapsedContent={true}>
                <SearchInput
                 // label:
                 showLabel={true}
                 labelText={'Identifiant'}
                 // value
                 value={identValue}
                 onValueChanged={this.handlesIndentValueChanged}
                 // help block text:
                 showHelpBlock={true}
                 helpBlockText={'Identifiant de dossier et non celui du bénéficiaire'}
                 // filter
                 listFilters={searchInputBenefFilters}
                 selectedfilter={identSelectedFilter}
                 onfilterChange={this.handlesOnIdentFilterChange}
                />
               </Collapse>

               <Collapse
                 isOpened={NomActive}
                 keepCollapsedContent={true}>
                 <SearchInput
                   // label:
                   showLabel={true}
                   labelText={'Nom'}
                   // value
                   value={nomValue}
                   onValueChanged={this.handlesNomValueChanged}
                   // help block text:
                   showHelpBlock={true}
                   helpBlockText={'Le nom du bénéficiaire'}
                   // filter
                   listFilters={searchInputBenefFilters}
                   selectedfilter={NomSelectedFilter}
                   onfilterChange={this.handlesOnNomFilterChange}
                 />
              </Collapse>

              <Collapse
                isOpened={PrenomActive}
                keepCollapsedContent={true}>
                <SearchInput
                  // label:
                  showLabel={true}
                  labelText={'Prénom'}
                  // value
                  value={prenomValue}
                  onValueChanged={this.handlesPrenomValueChanged}
                  // help block text:
                  showHelpBlock={true}
                  helpBlockText={'Le prénom du bénéficiaire'}
                  // filter
                  listFilters={searchInputBenefFilters}
                  selectedfilter={PrenomSelectedFilter}
                  onfilterChange={this.handlesOnPrenomFilterChange}
                />
              </Collapse>

             <Collapse
               isOpened={NumSSActive}
               keepCollapsedContent={true}>
               <SearchInput
                 // label:
                 showLabel={true}
                 labelText={'NumSS'}
                 // value
                 value={numssValue}
                 onValueChanged={this.handlesNumssValueChanged}
                 // help block text:
                 showHelpBlock={true}
                 helpBlockText={'A renseigner sur 13 ou 15 caractères'}
                 // filter
                 listFilters={searchInputBenefFilters}
                 selectedfilter={numssSelectedFilter}
                 onfilterChange={this.handlesOnNumssFilterChange}
               />
             </Collapse>

             <div style={{height: '40px'}}></div>

             <SearchButton
              buttonText={'Rechercher'}
              onClick={this.handlesOnSearch}
             />

            </form>
          </Modal.Body>

          <ModalFooter
            onCloseClick={this.handlesOnClose}
          />

        </Modal>
      </div>
    );
  }

  initInputs() {
    this.setState({
      identValue: '',
      nomValue: '',
      prenomValue: '',
      numssValue: ''
    });
  }

  initFilters() {
    this.setState({
      // Identifiant
      identSelectedFilterId: seachBenefDefaultFilter,
      identSelectedFilter: this.getfilterLibelle(seachBenefDefaultFilter),
      // Nom
      NomSelectedFilterId: seachBenefDefaultFilter,
      NomSelectedFilter: this.getfilterLibelle(seachBenefDefaultFilter),
      // Prenom
      PrenomSelectedFilterId: seachBenefDefaultFilter,
      PrenomSelectedFilter: this.getfilterLibelle(seachBenefDefaultFilter),
      // NumSS
      numssSelectedFilterId: seachBenefDefaultFilter,
      numssSelectedFilter: this.getfilterLibelle(seachBenefDefaultFilter)
    });
  }

  handlesIndentValueChanged(value) {
    this.setState({identValue: value});
  }

  handlesNomValueChanged(value) {
    this.setState({nomValue: value});
  }

  handlesPrenomValueChanged(value) {
    this.setState({prenomValue: value});
  }

  handlesNumssValueChanged(value) {
    this.setState({numssValue: value});
  }

  getfilterLibelle(id) {
    const filt = searchInputBenefFilters.find(
      filter => filter.id === id
    );
    return filt.libelle ?  filt.libelle : '---';
  }

  handlesOnIdentFilterChange(filterId, filterLibelle) {
    const { identSelectedFilterId } = this.state;
    if (filterId !== identSelectedFilterId) {
      this.setState({
        identSelectedFilterId: filterId,
        identSelectedFilter: filterLibelle
      });
    }
  }

  handlesOnNomFilterChange(filterId, filterLibelle) {
    const { NomSelectedFilterId } = this.state;
    if (filterId !== NomSelectedFilterId) {
      this.setState({
        NomSelectedFilterId: filterId,
        NomSelectedFilter: filterLibelle
      });
    }
  }

  handlesOnPrenomFilterChange(filterId, filterLibelle) {
    const { PrenomSelectedFilterId } = this.state;
    if (filterId !== PrenomSelectedFilterId) {
      this.setState({
        PrenomSelectedFilterId: filterId,
        PrenomSelectedFilter: filterLibelle
      });
    }
  }

  handlesOnNumssFilterChange(filterId, filterLibelle) {
    const { numssSelectedFilterId } = this.state;
    if (filterId !== numssSelectedFilterId) {
      this.setState({
        numssSelectedFilterId: filterId,
        numssSelectedFilter: filterLibelle
      });
    }
  }

  handlesOnCriteriaClick(critere) {
    const { criterias } = this.state;

    switch (critere) {

    case 'Identifiant':
      const { identActive } = this.state;

      const identIndex = criterias.findIndex(criter => criter.label === 'Identifiant');
      if (isFound(identIndex)) {
        const updatedCiterias = [...criterias];
        const isActive = updatedCiterias[identIndex].active;

        updatedCiterias[identIndex].active = toggleThisBool(isActive);
        this.setState({
          identActive: !identActive,
          criterias: [...updatedCiterias],
          identValue: '' // reset input value
        });
      }
      break;

    case 'Nom':
      const { NomActive } = this.state;

      const nomIndex = criterias.findIndex(criter => criter.label === 'Nom');
      if (isFound(nomIndex)) {
        const updatedCiterias = [...criterias];
        const isActive = updatedCiterias[nomIndex].active;

        updatedCiterias[nomIndex].active = toggleThisBool(isActive);
        this.setState({
          NomActive: !NomActive,
          criterias: [...updatedCiterias],
          nomValue: '' // reset input value
        });
      }
      break;

    case 'Prénom':
      const { PrenomActive } = this.state;

      const prenomIndex = criterias.findIndex(criter => criter.label === 'Prénom');
      if (isFound(prenomIndex)) {
        const updatedCiterias = [...criterias];
        const isActive = updatedCiterias[prenomIndex].active;

        updatedCiterias[prenomIndex].active = toggleThisBool(isActive);
        this.setState({
          PrenomActive: !PrenomActive,
          criterias: [...updatedCiterias],
          prenomValue: '' // reset input value
        });
      }
      break;

    case 'Numéro sécu.':
      const { NumSSActive } = this.state;

      const numssIndex = criterias.findIndex(criter => criter.label === 'Numéro sécu.');
      if (isFound(numssIndex)) {
        const updatedCiterias = [...criterias];
        const isActive = updatedCiterias[numssIndex].active;

        updatedCiterias[numssIndex].active = toggleThisBool(isActive);
        this.setState({
          NumSSActive: !NumSSActive,
          criterias: [...updatedCiterias],
          numssValue: '' // reset input value
        });
      }
      break;

    default:
      return;
    }

    function isFound(index) {
      return index > -1 ? true : false;
    }

    function toggleThisBool(val) {
      return !val;
    }
  }

  handlesOnSearch(event) {
    event.preventDefault();
    // get all active inputs only


    console.log('on search click: TODO');
  }

  handlesOnClose() {
    const { onClose } = this.props;
    // all input filters reset
    this.initFilters();
    // all value reset
    this.initInputs();
    onClose();
  }
}

RechercheBenefModal.propTypes = {
  showModal: PropTypes.bool.isRequired,
  title: PropTypes.string,
  onClose: PropTypes.func,

  searchFetching: PropTypes.bool.isRequired,
  searchPayload:  PropTypes.object.isRequired,
  searchResult:   PropTypes.arrayOf(PropTypes.object).isRequired,
  searchError:    PropTypes.object,
  searchTime:     PropTypes.string.isRequired,

  actions: PropTypes.shape({
    hideRechercheBenefModal: PropTypes.func.isRequired,
    postSearchIfNeeded: PropTypes.func.isRequired
  }).isRequired
};

RechercheBenefModal.defaultProps = {
  title: 'Recherche de bénéficiaires'
};

export default RechercheBenefModal;
