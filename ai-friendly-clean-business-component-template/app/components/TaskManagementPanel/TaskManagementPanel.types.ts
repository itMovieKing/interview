export interface Task {
  id: string;
  content: string;
  completed: boolean;
}

export interface TaskManagementPanelProps {
  /**
   * 任务列表数据
   */
  tasks: Task[];
  
  /**
   * 搜索任务的回调函数
   * @param keyword 搜索关键词
   */
  onSearch: (keyword: string) => void;
  
  /**
   * 添加新任务的回调函数
   * @param content 任务内容
   */
  onAddTask: (content: string) => void;
  
  /**
   * 删除任务的回调函数
   * @param taskId 要删除的任务ID
   */
  onDeleteTask: (taskId: string) => void;
  
  /**
   * 更新任务完成状态的回调函数
   * @param taskId 要更新的任务ID
   * @param completed 完成状态
   */
  onToggleTaskStatus: (taskId: string, completed: boolean) => void;
  
  /**
   * 加载状态
   */
  loading?: boolean;
  
  /**
   * 面板标题
   */
  title?: string;
} 