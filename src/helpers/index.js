import { collatedTasks } from '../constans';

export const collatedTasksExist = selectProject => collatedTasks.find(task => task.key === selectProject)