import * as React from 'react';
import ExpansionPanel, {
  ExpansionPanelSummary,
  ExpansionPanelDetails,
  ExpansionPanelActions,
} from 'material-ui/ExpansionPanel';
import { Typography, Checkbox, Button, Divider } from 'material-ui';
import ExpandMoreIcon from 'material-ui-icons/ExpandMore';

import { Task } from '../../interfaces/Task';
import { TaskLi } from './styled';
import { dictionary } from '../../constants/dictionary';

interface TaskListProps {
  task: Task;
  onToggleDone(): void;
  onEdit(): void;
  onDelete(): void;
}

interface TaskListState {
  expanded: boolean;
}

export class TaskList extends React.PureComponent <TaskListProps, TaskListState> {
  constructor(props: TaskListProps) {
    super(props);
    this.state = {
      expanded: false,
    };
  }

  toggleExpand = () => this.setState({expanded: !this.state.expanded});

  render() {
    let { onToggleDone, task: { title, body, done }, onEdit, onDelete } = this.props;
    let { expanded } = this.state;

    return (
      <TaskLi done={done}>
        <ExpansionPanel expanded={expanded}>
          <ExpansionPanelSummary
            expandIcon={<ExpandMoreIcon onClick={this.toggleExpand} />}
          >
            <Checkbox onClick={onToggleDone} className="task-list-checkbox" checked={done} />
            <Typography onClick={this.toggleExpand}>{title}</Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails onClick={this.toggleExpand}>
            <Typography>{body}</Typography>
          </ExpansionPanelDetails>
          <Divider />
          <ExpansionPanelActions>
            <Button disabled={done} onClick={onEdit} size="small">
              {dictionary.change}
            </Button>
            <Button onClick={onDelete} size="small">
              {dictionary.delete}
            </Button>
          </ExpansionPanelActions>
        </ExpansionPanel>
      </TaskLi>
    );
  }
}