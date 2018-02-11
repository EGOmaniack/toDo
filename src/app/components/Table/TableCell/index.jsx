import React from 'react';

import './style.scss';

export const TableCell = (props) => {
    let propsClassName = props.className ? props.className : '';
    return (
        <td
            className={'comp-t-cell ' + (props.head ? 'comp-t-head-cell ' : '') + propsClassName}
        >
            {props.children}
        </td>
    );
};