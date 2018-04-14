import { Task } from '../interfaces/Task';

export const saveTaskList = (list: Array<Task>): void => {
    localStorage.setItem('taskList', JSON.stringify(list));
};

export const getTaskList = (): Array<Task> => 
    JSON.parse(localStorage.getItem('taskList')) || [];