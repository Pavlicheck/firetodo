import React, { useState } from "react";
import {
  Box,
  Button,
  TextField,
  InputBase,
  Select,
  makeStyles
} from "@material-ui/core";
import { firebase } from "../../firebase";

import AddTaskForm from "./AddTaskForm";

const AddTask = () => {
  const [showForm, setShowForm] = useState(false);

  const addTask = ({date = '', projectId, task}) => {
    task &&
    projectId &&
    firebase
      .firestore()
      .collection('tasks')
      .add({
        projectId,
        date,
        task,
        archived: false,
        userId: 'testUser'
      })
  }

  const AddTaskButton = () => (
    <Button
      variant="contained"
      color="primary"
      onClick={setShowForm.bind(null, true)}
    >
      Add task
    </Button>
  );

  return (
    <Box p={2}>
      {!showForm && AddTaskButton()}
      {showForm && (
        <AddTaskForm
          cancel={setShowForm.bind(null, false)}
          addTask={addTask}
        />
      )}
    </Box>
  );
};

export default AddTask;
