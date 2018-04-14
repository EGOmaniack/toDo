import * as React from 'react';
import { CircularProgress, LinearProgress } from 'material-ui';
import styled from 'styled-components';

const Wrapper = styled.div`
  & > div {
    width: 100%;
  }
`;

export default class Loading extends React.Component<{}, {}> {

    render() {
        return (
            <Wrapper>
                <LinearProgress />
            </Wrapper>
        );
    }
}