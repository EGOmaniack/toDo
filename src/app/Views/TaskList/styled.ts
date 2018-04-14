import styled from 'styled-components';
import { lightenDarkenColor } from '../../helpers/color';
import { Colors } from '../../constants/colors';

export const TaskModuleListWrapper = styled.div`
  padding: 10px;
  margin: 0 10px;
  display: flex;
  flex-wrap: wrap;
  border: 2px solid ${lightenDarkenColor(Colors.gray, -40)};
`;

export const TaskListWrapper = styled.ul`
  list-style: none;
  padding: 10px;
  margin: 0 10px;
  border: 2px solid ${lightenDarkenColor(Colors.gray, -40)};
`;