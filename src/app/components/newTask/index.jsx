import React from 'react';

import * as Dictionary from '../../constants/dictionary';
import './style.scss';

export const NewTask = (props) => {
    return (
        <div className="com-ntask">
            <input type="text" placeholder={Dictionary.NEW} />
            <button type="submit">{Dictionary.CREATE}</button>
        </div>
    );
};