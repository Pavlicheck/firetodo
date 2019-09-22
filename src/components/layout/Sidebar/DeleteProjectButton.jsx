import React, {useEffect, useState} from 'react';

import { firebase } from "../../../firebase";
import { useProjectsContext, useSelectedProjectContext } from "../../../context";
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';
import Tooltip from "@material-ui/core/Tooltip";
import IconButton from "@material-ui/core/IconButton";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";

const DeleteProjectButton = ({docId}) => {
  const [showConfirm, setShowConfirm] = useState(false);
  const { projects, setProjects } = useProjectsContext();
  const { selectedProject, setSelectedProject } = useSelectedProjectContext();

  useEffect(() => {
    document.body.addEventListener('click', handleConfirmClose)
    return () => document.body.removeEventListener('click', handleConfirmClose)
  }, [])

  const handleConfirmClose = () => setShowConfirm(false);

  const handleConfirmOpen = () => setShowConfirm(true);

  const deleteProject = () => {
    firebase
      .firestore()
      .collection('projects')
      .doc(docId)
      .delete()
      .then(() => {
        setProjects([...projects]);
        setSelectedProject('INBOX');
      })
  };
  return (
    <div>
      <Tooltip
        onClose={handleConfirmClose}
        open={showConfirm}
        disableFocusListener
        disableHoverListener
        disableTouchListener
        placement="right"
        interactive={true}
        title={
          <Box display='flex'>
            <Button color="secondary" onClick={deleteProject}>
              Delete
            </Button>
            <Button onClick={handleConfirmClose} color="primary">
              Cancel
            </Button>
          </Box>
        }
      >
        <IconButton size={'small'} onClick={handleConfirmOpen} aria-label="delete">
          <DeleteOutlineIcon />
        </IconButton>
      </Tooltip>
    </div>
  );
};

export default DeleteProjectButton;
