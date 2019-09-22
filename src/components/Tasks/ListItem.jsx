import React from 'react';

import Checkbox from './Checkbox'
import ListItemIcon from "@material-ui/core/ListItemIcon";
import MListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";

const ListItem = ({id, task, date, arhived}) => {

  return (
    <MListItem dense>
      <ListItemIcon>
        <Checkbox id={id} archived={arhived} />
      </ListItemIcon>
      <ListItemText id={id}>{ task }</ListItemText>
      <ListItemSecondaryAction>
        date: {date}
      </ListItemSecondaryAction>
    </MListItem>
  );
};

export default ListItem;
