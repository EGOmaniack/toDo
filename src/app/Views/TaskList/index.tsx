import * as React from 'react';

import { Task } from '../../interfaces/Task';
import { Flow } from '../../reducers/flow';
import { TaskCard } from '../../components/taskCard';
import { AddTaskCard } from '../../components/addTaskCard';
import { Modal } from '../../components/modal';
import { TaskDialog } from '../../components/TaskDialog';
import { TaskListTop } from './taskListTop';
import { TaskModuleListWrapper, TaskListWrapper } from './styled';
import { genId } from '../../helpers/math';
import { TaskList } from '../../components/TaskList';

export interface InitialValue {
  filtrValue: string;
}

export enum EditTaskMode {
    off,
    newTask = 'Сохранить',
    editingTask = 'Изменить'
}

export interface TaskListProps {
  flow: Flow;
  tasks: Task[];
  filterValue: string;
  addTask(task: Task): void;
  changeTask(task: Task): void;
  deleteTask(task: Task): void;
  toggleDone(task: Task): void;
  clearAll(): void;
}

interface TaskListState {
  editingMode: EditTaskMode;
  editingTask: Task;
  displayTable: boolean;
}

export default class TaskListView extends React.PureComponent<TaskListProps, TaskListState> {

  constructor(props: TaskListProps) {
    super(props);

    this.state = {
      editingMode: EditTaskMode.off,
      editingTask: null,
      displayTable: false,
    };
  }

  setEditingOf = (): void => 
    this.setState({ editingMode: EditTaskMode.off })
  
  setEditingNew = (): void => 
    this.setState({ editingMode: EditTaskMode.newTask })
  
  render() {
    let { tasks, filterValue, toggleDone, deleteTask, clearAll } = this.props;
    let { editingMode, editingTask, displayTable } = this.state;
    return (
    <>
      <TaskListTop />
      <AddTaskCard
        onExecute={this.setEditingNew}
        toggleMode={() => this.setState({displayTable: !this.state.displayTable})}
        isModule={!this.state.displayTable}
        clearAll={() => clearAll()}
      />
      {displayTable && <TaskModuleListWrapper>
        {tasks
          .filter(t =>
            t.body.includes(filterValue)
            || t.title.includes(filterValue)
          )
          .map((task: Task) => <TaskCard
            key={task.id}
            {...task}
            onEdit={() => this.setState({editingMode: EditTaskMode.editingTask, editingTask: task})}
            onDelete={() => deleteTask(task)}
            onToggleDone={() => toggleDone(task)}
          />)
        }
      </TaskModuleListWrapper> ||
      <TaskListWrapper>
        {tasks
          .filter(t =>
            t.body.includes(filterValue)
            || t.title.includes(filterValue)
          )
          .map((task: Task) => <TaskList
            key={task.id}
            onEdit={() => this.setState({editingMode: EditTaskMode.editingTask, editingTask: task})}
            onDelete={() => deleteTask(task)}
            task={task}
            onToggleDone={() => toggleDone(task)}
          />)}
        </TaskListWrapper>
      }
      {editingMode !== EditTaskMode.off && (
        <Modal close={this.setEditingOf}>
          <TaskDialog
            mode={editingMode}
            task={editingTask}
            cansel={this.setEditingOf}
            add={(task: Task) => {
              this.props.addTask(task);
              this.setEditingOf();
            }}
            change={(task: Task) => {
              this.props.changeTask(task);
              this.setEditingOf();
            }}
          />
        </Modal>
      )}
    </>);
  }
}
