import React, { PropTypes } from 'react';

const Pdf = ({name, filePath, size, onTrashClick}) => {
  return (
    <li>
      <span className="mailbox-attachment-icon">
        <i className="fa fa-file-pdf-o"></i>
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
          <button
            className="btn btn-default btn-xs pull-right"
            onClick={onTrashClick}>
            <i className="fa fa-trash-o"></i>
          </button>
        </span>
      </div>
    </li>
  );
};

Pdf.propTypes = {
  name: PropTypes.string.isRequired,
  filePath: PropTypes.string,
  size: PropTypes.any.isRequired,
  onTrashClick: PropTypes.func
};

Pdf.defaultProps = {
  filePath: ''
};

export default Pdf;
