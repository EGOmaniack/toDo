import React from 'react';

import Card from './card';
import Table, {TableCell, TableHead, TableRow, TableBody} from './Table';
import {TaskLabel} from './TaskLabel';
import {NewTask} from './newTask';
import * as Dictionary from '../constants/dictionary';
import {Checkbox} from './checkbox';
import './toDoView.scss';

const delIcon = require('./img/del.svg');

export const View = (props) => {
    let {
        tasks,
        addNewTask,
        deleteTask,
        toggleTaskDone,
        openTask,
        toggleSortingDirection,
        labelSortingUp
    } = props;
    
    let sortedTasks = tasks.sort((task1, task2)=>{
        let k = labelSortingUp ? 1 : -1;
        return (task1.label > task2.label) ? -1 * k : ((task2.label > task1.label) ? 1 * k : 0)
    });

    return (
        <Card className="view-card">
            <Table>
                <TableHead>
                    <TableCell>{Dictionary.DONE}</TableCell>
                    <TableCell>
                        <span
                            className="touchable"
                            onClick={toggleSortingDirection}
                        >{Dictionary.LABEL}
                            <i className={`arrow ${labelSortingUp ? 'up' : 'down'}`}></i>
                        </span>
                    </TableCell>
                    <TableCell>{Dictionary.DEL}</TableCell>
                </TableHead>
                <TableBody>
                {tasks.map((task)=>(
                    <TableRow key={task.id}>
                        <TableCell>{
                            <Checkbox id={task.id} checked={task.done} action={()=>toggleTaskDone(task.id)} />
                        }</TableCell>
                        <TableCell className={task.done ? 'done' : ''}><TaskLabel openTask={(edit) => openTask(task, edit)} label={task.label} /></TableCell>
                        <TableCell>
                            <img
                                className="del-icon"
                                src={delIcon}
                                onClick={() => deleteTask(task.id)}
                            />
                        </TableCell>
                    </TableRow>
                ))}
                </TableBody>
            </Table>
            <NewTask action={addNewTask} />
        </Card>
    );
}