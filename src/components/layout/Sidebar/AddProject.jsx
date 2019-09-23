import React, { useState } from 'react';
import TextField from "@material-ui/core/TextField";
import AddIcon from "@material-ui/icons/Add";
import IconButton from "@material-ui/core/IconButton";
import {Box} from "@material-ui/core";

import { generatePushID } from '../../../helpers'
import { firebase } from "../../../firebase";
import {useProjectsContext} from "../../../context";

const AddProject = () => {
  const [name, setName] = useState('');
  const { setProjects } = useProjectsContext();

  const handlerAddProject = (e) => {
    e.preventDefault();
    if (!name) return;

    firebase
      .firestore()
      .collection('projects')
      .add({
        projectId: generatePushID(),
        userId: 'testUser',
        name,
      })
      .then(() => {
        setProjects([])
      })
    setName('');
  };

  return (
    <form onSubmit={handlerAddProject} style={{paddingLeft: '10px'}}>
      <TextField
        value={name}
        onChange={(e) => setName(e.target.value)}
        margin='dense'
        label="Add new project"
        InputProps={{
          endAdornment: (
            <IconButton
              size='small'
              onClick={handlerAddProject}
            >
              <AddIcon />
            </IconButton>
          )
        }}
      />
    </form>
  );
};

export default AddProject;
