import * as actionTypes from '../constants/constants';

export interface Flow {
  flowName: string;
  stateName: string;
}

const initialState: Flow = {
    flowName: 'Tasks',
    stateName: 'TaskList'
};

export const flow = (state: Flow = initialState, action: any) => {
  switch (action.type) {
    case actionTypes.SET_FLOW:
      return {
        ...state,
        flowName: action.payload.flowName,
        stateName: action.payload.stateName
      };
    case actionTypes.SET_STATE:
        return {
            ...state,
            stateName: action.payload.stateName,
          };
    default:
      return state;
  }
};
