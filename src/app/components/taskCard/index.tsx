import * as React from 'react';
import { Typography, Button, Checkbox } from 'material-ui';

import { dictionary } from '../../constants/dictionary';
import {
  CardHead,
  Card,
  CardBody
} from './styled';
import { Task } from '../../interfaces/Task';
import { CheckCircle, PanoramaFishEye } from 'material-ui-icons';

interface TaskCardProps {
  className?: string;
  title: string;
  body: string;
  done: boolean;
  onOpen?(): void;
  onEdit(): void;
  onDelete(): void;
  onToggleDone(): void;
}

export const TaskCard: React.SFC<TaskCardProps> = (props: TaskCardProps) => {
  return (
    <Card
      done={props.done}
      className={props.className}
      onDoubleClick={props.onToggleDone}
    >
      <CardHead>{props.title}</CardHead>
      <CardBody>{props.body}</CardBody>
      <Button disabled={props.done} onClick={props.onEdit} size="small">
        {dictionary.change}
      </Button>
      <Button onClick={props.onDelete} size="small">{dictionary.delete}</Button>
      <Checkbox
        color="primary"
        checked={props.done}
        icon={<PanoramaFishEye />}
        checkedIcon={<CheckCircle />}
        title={'выполнено'}
        onChange={props.onToggleDone}
      />
    </Card>
  );
}; 