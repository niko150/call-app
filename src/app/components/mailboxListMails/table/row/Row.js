import React, { PropTypes } from 'react';
import { Link }              from 'react-router';
// import cx                   from 'classnames';

const subjectMaxLength = 45;


const Row  = ({id, notRead, mailboxType, receptionDate, subject, from, hasAttachments, consultLinkTo}) => {
  return (
    <tr
      id={id}
      style={{cursor: 'pointer'}}>
      <td style={{width: '40px'}}>
          {
            (mailboxType !== 'Reçus') || (mailboxType === 'Reçus' && !notRead) &&
            <span>&nbsp;</span>
          }
          {
            mailboxType === 'Reçus' && notRead &&
              <i
                className="fa fa-circle"
                aria-hidden="true"
                style={{color:'#E67E22'}}>
              </i>
          }
      </td>

      <td style={{width: '240px'}}>
        {from.email}
      </td>

      <td className="mailbox-subject">
        <Link to={consultLinkTo}>
          <b>
            {
              subject.length > subjectMaxLength &&
              `${subject.slice(0, subjectMaxLength)}...`
            }
            {
              subject.length <= subjectMaxLength &&
              subject
            }
          </b>
        </Link>
      </td>

      <td style={{width: '10px'}}>
        {
          hasAttachments &&
          <Link to={consultLinkTo}>
            <i className="fa fa-paperclip" aria-hidden="true"></i>
          </Link>
        }
        {
          !hasAttachments &&
          <span>&nbsp;</span>
        }
      </td>

      <td style={{width: '150px'}}>
        <Link to={consultLinkTo}>
          {receptionDate}
        </Link>
      </td>
    </tr>
  );
};

Row.propTypes = {
  consultLinkTo: PropTypes.string.isRequired,
  mailboxId: PropTypes.string.isRequired,
  mailboxType: PropTypes.oneOf(['Reçus', 'Envoyés']).isRequired,
  id: PropTypes.number.isRequired,
  notRead: PropTypes.bool.isRequired,
  receptionDate: PropTypes.string.isRequired,
  subject: PropTypes.string.isRequired,
  from: PropTypes.shape({
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired
  }).isRequired,
  to: PropTypes.shape({
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired
  }).isRequired,
  hasAttachments: PropTypes.bool.isRequired
};

export default Row;
