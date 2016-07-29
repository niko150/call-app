import React, { PropTypes } from 'react';
import Row from './row/Row';

const Table  = ({mails, mailboxType, mailboxId, consultLinkTo}) => {
  return (
    <table className="table table-hover">
      <tbody>
        {
          mails.map(
            ({id, notRead, receptionDate, subject, from, to}, mailIdx) => {
              return (
                <Row
                  key={mailIdx}
                  id={id}
                  consultLinkTo={`${consultLinkTo}/${mailboxId}/${id}`}
                  receptionDate={receptionDate}
                  notRead={notRead}
                  mailboxId={mailboxId}
                  mailboxType={mailboxType}
                  subject={subject}
                  from={from}
                  to={to}
                />
              );
            }
          )
        }
      </tbody>
    </table>
  );
};

Table.propTypes = {
  mailboxId: PropTypes.string.isRequired,
  mailboxType: PropTypes.oneOf(['Reçus', 'Envoyés']).isRequired,
  mails: PropTypes.arrayOf(
    PropTypes.shape({
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
      body: PropTypes.string.isRequired,
      selected: PropTypes.bool.isRequired
    })
  ),
  consultLinkTo: PropTypes.string.isRequired
};

export default Table;