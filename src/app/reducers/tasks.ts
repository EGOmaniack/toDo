import * as actionTypes from '../constants/constants';
import { Task } from '../interfaces/Task';
import { saveTaskList, getTaskList } from '../helpers/loclStorageActions';

export interface TaskAction {
    type: string;
    payload?: {task: Task};
}

export interface TasksState {
    taskList: Array<Task>;
}

const initialState: TasksState = {
    taskList: getTaskList()
};

export const Tasks = (state: TasksState = initialState, action: TaskAction) => {
  switch (action.type) {
    case actionTypes.ADD_TASK:
      const pushedTaskList = [...state.taskList, action.payload.task];
      saveTaskList(pushedTaskList);
      return {
        ...state,
        taskList: pushedTaskList
      };
    case actionTypes.CHANGE_TASK:
      const newTask = action.payload.task;
      const tasksWithChangeOne = state.taskList
        .map(task => task.id === newTask.id ? newTask : task); // action.payload.task;
      saveTaskList(tasksWithChangeOne);
      return {
        ...state,
        taskList: tasksWithChangeOne
      };
    case actionTypes.DEL_TASK:
      const newTaskList = state.taskList
        .filter(task => task.id !== action.payload.task.id);
      saveTaskList(newTaskList);
      return {
        ...state,
        taskList: [
            ...newTaskList
        ]
      };
    case actionTypes.TOGGLE_DONE:
      const resetTaskList = state.taskList
        .map(task => task.id !== action.payload.task.id ? task : {...task, done: !task.done});
      saveTaskList(resetTaskList);
      return {
        ...state,
        taskList: [
            ...resetTaskList
        ]
      };
    case actionTypes.CLEAR_TASKS:
      const clearedTasks = state.taskList
        .filter(task => !task.done);
      saveTaskList(clearedTasks);
      return {
        ...state,
        taskList: [
            ...clearedTasks
        ]
      };
    default:
      return state;
  }
};
