import styled from 'styled-components';
import { Colors } from '../../constants/colors';
import { FONTS_STACK } from '../../constants/constants';

interface Doneable {
  done: boolean;
}

export const Card = styled.div`
  padding: 5px;
  height: 150px;
  width: 250px;
  margin: 15px;
  background-color: ${(props: Doneable) => props.done && Colors.gray || Colors.white};
  display: grid;
  grid-template-columns: 90px auto 90px;
  grid-template-rows: 15% 65% 20%;
  box-shadow: 0 1px 5px 0 rgba(0, 0, 0, 0.2), 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 3px 1px -2px rgba(0, 0, 0, 0.12);

  button {
    text-align: left;
  }

  & > button:last-child {
    grid-column: 3;
    grid-row: 3;
  }

  & > span {
    margin: -13px;
    grid-column: 3;
    grid-row: 1;
    justify-self: end;
  }
`;

export const CardHead = styled.div`
  grid-column: 1/4;
  grid-row: 1;
  font-size: 18px;
  font-weight: bold;
  color: #171718;
  font-family: ${FONTS_STACK.RUSSOONE};
`;

export const CardBody = styled.div`
  overflow: hidden;
  grid-column: 1/4;
`;