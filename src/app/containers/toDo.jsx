import React from 'react';

import { View } from '../components/ToDoView';
import {TaskView} from '../components/TaskView';
import {getTasks, addTask, deleteTask} from '../helpers/tasks';

class ToDo extends React.PureComponent {

    constructor(props) {
        super(props);
        this.addTask = this.addTask.bind(this);
        this.deleteTask = this.deleteTask.bind(this);
        this.toggleTaskDone = this.toggleTaskDone.bind(this);
        this.openTask = this.openTask.bind(this);
        this.state = {
            tasks: localStorage.getItem('tasks') && JSON.parse(localStorage.getItem('tasks')) || [],
            openedTask: {
                id: 888,
                label: 'label',
                taskBody: 'body',
                done: false
            },
            editOpenedTask: false
        }
    }

    openTask(task) {
        this.setState({openedTask: task});
    }

    toggleTaskDone(taskId) {
        let tasks = this.state.tasks;

        tasks = tasks.map((task)=> {
            if(task.id == taskId) {
                task.done = !task.done;
            }
            return task;
        });

        localStorage.setItem('tasks', JSON.stringify(tasks));
        this.setState({tasks});
    }

    addTask(taskLabel, taskBody) {
        let tasks = this.state.tasks;

        let newId = localStorage.getItem('id') && parseInt(localStorage.getItem('id')) || 0;
        newId++;

        localStorage.setItem('id', newId);

        let newTask = {
            id: newId,
            label: taskLabel,
            taskBody,
            done: false
        };

        localStorage.setItem('tasks', JSON.stringify([...tasks, newTask]));
        this.setState({tasks: [...this.state.tasks, newTask]});
    };

    deleteTask(taskId) {
        let tasks = this.state.tasks;

        tasks = tasks.filter((task) => task.id != taskId);

        localStorage.setItem('tasks', JSON.stringify(tasks));
        this.setState({tasks});
    }

    render() {
        let tasks = this.state.tasks;
        return (
            <React.Fragment>
                <View
                    tasks={tasks}
                    addNewTask={this.addTask}
                    deleteTask={this.deleteTask}
                    toggleTaskDone={this.toggleTaskDone}
                    openTask={this.openTask}
                />
                {this.state.openedTask && <TaskView edit={this.state.editOpenedTask} task={this.state.openedTask} />}
            </React.Fragment>
        );
    }
}

export default ToDo