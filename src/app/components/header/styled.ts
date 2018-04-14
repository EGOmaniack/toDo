import styled from 'styled-components';

import { Colors } from '../../constants/colors';
import { headerHeight } from '../../constants/dictionary';
import { FONTS_STACK } from '../../constants/constants';

const height = headerHeight;

export const Wrap = styled.div`
  font-family: ${FONTS_STACK.RUSSOONE};
  font-weight: bold;
  color: ${Colors.white};
  background: ${(props: any) => props.stateName !== 'MainPage' ? Colors.pDark : Colors.primory};
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.4);
  height: ${height}px;
  display: grid;
  grid-template-rows: auto 20px auto;
  grid-template-columns: minmax(150px, 300px) auto 210px;

  .head-elem {
    color: ${ Colors.white };
    font-weight: bold;
    font-family: "Lora", "Playfair Display", Georgia, sans-serif;
    padding-right: 20px;
    display: inline-block;
    text-align: center;
    cursor: pointer;
  }

  & .head-elem:hover {
    text-decoration: underline;
  }
`;
export const  Right = styled.div`
  grid-column: 3;
  grid-row: 2;
`;
export const  Left = styled.div`
  margin-left: 20px;
  grid-row: 2;
`;
