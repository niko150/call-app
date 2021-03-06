import React, {
  Component,
  PropTypes
}                     from 'react';
import shallowCompare from 'react-addons-shallow-compare';


class TextAreaInput extends Component {
  constructor(props) {
    super(props);
    this.state = { stateValue: '' };
    this.handlesOnChange = this.handlesOnChange.bind(this);

    this.timer = null;
  }

  componentWillReceiveProps(nextProps) {
    const { stateValue } = this.state;
    const { value } = nextProps;

    if ((value !== stateValue) && stateValue.length === 0) {
      this.setState({stateValue: value});
    }
  }

  shouldComponentUpdate(nextProps, nextState) {
    return shallowCompare(this, nextProps, nextState);
  }

  componentWillUnmount() {
    if (this.timer) {
      clearTimeout(this.timer);
      this.timer = null;
    }
  }

  render() {
    const {label, id, nbrows} = this.props;
    const { stateValue } = this.state;

    return (
      <div className="form-group">
        <label
          htmlFor={id}
          className="control-label">
          {label}
          </label>
        <div>
          <textarea
            className="form-control"
            rows={nbrows}
            id={id}
            // value={stateValue}
            defaultValue={stateValue}
            onInput={this.handlesOnChange}
          />
        </div>
      </div>
    );
  }

  handlesOnChange(event) {
    event.preventDefault();
    this.setState({stateValue: event.target.value});
    this.setTimerBeforeCallback(event.target.value);
  }

  setTimerBeforeCallback(value) {
    const { onChange, delay } = this.props;

    if (this.timer) {
      clearTimeout(this.timer);
      this.timer = null;
    }

    this.timer = setTimeout(
      () => onChange(value),
      delay
    );
  }
}

TextAreaInput.propTypes = {
  label:    PropTypes.string.isRequired,
  id:       PropTypes.string.isRequired,
  value:    PropTypes.string.isRequired,
  nbrows:   PropTypes.number,
  onChange: PropTypes.func.isRequired,
  delay:    PropTypes.number
};

TextAreaInput.defaultProps = {
  nbrows: 3,
  delay: 200
};

export default TextAreaInput;
