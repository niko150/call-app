import React, {
  Component,
  PropTypes
}                     from 'react';
import shallowCompare from 'react-addons-shallow-compare';
import {
  DropdownButton,
  MenuItem
}                     from 'react-bootstrap';


class StatutFicheDropDown extends Component {
  constructor(props) {
    super(props);

    this.handlesOnChange = this.handlesOnChange.bind(this);
  }

  shouldComponentUpdate(nextProps, nextState) {
    return shallowCompare(this, nextProps, nextState);
  }

  render() {
    const { label, id, value, listeStatutFiche } = this.props;
    return (
      <div className="form-group">
        <label
          className="control-label"
          htmlFor={id}>
          {label}
        </label>
        <div>
          <DropdownButton
            id={id}
            onSelect={this.handlesOnChange}
            bsSize="sm"
            block
            bsStyle={'block'}
            title={
              listeStatutFiche[value] ? listeStatutFiche[value] : listeStatutFiche[0]
            }>
            {
              listeStatutFiche.map(
                (statut, idx) => {
                  return (
                    <MenuItem
                      key={idx}
                      eventKey={idx}>
                      {statut}
                    </MenuItem>
                  );
                }
              )
            }
          </DropdownButton>
        </div>
      </div>
    );
  }

  handlesOnChange(event, key) {
    event.preventDefault();
    const { onChange, selectedActiviteId } = this.props;
    onChange(key, selectedActiviteId);
  }

  valueIsStatutFiche(value) {
    const { listeStatutFiche } = this.props;
    if (value) {
      const index = listeStatutFiche.findIndex(valeur => value === valeur);
      return index > -1 ? true : false;
    }
    return false;
  }
}

StatutFicheDropDown.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ]).isRequired,
  onChange: PropTypes.func.isRequired,
  // list statut ref
  listeStatutFiche: PropTypes.arrayOf(PropTypes.string).isRequired,
  selectedActiviteId: PropTypes.oneOfType([PropTypes.number, PropTypes.string])
};

export default StatutFicheDropDown;
