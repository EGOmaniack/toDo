import React from 'react';

import * as Dictionary from '../../constants/dictionary';
import {Button} from '../button';
import './style.scss';

export const NewTask = (props) => {
    let {action} = props;
    let inputRef;

    let setInputRef = (input) => {
        inputRef = input;
    }

    let handleAdd = (e) => {
        action(inputRef.value);
        inputRef.value = '';
    }

    return (
        <div className="com-ntask">
            <input ref={setInputRef} type="text" placeholder={Dictionary.NEW} />
            <Button type="Button" onClick={handleAdd}>{Dictionary.CREATE}</Button>
        </div>
    );
};