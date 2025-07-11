import React, { FC, useState, useEffect, useCallback } from 'react';
import { Input, Button, Checkbox, Empty } from 'antd';
import { SearchOutlined, PlusOutlined } from '@ant-design/icons';
import { Task, TaskManagementPanelProps, AddTaskFormState } from './interface';
import { generateTaskId } from './helpers';

const { Search } = Input;

/**
 * 任务管理面板组件
 */
const TaskManagementPanel: FC<TaskManagementPanelProps> = ({
  initialTasks = [],
  onTasksChange,
  onAddTask,
  onDeleteTask,
  onUpdateTaskStatus,
  onSearchTask,
  loading = false,
  title = '任务管理面板',
}) => {
  // 内部状态
  const [tasks, setTasks] = useState<Task[]>(initialTasks);
  const [addTaskForm, setAddTaskForm] = useState<AddTaskFormState>({
    visible: false,
    content: '',
  });

  // 当外部数据变化时更新内部状态
  useEffect(() => {
    setTasks(initialTasks);
  }, [initialTasks]);

  // 处理搜索任务
  const handleSearch = useCallback((value: string) => {
    onSearchTask?.(value);
  }, [onSearchTask]);

  // 显示添加任务表单
  const showAddTaskForm = useCallback(() => {
    setAddTaskForm({ visible: true, content: '' });
  }, []);

  // 取消添加任务
  const cancelAddTask = useCallback(() => {
    setAddTaskForm({ visible: false, content: '' });
  }, []);

  // 处理添加任务内容变更
  const handleAddTaskContentChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setAddTaskForm(prev => ({ ...prev, content: e.target.value }));
  }, []);

  // 确认添加任务
  const confirmAddTask = useCallback(() => {
    if (addTaskForm.content.trim()) {
      const newTask: Task = {
        id: generateTaskId(),
        content: addTaskForm.content.trim(),
        completed: false,
      };
      
      const newTasks = [...tasks, newTask];
      setTasks(newTasks);
      
      // 调用外部回调
      onAddTask?.(newTask);
      onTasksChange?.(newTasks);
      
      // 重置表单
      setAddTaskForm({ visible: false, content: '' });
    }
  }, [addTaskForm.content, tasks, onAddTask, onTasksChange]);

  // 处理删除任务
  const handleDeleteTask = useCallback((taskId: string) => {
    const newTasks = tasks.filter(task => task.id !== taskId);
    setTasks(newTasks);
    
    // 调用外部回调
    onDeleteTask?.(taskId);
    onTasksChange?.(newTasks);
  }, [tasks, onDeleteTask, onTasksChange]);

  // 处理更新任务状态
  const handleUpdateTaskStatus = useCallback((taskId: string, completed: boolean) => {
    const newTasks = tasks.map(task => 
      task.id === taskId ? { ...task, completed } : task
    );
    setTasks(newTasks);
    
    // 调用外部回调
    onUpdateTaskStatus?.(taskId, completed);
    onTasksChange?.(newTasks);
  }, [tasks, onUpdateTaskStatus, onTasksChange]);

  return (
    <div className="bg-white border border-gray-200 rounded-md shadow-sm p-4">
      <h2 className="text-xl font-medium mb-4 pb-2 border-b border-gray-200">{title}</h2>
      
      {/* 搜索和添加任务区域 */}
      <div className="flex gap-3 mb-4">
        <Search
          placeholder="请输入任务进行搜索"
          allowClear
          enterButton={<SearchOutlined />}
          size="middle"
          onSearch={handleSearch}
          className="flex-1"
          loading={loading}
        />
        <Button 
          type="primary" 
          icon={<PlusOutlined />}
          onClick={showAddTaskForm}
        >
          新增任务
        </Button>
      </div>

      {/* 添加任务表单 */}
      {addTaskForm.visible && (
        <div className="mb-4 flex items-center gap-2">
          <Input 
            placeholder="请输入新增的任务信息"
            value={addTaskForm.content}
            onChange={handleAddTaskContentChange}
            className="flex-1"
            onPressEnter={confirmAddTask}
            autoFocus
          />
          <Button type="primary" onClick={confirmAddTask}>确认</Button>
          <Button onClick={cancelAddTask}>取消</Button>
        </div>
      )}

      {/* 任务列表 */}
      {tasks.length > 0 ? (
        <div className="space-y-3">
          {tasks.map((task) => (
            <div 
              key={task.id} 
              className="flex items-center border border-gray-200 rounded-md p-3 justify-between"
            >
              <div className="flex items-center">
                <Checkbox 
                  checked={task.completed} 
                  onChange={(e) => handleUpdateTaskStatus(task.id, e.target.checked)}
                  className="mr-2"
                />
                <span className={task.completed ? 'line-through text-gray-400' : ''}>
                  {task.content}
                </span>
              </div>
              <Button 
                type="link" 
                className="text-blue-500" 
                onClick={() => handleDeleteTask(task.id)}
              >
                删除
              </Button>
            </div>
          ))}
        </div>
      ) : (
        <Empty description="暂无任务" className="my-8" />
      )}
    </div>
  );
};

export default TaskManagementPanel; 