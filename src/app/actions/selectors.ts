import { Task } from '../interfaces/Task';
import * as ActionTypes from '../constants/constants';
import { TaskAction } from '../reducers/tasks';
import { ADD_TASK, TOGGLE_DONE } from '../constants/constants';

export const delTask = (task: Task): TaskAction => ({
    type: ActionTypes.DEL_TASK,
    payload: { task }
});

export const addTask = (task: Task): TaskAction => ({
    type: ActionTypes.ADD_TASK,
    payload: { task }
});

export const changeTask = (task: Task): TaskAction => ({
    type: ActionTypes.CHANGE_TASK,
    payload: { task }
});

export const toggleDoneAction = (task: Task): TaskAction => ({
    type: ActionTypes.TOGGLE_DONE,
    payload: { task }
});

export const clearAllAction = (): TaskAction => ({
    type: ActionTypes.CLEAR_TASKS,
});