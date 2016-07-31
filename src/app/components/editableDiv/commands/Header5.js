import React, {
  Component,
  PropTypes
}                       from 'react';
import shallowCompare   from 'react-addons-shallow-compare';

class Header5 extends Component {
  constructor(props) {
    super(props);

    this.state = {
      command: 'formatBlock',
      arg: 'H5'
    };

    this.handlesOnClick = this.handlesOnClick.bind(this);
  }

  shouldComponentUpdate(nextProps, nextState) {
    return shallowCompare(this, nextProps, nextState);
  }

  render() {
    const { commandName } = this.props;
    return (
      <a
        href="#"
        onClick={this.handlesOnClick}>
        {commandName}
      </a>
    );
  }

  handlesOnClick(event) {
    event.preventDefault();

    const { command, arg } = this.state;
    const { onClick } = this.props;

    onClick(command, arg);
  }
}

Header5.propTypes = {
  onClick: PropTypes.func.isRequired,
  commandName:PropTypes.string.isRequired
};

export default Header5;
