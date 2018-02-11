import React from 'react';

import './style.scss';

class Card extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className={'card-wrapper ' + this.props.className}>
                {this.props.children}
            </div>
        );
    }
}

export default Card;