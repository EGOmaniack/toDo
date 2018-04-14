import styled from 'styled-components';

import { Colors } from '../../constants/colors';
import { lightenDarkenColor } from '../../helpers/color';

interface TaskLiProps {
  done: boolean;
}

export const TaskLi = styled.li`
  & > div {
    background-color: ${(props: TaskLiProps) => props.done && Colors.gray || Colors.white};
  }

  .task-list-checkbox {
    margin: -15px -8px -15px -20px;
  }

  p {
    ${(props: TaskLiProps) => props.done && 'text-decoration: line-through;'}
  }
`;
