import React, {useEffect} from 'react';

import {useProjects, useTasks} from '../../hooks'
import Paper from "@material-ui/core/Paper";
import List from "@material-ui/core/List";
import Typography from "@material-ui/core/Typography";
import ListSubheader from "@material-ui/core/ListSubheader";

import ListItem from "./ListItem";
import {useProjectsContext, useSelectedProjectContext} from "../../context";
import { collatedTasksExist, getCollatedTitle, getTitle } from "../../helpers";
import {collatedTasks} from "../../constans";
import AddTask from "./AddTask";

const Tasks = () => {
  const { selectedProject } = useSelectedProjectContext();
  const { projects } = useProjectsContext();
  const { tasks } = useTasks(selectedProject);

  let projectName = '';

  if (projects && selectedProject && !collatedTasksExist(selectedProject)) {
    projectName = getTitle(projects, selectedProject).name;
  }

  if (collatedTasksExist(selectedProject) && selectedProject) {
    projectName = getCollatedTitle(collatedTasks, selectedProject).name;
  }

  useEffect(() => {
    document.title = `${projectName}`
  });

  return (
    <Paper elevation={2} className='tasks' dataTestid="tasks">
      <AddTask/>
      <List className="tasks-list">
        <ListSubheader component="div" id="nested-list-subheader">
          <Typography dataTestid='project-name' variant="h6" component="h6">{projectName}</Typography>
        </ListSubheader>
        { tasks.map(task => <ListItem key={task.id} {...task}/>) }
      </List>
    </Paper>
  );
};

export default Tasks