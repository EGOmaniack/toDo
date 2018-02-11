import React from 'react';

import './style.scss';

export const Checkbox = (props) => {
    const {checked, id} = props;

    return (
        <input
            className="com-checkbox"
            type="checkbox"
            checked={checked}
            id={id}
            onChange={props.action}
        />
    );
};