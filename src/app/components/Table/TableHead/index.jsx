import React from 'react';

import './style.scss';

export const TableHead = (props) => {
    const { children } = props;

    const childrenWithProps = React.Children.map(children, child =>
      React.cloneElement(child, { head: true }));

    return <thead><tr className="comp-t-head-row">{childrenWithProps}</tr></thead>;
};