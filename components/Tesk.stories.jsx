import {Task} from './Task';

export default {
  title: 'Task', //storybook 앱의 사이드바에 있는 컴포넌트 이름
  component: Task, //컴포넌트
  argTypes: {
    //상호작용,,?
    onPinTask: {action: 'onPinTask'},
    onArchiveTask: {action: 'onArchiveTask'},
  },
};

export const Default = {
  args: {
    task: {
      id: '1',
      title: 'Test Task',
      state: 'TASK_INBOX',
    },
  },
};

export const Pinned = {
  args: {task: {...Default.args.task, state: 'TASK_PINNED'}},
};

export const Archived = {
  args: {task: {...Default.args.task, state: 'TASK_ARCHIVED'}},
};
