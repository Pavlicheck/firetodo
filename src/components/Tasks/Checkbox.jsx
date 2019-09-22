import React from 'react';
import { firebase } from '../../firebase';
import MCheckbox from '@material-ui/core/Checkbox'

const Checkbox = ({ id, archived }) => {
  const archiveTask = () => {
    firebase
      .firestore()
      .collection('tasks')
      .doc(id)
      .update({
          archived: !archived
    })
  }
  return (
    <MCheckbox
      edge="start"
      checked={archived}
      onChange={archiveTask}
      size={'small'}
    />
  );
};

export default Checkbox