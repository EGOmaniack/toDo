import React from 'react';

import './style.scss';

const editIcon = require('../img/edit.svg');

export class TaskLabel extends React.PureComponent {
    constructor(props) {
        super(props);
    }

    render() {
        let { label, className } = this.props;
        className = className ? className : '';

        return (
            <span className={`com-tlabel ${className}`}>
                <span onClick={this.props.openTask}>{label}</span>
                <img src={editIcon} />
            </span>
        );
    }

}