import * as React from 'react';
import * as Redux from 'redux';
import { connect } from 'react-redux';
import {
  formValueSelector,
  reduxForm
} from 'redux-form';

import TaskList from '../Views/TaskList';
import { Task } from '../interfaces/Task';
import { delTask, addTask, toggleDoneAction, clearAllAction, changeTask } from '../actions/selectors';
import { TheState } from '../reducers';
const form = 'tasksForm';
const selector = formValueSelector(form);

const Cardsform = reduxForm({
  form,
})(TaskList as any);

const mapStateToProps = (state: TheState) => {
  return {
    tasks: state.Tasks.taskList || [],
    filterValue: selector(state, 'filtrValue') || '',
    initialValues: {
      filtrValue: ''
    }
  };
};

const mapDispatchToProps = (dispatch: any) => ({
  deleteTask: (task: Task) => dispatch(delTask(task)),
  addTask: (task: Task) => dispatch(addTask(task)),
  changeTask: (task: Task) => dispatch(changeTask(task)),
  toggleDone: (task: Task) => dispatch(toggleDoneAction(task)),
  clearAll: () => dispatch(clearAllAction()),
});

let connectedApp = connect(mapStateToProps, mapDispatchToProps)(Cardsform as any);
export default connectedApp;