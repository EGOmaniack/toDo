import React from 'react';

import * as Dictionary from '../../constants/dictionary';
import './style.scss';

export const TaskView = (props) => {
    let { task, edit } = props;
    return (
        <div className="com-task-wrapper">
            <div className="com-task-card">
                <input
                    className={!edit ? 'label' : 'editable'}
                    disabled={!edit}
                    type="text"
                    value={task.label}
                    onChange={()=>console.log(111)}
                />
                <textarea
                    className={!edit ? 'label' : 'editable'}
                    disabled={!edit}
                    value={task.taskBody}
                    onChange={()=>console.log(222)}
                />
                {edit && <button>{Dictionary.SAVE}</button>}
                {!edit && <button>{Dictionary.CHANGE}</button>}
            </div>
        </div>
    );
}