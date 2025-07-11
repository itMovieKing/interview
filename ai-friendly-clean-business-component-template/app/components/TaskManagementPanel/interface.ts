/**
 * 任务项接口定义
 */
export interface Task {
  /** 任务唯一标识 */
  id: string;
  /** 任务内容 */
  content: string;
  /** 任务是否完成 */
  completed: boolean;
}

/**
 * 任务管理面板属性接口
 */
export interface TaskManagementPanelProps {
  /** 初始任务数据 */
  initialTasks: Task[];
  /** 当任务数据变更时的回调函数 */
  onTasksChange?: (tasks: Task[]) => void;
  /** 添加新任务时的回调函数 */
  onAddTask?: (task: Task) => void;
  /** 删除任务时的回调函数 */
  onDeleteTask?: (taskId: string) => void;
  /** 更新任务状态时的回调函数 */
  onUpdateTaskStatus?: (taskId: string, completed: boolean) => void;
  /** 搜索任务时的回调函数 */
  onSearchTask?: (keyword: string) => void;
  /** 是否处于加载状态 */
  loading?: boolean;
  /** 面板标题 */
  title?: string;
}

/**
 * 添加任务表单状态接口
 */
export interface AddTaskFormState {
  /** 是否显示添加任务表单 */
  visible: boolean;
  /** 新任务内容 */
  content: string;
} 