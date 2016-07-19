import React, {
  PropTypes,
  Component
}                             from 'react';
import { bindActionCreators } from 'redux';
import { connect }            from 'react-redux';
import * as actions           from '../../redux/actions';
import {
  Header,
  AsideLeft,
  AsideRight
}                             from '../../components';
import { Modals }             from '../../views';
import { appConfig }          from '../../config';

class App extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      appName: appConfig.APP_NAME,
      connectionStatus: appConfig.CONNECTION_STATUS,
      helloWord: appConfig.HELLO_WORD
    };
  }

  componentDidMount() {
    this.props.actions.fetchUserInfoDataIfNeeded();
  }

  render() {
    const { appName, connectionStatus, helloWord } = this.state;
    const { userInfos, userIsConnected } = this.props;
    const userFullName = `${userInfos.firstname} ${userInfos.lastname.toUpperCase()}`;
    return (
      <div>
        <Header
          appName={appName}
          userLogin={userInfos.login}
          userFirstname={userInfos.firstname}
          userLastname={userInfos.lastname}
          userPicture={userInfos.picture}
          showPicture={userInfos.showPicture}
          currentView={this.props.currentView}
          toggleSideMenu={(e)=>this.handlesMenuButtonClick(e)}
        />
        <div className="wrapper row-offcanvas row-offcanvas-left">
          <AsideLeft
            isAnimated={true}
            currentView={this.props.currentView}
            isCollapsed={this.props.sideMenuIsCollapsed}
            helloWord={helloWord}
            connectionStatus={connectionStatus}
            userIsConnected={userIsConnected}
            username={userFullName}
            userPicture={userInfos.picture}
            showPicture={userInfos.showPicture}
          />
          <AsideRight
            isAnimated={true}
            isExpanded={this.props.sideMenuIsCollapsed}>
            <div>
              { this.props.children }
            </div>
          </AsideRight>
        </div>
        {/* modals cannot be placed anywhere (avoid backdrop or modal placement issues) so all grouped in same component and outside .wrapper*/}
        <Modals />
      </div>
    );
  }

  handlesMenuButtonClick(event) {
    event.preventDefault();
    const {location} = this.props;
    this.props.actions.toggleSideMenu();

    // refresh stats (to get responsive sizes) if current view is Home
    if (location.pathname === '/') {
      this.props.actions.fetchFichesTraiteeDataIfNeeded();
      this.props.actions.fetchFichesParCanalDataIfNeeded();
      this.props.actions.fetchPrincipauxMotifsDataIfNeeded();
    }
  }
}

App.propTypes = {
  dispatch:   PropTypes.func,
  children:   PropTypes.node.isRequired,
  history:    PropTypes.object,
  location:   PropTypes.object,

  sideMenuIsCollapsed: PropTypes.bool,
  userInfos: PropTypes.shape({
    login: PropTypes.string,
    firstname: PropTypes.string,
    lastname: PropTypes.string,
    picture: PropTypes.string,
    showPicture: PropTypes.bool
  }),
  userIsConnected: PropTypes.bool,
  currentView: PropTypes.string,

  actions: PropTypes.shape({
    enterHome: PropTypes.func,
    leaveHome: PropTypes.func,
    fetchUserInfoDataIfNeeded: PropTypes.func,
    fetchFichesTraiteeDataIfNeeded: PropTypes.func,
    fetchFichesParCanalDataIfNeeded: PropTypes.func,
    fetchPrincipauxMotifsDataIfNeeded: PropTypes.func,
    openSideMenu:   PropTypes.func,
    closeSideMenu:  PropTypes.func,
    toggleSideMenu: PropTypes.func
  })
};

const mapStateToProps = (state) => {
  return {
    currentView:          state.views.currentView,
    sideMenuIsCollapsed:  state.sideMenu.isCollapsed,
    userInfos:            state.userInfos.data,
    userIsConnected:      state.userInfos.isConnected
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    actions : bindActionCreators(
      {...actions},
      dispatch)
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
