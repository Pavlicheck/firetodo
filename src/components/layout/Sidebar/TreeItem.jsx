import React from "react";
import {makeStyles} from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import TreeItem from "@material-ui/lab/TreeItem";

const useTreeItemStyles = makeStyles(theme => ({
  root: {
    color: theme.palette.text.secondary,
    '&:focus > $content': {
      backgroundColor: `var(--tree-view-bg-color, ${theme.palette.grey[400]})`,
      color: 'var(--tree-view-color)',
    },
  },
  content: {
    width: 'auto',
    color: theme.palette.text.secondary,
    fontWeight: theme.typography.fontWeightMedium,
    '$expanded > &': {
      fontWeight: theme.typography.fontWeightRegular,
    },
  },
  group: {
    marginLeft: 0,
    '& $content': {
      paddingLeft: theme.spacing(2),
    },
  },
  expanded: {},
  label: {
    fontWeight: 'inherit',
    color: 'inherit',
  },
  labelRoot: {
    display: 'flex',
    alignItems: 'center',
    maxWidth: '85%',
    padding: theme.spacing(0.5, 0),
  },
  labelIcon: {
    marginRight: theme.spacing(1),
  },
  labelText: {
    fontWeight: 'inherit',
    flexGrow: 1,
  },
  actionIcon: {
    opacity: 0,
    transition: '.3s',
    '$content:hover &': {
      opacity: 1
    }
  }
}));

export const StyledTreeItem = props => {
  const classes = useTreeItemStyles();
  const { labelText, labelIcon: LabelIcon, labelInfo, actionIcon: ActionIcon, color, bgColor, onClick, ...other } = props;
  return (
    <TreeItem
      selected={true}
      label={
        <div className={classes.labelRoot}>
          { LabelIcon && <LabelIcon color="inherit" className={classes.labelIcon} /> }
          <Typography variant="body2" className={classes.labelText} onClick={onClick}>
            {labelText}
          </Typography>
          <Typography variant="caption" color="inherit">
            {labelInfo}
          </Typography>
          { ActionIcon && <span className={classes.actionIcon}><ActionIcon/></span> }
        </div>

      }
      style={{
        '--tree-view-color': color,
        '--tree-view-bg-color': bgColor,
      }}
      classes={{
        root: classes.root,
        content: classes.content,
        expanded: classes.expanded,
        group: classes.group,
        label: classes.label,
      }}
      {...other}
    />
  );
};