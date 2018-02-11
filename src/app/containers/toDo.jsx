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
        this.closeTask = this.closeTask.bind(this);
        this.editTaskLabel = this.editTaskLabel.bind(this);
        this.toggleTaskEditeMode = this.toggleTaskEditeMode.bind(this);
        this.editTaskBody = this.editTaskBody.bind(this);
        this.toggleSortingDirection = this.toggleSortingDirection.bind(this);

        this.state = {
            tasks: localStorage.getItem('tasks') && JSON.parse(localStorage.getItem('tasks')) || [],
            openedTask: null,
            editOpenedTask: true,
            labelSortUp: true
        }
    }

    toggleSortingDirection() {
        this.setState({labelSortUp: !this.state.labelSortUp});
    }

    editTaskLabel({target: {value}}) {
        this.setState({openedTask: {
            id: this.state.openedTask.id,
            label: value,
            taskBody: this.state.openedTask.taskBody,
            done: this.state.openedTask.done
        }});
    }
    
    editTaskBody({target: {value}}) {
        this.setState({openedTask: {
            id: this.state.openedTask.id,
            label: this.state.openedTask.label,
            taskBody: value,
            done: this.state.openedTask.done
        }});
    }

    closeTask(save) {
        let tasks = this.state.tasks;
        let tasks2 = tasks.map((task)=>{
            if(save && task.id == this.state.openedTask.id) {
                task = this.state.openedTask;
            }
            return task;
        });

        localStorage.setItem('tasks', JSON.stringify(tasks2));
        this.setState({
            openedTask: null,
            tasks: tasks2
        });
    }

    openTask(task, edit) {
        this.setState({openedTask: task, editOpenedTask: edit});
    }

    toggleTaskEditeMode() {
        this.setState({ editOpenedTask: !this.state.editOpenedTask})
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

    addTask(taskLabel) {
        let tasks = this.state.tasks;

        let newId = localStorage.getItem('id') && parseInt(localStorage.getItem('id')) || 0;
        newId++;

        localStorage.setItem('id', newId);

        let newTask = {
            id: newId,
            label: taskLabel,
            taskBody: '',
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
                    labelSortingUp={this.state.labelSortUp}
                    toggleSortingDirection={this.toggleSortingDirection}
                />
                {this.state.openedTask && <TaskView
                        edit={this.state.editOpenedTask}
                        task={this.state.openedTask}
                        toggleTaskEditeMode={this.toggleTaskEditeMode}
                        closeTask={this.closeTask}
                        editTaskLabel={this.editTaskLabel}
                        editTaskBody={this.editTaskBody}
                    />}
            </React.Fragment>
        );
    }
}

export default ToDo