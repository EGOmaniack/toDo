import React from 'react';

import './style.scss';

export const TableRow = (props) => {
    const { children } = props;

    const childrenWithProps = React.Children.map(children, child =>
      React.cloneElement(child, { head: false }));

    return <tr className="comp-t-row">{childrenWithProps}</tr>;
};