import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import TaskManagementPanel from './TaskManagementPanel';
import { Task } from './interface';

const meta: Meta<typeof TaskManagementPanel> = {
  title: 'Components/TaskManagementPanel',
  component: TaskManagementPanel,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof TaskManagementPanel>;

// 模拟任务数据
const mockTasks: Task[] = [
  { id: '1', content: '任务一任务一任务一任务一任务一', completed: true },
  { id: '2', content: '任务二任务二任务二任务二任务二任务二任务二', completed: true },
  { id: '3', content: '任务三任务三任务三任务三任务三任务三任务三任务三', completed: false },
  { id: '4', content: '任务四任务四任务四任务四任务四任务四任务四任务四任务四任务四', completed: false },
];

// 默认故事
export const Default: Story = {
  args: {
    initialTasks: mockTasks,
    title: '任务管理面板',
  },
};

// 空状态故事
export const Empty: Story = {
  args: {
    initialTasks: [],
    title: '任务管理面板',
  },
};

// 加载状态故事
export const Loading: Story = {
  args: {
    initialTasks: mockTasks,
    loading: true,
    title: '任务管理面板',
  },
};

// 交互式故事
export const Interactive: Story = {
  render: () => {
    const [tasks, setTasks] = React.useState<Task[]>(mockTasks);
    
    const handleTasksChange = (newTasks: Task[]) => {
      setTasks(newTasks);
      console.log('Tasks changed:', newTasks);
    };
    
    const handleAddTask = (task: Task) => {
      console.log('Task added:', task);
    };
    
    const handleDeleteTask = (taskId: string) => {
      console.log('Task deleted:', taskId);
    };
    
    const handleUpdateTaskStatus = (taskId: string, completed: boolean) => {
      console.log('Task status updated:', taskId, completed);
    };
    
    const handleSearchTask = (keyword: string) => {
      console.log('Search task:', keyword);
    };
    
    return (
      <div style={{ width: '600px' }}>
        <TaskManagementPanel
          initialTasks={tasks}
          onTasksChange={handleTasksChange}
          onAddTask={handleAddTask}
          onDeleteTask={handleDeleteTask}
          onUpdateTaskStatus={handleUpdateTaskStatus}
          onSearchTask={handleSearchTask}
          title="交互式任务管理面板"
        />
      </div>
    );
  },
}; 