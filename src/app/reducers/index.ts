import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import { flow, Flow } from './flow';
import { Tasks, TasksState } from './tasks';

export interface TheState {
  form: any;
  flow: Flow;
  Tasks: TasksState;
}

export default combineReducers({
  form: formReducer,
  flow,
  Tasks
});