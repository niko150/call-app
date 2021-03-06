import {
  REQUEST_PRINCIPAUX_MOTIFS_DATA,
  RECEIVED_PRINCIPAUX_MOTIFS_DATA,
  ERROR_PRINCIPAUX_MOTIFS_DATA
}                                 from '../../actions/stats/principauxMotifs';
import { appConfig }              from '../../../config';


const initialState = {
  isFetching: false,
  labels:     [],
  datasets:   [],
  legend:     [...appConfig.stats.legendeInit],
  time:       ''
};

const principauxMotifs = (state = initialState, action) => {
  switch (action.type) {

  case REQUEST_PRINCIPAUX_MOTIFS_DATA:
    return {
      ...state,
      isFetching: action.isFetching,
      time:       action.time
    };

  case RECEIVED_PRINCIPAUX_MOTIFS_DATA:
    return {
      ...state,
      isFetching: action.isFetching,
      labels:     [...action.labels],
      datasets:   [...action.datasets],
      legend:     [...action.legend],
      time:       action.time
    };

  case ERROR_PRINCIPAUX_MOTIFS_DATA:
    return {
      ...state,
      isFetching: action.isFetching,
      time:       action.time
    };

  default:
    return state;
  }
};


export default principauxMotifs;
