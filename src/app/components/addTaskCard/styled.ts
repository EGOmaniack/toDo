import styled from 'styled-components';

import { Colors } from '../../constants/colors';
import { FONTS_STACK } from '../../constants/constants';
import { lightenDarkenColor } from '../../helpers/color';

export const Card = styled.div`
  margin: 20px 10px 0;
  padding: 5px 10px;
  background-color: ${lightenDarkenColor(Colors.gray, -40)};

  & > span {
    float: right;
    color: ${Colors.white};
    margin: -6px -6px -22px 0;
  }

  .clear-all-button {
    float: right;
    margin: -6px -6px -22px 0;
  }
`;