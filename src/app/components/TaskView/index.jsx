import React from 'react';

import * as Dictionary from '../../constants/dictionary';
import './style.scss';

export const TaskView = (props) => {
    let { task, edit, toggleTaskEditeMode, closeTask, editTaskLabel, editTaskBody } = props;

    let handleClose = ({target}) => {
        if(target.id === 'modal-black-bg') {
            closeTask(false);
        }
    }

    return (
        <div id="modal-black-bg" className="com-task-wrapper" onClick={handleClose}>
            <div className="com-task-card">
                <input
                    className={!edit ? 'label' : 'editable'}
                    disabled={!edit}
                    type="text"
                    value={task.label}
                    onChange={editTaskLabel}
                />
                <textarea
                    className={!edit ? 'label' : 'editable'}
                    disabled={!edit}
                    defaultValue={task.taskBody}
                    onChange={editTaskBody}
                />
                {edit && <button onClick={() => closeTask(true)}>{Dictionary.SAVE}</button>}
                {!edit && <button onClick={toggleTaskEditeMode}>{Dictionary.CHANGE}</button>}
            </div>
        </div>
    );
}