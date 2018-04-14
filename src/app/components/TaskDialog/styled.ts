import styled from 'styled-components';

export const Wrapper = styled.div`
  padding: 15px;
  padding-top: 0;
  min-width: 300px;

  & button {
    margin-top: 15px;
  }

  button:last-child {
    float: right;
  }

  & > h5 {
    padding-top: 0;
  }

  & h5 {
    margin-bottom: 5px;
  }
`;