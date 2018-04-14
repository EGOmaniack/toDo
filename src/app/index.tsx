import * as Redux from 'redux';
import { connect } from 'react-redux';

import reducers from './reducers';
import * as styles from './styled';
import * as ActionTypes from './constants/constants';
import Application from './Controller';

const mapStateToProps = (state: any) => ({
    flow: state.flow
});

const mapDispatchToProps = (dispatch: Redux.Dispatch<any>, getState: any) => ({
});

let connectedApplicatin = connect(mapStateToProps, mapDispatchToProps)(Application);
(connectedApplicatin as any).reducer = reducers;

export default connectedApplicatin;