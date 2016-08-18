import React, { PropTypes } from 'react';

const Txt = ({name, filePath, size}) => {
  return (
    <li>
      <span className="mailbox-attachment-icon">
        <i className="fa fa-file-text-o"></i>
      </span>
      <div className="mailbox-attachment-info">
        <a
          href={filePath}
          className="mailbox-attachment-name">
          <i className="fa fa-paperclip"></i>
          &nbsp;
          {name}
        </a>
        <span className="mailbox-attachment-size">
          {size}
          <a
            href={filePath}
            className="btn btn-default btn-xs pull-right">
            <i className="fa fa-trash-o"></i>
          </a>
        </span>
      </div>
    </li>
  );
};

Txt.propTypes = {
  name: PropTypes.string.isRequired,
  filePath: PropTypes.string,
  size: PropTypes.any.isRequired
};

Txt.defaultProps = {
  filePath: ''
};

export default Txt;
