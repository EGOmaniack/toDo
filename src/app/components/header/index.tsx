import * as React from 'react';
import { Wrap, Right, Left } from './styled';

import { dictionary } from '../../constants/dictionary';

interface HeadProps {
    stateName: string;
}
const Head = (props: HeadProps) => {
    let {stateName} = props;
    return (
        <Wrap {...props}>
            <Left>
                {dictionary.states[stateName]}
            </Left>
        </Wrap>
    );
};

export default Head;