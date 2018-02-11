import React from 'react';
import { View } from '../components/ToDoView'

const TasksMoq = [
    {
        id: "1",
        label: "Нарисовать ТуДу в статике",
        done: true
    },
    {
        id: "2",
        label: "Вытолкнуть в feature/staticToDo",
        done: false
    },
    {
        id: "3",
        label: "Запулреквестить ветку",
        done: false
    },
];

const ToDo = (props) => {
    return <View tasks={TasksMoq} />;
}

export default ToDo