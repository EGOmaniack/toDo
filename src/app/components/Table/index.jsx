import React from 'react';
import PropTypes from 'prop-types';

import {TableCell} from './TableCell';
import {TableHead} from './TableHead';
import {TableRow} from './TableRow';
import {TableBody} from './TableBody';
import './style.scss';

class Table extends React.Component {
    render() {
        return (
            <table className="comp-tabel" {...this.props}>
                {this.props.children}
            </table>
        );
    }
}

export default Table;
export {
    TableCell,
    TableHead,
    TableRow,
    TableBody
};