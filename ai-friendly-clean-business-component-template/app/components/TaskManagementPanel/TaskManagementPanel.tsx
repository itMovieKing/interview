import React, { useState, useRef } from 'react';
import { Input, Button, Checkbox, Spin, Empty } from 'antd';
import type { InputRef } from 'antd';
import { SearchOutlined, PlusOutlined, DeleteOutlined } from '@ant-design/icons';
import { TaskManagementPanelProps } from './TaskManagementPanel.types';

const TaskManagementPanel: React.FC<TaskManagementPanelProps> = ({
  tasks,
  onSearch,
  onAddTask,
  onDeleteTask,
  onToggleTaskStatus,
  loading = false,
  title = '任务管理面板'
}) => {
  // 内部状态
  const [searchKeyword, setSearchKeyword] = useState<string>('');
  const [newTaskContent, setNewTaskContent] = useState<string>('');
  const [showAddForm, setShowAddForm] = useState<boolean>(false);
  
  // 引用
  const searchInputRef = useRef<InputRef>(null);

  // 处理搜索
  const handleSearch = () => {
    onSearch(searchKeyword);
  };

  // 处理添加任务
  const handleAddTask = () => {
    if (newTaskContent.trim()) {
      onAddTask(newTaskContent.trim());
      setNewTaskContent('');
      setShowAddForm(false);
    }
  };

  // 处理取消添加
  const handleCancelAdd = () => {
    setNewTaskContent('');
    setShowAddForm(false);
  };

  // 处理任务状态切换
  const handleToggleStatus = (taskId: string, completed: boolean) => {
    onToggleTaskStatus(taskId, completed);
  };

  return (
    <div className="bg-white rounded-md shadow-sm p-4">
      <div className="border-b pb-2 mb-4">
        <h2 className="text-lg font-medium text-gray-800">{title}</h2>
      </div>
      
      <div className="mb-4 flex">
        <Input
          ref={searchInputRef}
          placeholder="请输入任务进行搜索"
          value={searchKeyword}
          onChange={(e) => setSearchKeyword(e.target.value)}
          onPressEnter={handleSearch}
          prefix={<SearchOutlined className="text-gray-400" />}
          className="flex-1"
        />
        <Button
          type="primary"
          className="ml-2 bg-blue-500"
          icon={<PlusOutlined />}
          onClick={() => setShowAddForm(true)}
        >
          新增任务
        </Button>
      </div>
      
      {showAddForm && (
        <div className="mb-4 flex items-center border p-2 rounded-md bg-gray-50">
          <Input
            placeholder="请输入新增的任务信息"
            value={newTaskContent}
            onChange={(e) => setNewTaskContent(e.target.value)}
            onPressEnter={handleAddTask}
            autoFocus
            className="flex-1"
          />
          <div className="ml-2 flex">
            <Button 
              type="primary" 
              onClick={handleAddTask}
              className="mr-2 bg-blue-500"
            >
              确认
            </Button>
            <Button onClick={handleCancelAdd}>取消</Button>
          </div>
        </div>
      )}
      
      <Spin spinning={loading}>
        <div className="mt-4">
          {tasks.length > 0 ? (
            tasks.map((task) => (
              <div 
                key={task.id} 
                className="border mb-2 p-3 rounded-md flex items-center justify-between hover:bg-gray-50"
              >
                <div className="flex items-center">
                  <Checkbox
                    checked={task.completed}
                    onChange={(e) => handleToggleStatus(task.id, e.target.checked)}
                    className="mr-2"
                  />
                  <span className={task.completed ? 'line-through text-gray-500' : ''}>
                    {task.content}
                  </span>
                </div>
                <Button 
                  type="link" 
                  danger 
                  onClick={() => onDeleteTask(task.id)}
                  className="text-blue-500 hover:text-blue-700"
                  icon={<DeleteOutlined />}
                >
                  删除
                </Button>
              </div>
            ))
          ) : (
            <Empty description="暂无任务" className="py-8" />
          )}
        </div>
      </Spin>
    </div>
  );
};

export default TaskManagementPanel; 