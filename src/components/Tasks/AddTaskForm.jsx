import React, { useState } from "react";
import { Box, Button, makeStyles, Select, TextField } from "@material-ui/core";
import moment from "moment";
import { useProjectsContext, useSelectedProjectContext } from "../../context";
import MenuItem from "@material-ui/core/MenuItem";

const useStyles = makeStyles({
  input: {
    "& input": {
      padding: "8px"
    }
  },
  select: {
    padding: "4px"
  }
});

const AddTaskForm = ({ cancel, addTask }) => {
  const classes = useStyles();
  const [task, setTask] = useState("");
  const [project, setProject] = useState("");
  const [selectedDate, setSelectedDate] = useState(
    moment().format("YYYY-MM-DD")
  );
  const { projects } = useProjectsContext();
  const { selectedProject } = useSelectedProjectContext();

  const handleDateChange = e => setSelectedDate(e.target.value);
  const handleSetTask = e => {
    setTask(e.target.value);
  };
  const handleProjectChange = e => {
    const id = e.target.value;
    if (id === "INBOX") {
      setSelectedDate("");
    } else if (id === "TODAY") {
      setSelectedDate(moment().format("YYYY-MM-DD"));
    } else if (id === "WEEK") {
      setSelectedDate(
        moment()
          .add(7, "days")
          .format("YYYY-MM-DD")
      );
    }
    setProject(id);
  };

  const handleAddTask = (e) => {
    e.preventDefault();
    const projectId = project || selectedProject;
    addTask({
      projectId,
      date: selectedDate,
      task: task.trim()
    })

  };

  return (
    <form onSubmit={handleAddTask}>
      <Box display="flex">
        <Box width={4 / 8}>
          <TextField
            className={classes.input}
            value={task}
            onChange={handleSetTask}
            fullWidth={true}
            variant="outlined"
            required={true}
          />
        </Box>
        <Box width={1 / 8} pr={5} pl={1}>
          <TextField
            onChange={handleDateChange}
            variant="outlined"
            className={classes.input}
            type="date"
            value={selectedDate}
            InputLabelProps={{
              shrink: true
            }}
          />
        </Box>
        <Box px={1} width={1 / 8}>
          <Select
            value={selectedProject}
            onChange={handleProjectChange}
            variant="outlined"
            fullWidth={true}
            classes={{
              selectMenu: classes.select
            }}
            className={classes.select}
            inputProps={{
              name: "age",
              id: "age-simple"
            }}
          >
            <MenuItem value={"INBOX"}>Inbox</MenuItem>
            <MenuItem value={"TODAY"}>Today</MenuItem>
            <MenuItem value={"WEEK"}>Week</MenuItem>
            {projects &&
              projects.map(project => (
                <MenuItem key={project.projectId} value={project.projectId}>
                  {project.name}
                </MenuItem>
              ))}
          </Select>
        </Box>

        <Button color="primary" type="submit">
          Add
        </Button>

        <Button color="secondary" onClick={cancel}>
          Cancel
        </Button>
      </Box>
    </form>
  );
};

export default AddTaskForm;
