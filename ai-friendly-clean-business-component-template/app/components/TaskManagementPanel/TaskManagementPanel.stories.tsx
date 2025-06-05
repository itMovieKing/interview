import React, { useState } from 'react';
import { Meta, StoryFn } from '@storybook/react';
import TaskManagementPanel from './TaskManagementPanel';
import { Task } from './TaskManagementPanel.types';
import { TaskManagementPanelProps } from './TaskManagementPanel.types';

export default {
  title: 'Components/TaskManagementPanel',
  component: TaskManagementPanel,
  parameters: {
    docs: {
      description: {
        component: '任务管理面板组件，用于显示、搜索、添加、删除任务以及标记任务完成状态。'
      }
    }
  },
  argTypes: {
    title: {
      control: 'text',
      description: '面板标题',
      defaultValue: '任务管理面板'
    },
    loading: {
      control: 'boolean',
      description: '加载状态',
      defaultValue: false
    }
  }
} as Meta;

// 模板
const Template: StoryFn = (args) => {
  // 模拟任务数据
  const [tasks, setTasks] = useState<Task[]>([
    { id: '1', content: '任务一任务一任务一任务一任务一', completed: true },
    { id: '2', content: '任务二任务二任务二任务二任务二任务二任务二', completed: true },
    { id: '3', content: '任务三任务三任务三任务三任务三任务三任务三任务三任务三', completed: false },
    { id: '4', content: '任务四任务四任务四任务四任务四任务四任务四任务四任务四', completed: false }
  ]);
  
  // 模拟过滤后的任务
  const [filteredTasks, setFilteredTasks] = useState<Task[]>(tasks);
  
  // 搜索任务
  const handleSearch = (keyword: string) => {
    if (!keyword) {
      setFilteredTasks(tasks);
      return;
    }
    
    const filtered = tasks.filter(task => 
      task.content.toLowerCase().includes(keyword.toLowerCase())
    );
    setFilteredTasks(filtered);
  };
  
  // 添加任务
  const handleAddTask = (content: string) => {
    const newTask: Task = {
      id: Date.now().toString(),
      content,
      completed: false
    };
    const updatedTasks = [...tasks, newTask];
    setTasks(updatedTasks);
    setFilteredTasks(updatedTasks);
  };
  
  // 删除任务
  const handleDeleteTask = (taskId: string) => {
    const updatedTasks = tasks.filter(task => task.id !== taskId);
    setTasks(updatedTasks);
    setFilteredTasks(updatedTasks);
  };
  
  // 切换任务状态
  const handleToggleTaskStatus = (taskId: string, completed: boolean) => {
    const updatedTasks = tasks.map(task => 
      task.id === taskId ? { ...task, completed } : task
    );
    setTasks(updatedTasks);
    setFilteredTasks(updatedTasks.filter(task => 
      filteredTasks.some(ft => ft.id === task.id)
    ));
  };
  
  return (
    <TaskManagementPanel
      {...args}
      tasks={filteredTasks}
      onSearch={handleSearch}
      onAddTask={handleAddTask}
      onDeleteTask={handleDeleteTask}
      onToggleTaskStatus={handleToggleTaskStatus}
    />
  );
};

export const Default = Template.bind({});
Default.args = {
  title: '任务管理面板',
  loading: false
};

export const Loading = Template.bind({});
Loading.args = {
  title: '任务管理面板',
  loading: true
};

export const EmptyTasks = (args: Partial<TaskManagementPanelProps>) => (
  <TaskManagementPanel
    {...args}
    tasks={[]}
    onSearch={() => {}}
    onAddTask={() => {}}
    onDeleteTask={() => {}}
    onToggleTaskStatus={() => {}}
  />
);
EmptyTasks.args = {
  title: '任务管理面板 - 空列表',
  loading: false
}; 