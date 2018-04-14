import styled from 'styled-components';

import { Colors } from '../../constants/colors';
import { lightenDarkenColor } from '../../helpers/color';

export const Wrapper = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  background-color: ${Colors.black}aa;
  display: flex;
  align-items: center;

  .close {
    position: absolute;
    color: white;
    float: right;
    font-size: 28px;
    font-weight: bold;
    right: -28px;
    top: -15px;
  }

  .close:hover,
  .close:focus {
    color: black;
    text-decoration: none;
    cursor: pointer;
  }
`;

export const Content = styled.div`
  position: relative;
  background-color: ${Colors.white};
  margin: 0 auto;
  display: inline-block;
  padding: 7px;
  border-radius: 3px;
`;