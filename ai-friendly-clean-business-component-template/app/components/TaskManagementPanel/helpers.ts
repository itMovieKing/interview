import { Task } from './interface';

/**
 * 生成唯一的任务ID
 * @returns 新的任务ID
 */
export const generateTaskId = (): string => {
  return `task-${Date.now()}-${Math.floor(Math.random() * 1000)}`;
};

/**
 * 过滤任务列表基于关键词
 * @param tasks 任务列表
 * @param keyword 搜索关键词
 * @returns 过滤后的任务列表
 */
export const filterTasksByKeyword = (tasks: Task[], keyword: string): Task[] => {
  if (!keyword.trim()) {
    return tasks;
  }
  
  const lowerKeyword = keyword.toLowerCase();
  return tasks.filter(task => 
    task.content.toLowerCase().includes(lowerKeyword)
  );
};

/**
 * 排序任务列表，已完成的任务排在后面
 * @param tasks 任务列表
 * @returns 排序后的任务列表
 */
export const sortTasksByCompletion = (tasks: Task[]): Task[] => {
  return [...tasks].sort((a, b) => {
    if (a.completed === b.completed) {
      return 0;
    }
    return a.completed ? 1 : -1;
  });
};

/**
 * 获取已完成任务的数量和百分比
 */
export const getTasksStats = (tasks: Task[]) => {
  const completedTasks = tasks.filter(task => task.completed);
  const completedCount = completedTasks.length;
  const totalCount = tasks.length;
  const completionPercentage = totalCount > 0 
    ? Math.round((completedCount / totalCount) * 100) 
    : 0;
  return {
    completedCount,
    totalCount,
    completionPercentage
  };
}; 