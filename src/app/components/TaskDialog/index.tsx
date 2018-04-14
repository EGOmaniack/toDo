import * as React from 'react';
import { Task } from '../../interfaces/Task';
import { genId } from '../../helpers/math';
import { TextField, Button } from 'material-ui';
import { Wrapper } from './styled';
import { EditTaskMode } from '../../Views/TaskList';

interface TaskDialogProps {
  task?: Task;
  add(task: Task): void;
  change(task: Task): void;
  cansel(): void;
  mode: EditTaskMode;
}

interface TaskDialogState extends Task { }

export class TaskDialog extends React.PureComponent <TaskDialogProps, TaskDialogState> {

  private titleInput: HTMLInputElement;

  constructor(props: TaskDialogProps) {
    super(props);
    let { task, mode } = this.props;
    let startingTask: Task = mode === EditTaskMode.newTask && {
      id: genId(),
      title: '',
      body: '',
      creationTimeStamp: new Date(),
      done: false,
    } || task;

    this.state = {
      ...startingTask
    };
  }

  componentDidMount() {
    this.titleInput.focus();
  }

  render() {
    let { add, change, mode } = this.props;
    return (
      <Wrapper>
        <h5>Заголовок</h5>
        <TextField
          inputRef={input => this.titleInput = input}
          fullWidth={true}
          defaultValue={this.state.title}
          onChange={({target: {value}}) => this.setState({title: value})}
        />
        <h5>Задача</h5>
        <TextField
          multiline={true}
          fullWidth={true}
          defaultValue={this.state.body}
          onChange={({target: {value}}) => this.setState({body: value})}
        />
        <Button
          variant={'raised'}
          color={'primary'}
          onClick={() => mode === EditTaskMode.newTask && add(this.state) || change(this.state)}
        >
          {this.props.mode}
        </Button>
        <Button
          variant={'raised'}
          color={'primary'}
          onClick={this.props.cansel}
        >
          Отмена
        </Button>
      </Wrapper>
    );
  }
}