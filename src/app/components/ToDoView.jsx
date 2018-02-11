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
    let {tasks, addNewTask, deleteTask, toggleTaskDone, openTask} = props;
    return (
        <Card className="view-card">
            <Table>
                <TableHead>
                    <TableCell>{Dictionary.DONE}</TableCell>
                    <TableCell>{Dictionary.LABEL}</TableCell>
                    <TableCell>{Dictionary.DEL}</TableCell>
                </TableHead>
                <TableBody>
                {!!tasks && tasks.map((task)=>(
                    <TableRow key={task.id}>
                        <TableCell>{
                            <Checkbox id={task.id} checked={task.done} action={()=>toggleTaskDone(task.id)} />
                        }</TableCell>
                        <TableCell className={task.done ? 'done' : ''}><TaskLabel openTask={()=>openTask(task)} label={task.label} /></TableCell>
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