import React from 'react';

import { useTasks } from '../hooks'
import { Checkbox } from "./Checkbox";
import Paper from "@material-ui/core/Paper";
import ListItemText from "@material-ui/core/ListItemText";
import ListItem from "@material-ui/core/ListItem";
import List from "@material-ui/core/List";
import Typography from "@material-ui/core/Typography";
import ListSubheader from "@material-ui/core/ListSubheader";

export const Tasks = () => {
  const { tasks } = useTasks('1')
  console.log(tasks);

  const projectName = 'projectName';

  return (
    <Paper elevation={2} className='tasks' data-testid="tasks">

      <List className="tasks-list">
        <ListSubheader component="div" id="nested-list-subheader">
          <Typography data-testid='project-name' variant="h6" component="h6">{projectName}</Typography>
        </ListSubheader>
        {
          tasks.map(task => (
            <ListItem key={task.id}>
              <Checkbox id={task.id}/>
              <ListItemText>{task.task}</ListItemText>
            </ListItem>
          ))
        }
      </List>
    </Paper>
  );
};
