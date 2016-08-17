import React, { PropTypes, Component }  from 'react';
import moment                           from 'moment';
// import { appConfig }                    from '../../../config';
import cx                               from 'classnames';
import {
  MailboxWriteMail
}                                       from '../../../components';

moment.locale('fr');
// const formatDate = appConfig.formatDate.defaut;

class MailWriteNew extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      animated: true
    };

    this.handlesOnDestinatairesChange = this.handlesOnDestinatairesChange.bind(this);
    this.handlesOnSubjectChanged = this.handlesOnSubjectChanged.bind(this);
    this.handlesOnContentChanged = this.handlesOnContentChanged.bind(this);
    this.handlesOnCancel = this.handlesOnCancel.bind(this);
  }

  componentDidMount() {
    const  { actions, params: { mailboxId } } =  this.props;
    actions.enterMailboxWriteNew(`mailbox #${mailboxId}`);
  }

  componentWillUnmount() {
    const  { actions, params: { mailboxId } } =  this.props;
    actions.leaveMailboxWriteNew(`mailbox #${mailboxId}`);
  }

  render() {
    const { animated } = this.state;
    const { subject, to, body, attachments } = this.props;

    return(
      <div
        className={cx({
          'animated': animated,
          'fadeIn': animated
        })}>
        <MailboxWriteMail
          destinataires={to}
          onDestinatairesChange={this.handlesOnDestinatairesChange}
          subject={subject}
          onSubjectChanged={this.handlesOnSubjectChanged}
          content={body}
          onContentChanged={this.handlesOnContentChanged}
          attachments={attachments}
          onAttachmentsChanged={()=>console.log('onAttachmentsChanged event')}
          onCancel={this.handlesOnCancel}
          onSend={()=>console.log('onSend should post new mail state content then reset it')}
        />
      </div>
    );
  }

  handlesOnDestinatairesChange(destinataires) {
    const { params: { mailboxId } } = this.props;
    const { actions: { newMailDestinatairesChange } } = this.props;
    newMailDestinatairesChange(mailboxId, destinataires);
  }

  handlesOnSubjectChanged(subject) {
    const { params: { mailboxId } } = this.props;
    const { actions: { newMailSubjectChange } } = this.props;
    newMailSubjectChange(mailboxId, subject);
  }

  handlesOnContentChanged(emailBody) {
    const { params: { mailboxId } } = this.props;
    const { actions: { newMailBodyChange } } = this.props;
    newMailBodyChange(mailboxId, emailBody);
  }

  handlesOnCancel() {
    const { router } = this.context;
    const { params: { mailboxId } } = this.props;
    const { actions: {newMailCancel} } = this.props;
    newMailCancel(mailboxId);
    // react-router v2.0.0+ && < v2.4.0+
    router.goBack();
  }
}

MailWriteNew.propTypes = {
  // react router
  params: PropTypes.object,
  location: PropTypes.object,
  history: PropTypes.object,
  // mail content:
  subject: PropTypes.string.isRequired,
  from: PropTypes.string.isRequired,
  to: PropTypes.array.isRequired,
  body: PropTypes.string.isRequired,
  hasAttachments: PropTypes.bool.isRequired,
  attachments: PropTypes.array.isRequired,
  // actions:
  actions: PropTypes.shape({
    enterMailboxWriteNew: PropTypes.func,
    leaveMailboxWriteNew: PropTypes.func,
    // write mail actions:
    newMailDestinatairesChange: PropTypes.func,
    newMailSubjectChange: PropTypes.func,
    newMailBodyChange: PropTypes.func,
    newMailCancel: PropTypes.func
  })
};

MailWriteNew.contextTypes = {
  router: React.PropTypes.object.isRequired
};

export default MailWriteNew;
