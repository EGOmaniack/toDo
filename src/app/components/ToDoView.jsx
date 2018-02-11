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
    return (
        <Card className="view-card">
            <Table>
                <TableHead>
                    <TableCell>{Dictionary.DONE}</TableCell>
                    <TableCell>{Dictionary.LABEL}</TableCell>
                    <TableCell>{Dictionary.DEL}</TableCell>
                </TableHead>
                <TableBody>
                {props.tasks.map((task)=>(
                    <TableRow key={task.id}>
                        <TableCell>{
                            <Checkbox id={task.id} checked={task.done} />
                        }</TableCell>
                        <TableCell className={task.done ? 'done' : ''}><TaskLabel label={task.label} /></TableCell>
                        <TableCell><img className="del-icon" src={delIcon}/></TableCell>
                    </TableRow>
                ))}
                </TableBody>
            </Table>
            <NewTask />
        </Card>
    );
}