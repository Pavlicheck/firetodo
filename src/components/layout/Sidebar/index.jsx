import React, {useState} from "react";
import {makeStyles} from "@material-ui/core";
import Paper from "@material-ui/core/Paper";
import { TreeView } from '@material-ui/lab';
import { StyledTreeItem } from './TreeItem'
import LocalOfferIcon from '@material-ui/icons/LocalOffer';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import ForumIcon from '@material-ui/icons/Forum';
import MailIcon from '@material-ui/icons/Mail';
import DeleteIcon from '@material-ui/icons/Delete';
import Label from '@material-ui/icons/Label';
import {FaInbox, FaPlus, FaRegCalendar, FaRegCalendarAlt, FaProjectDiagram} from "react-icons/fa";
import {useSelectedProjectContext} from "../../../context";
import { Projects } from './Projects'

const useStyles = makeStyles({
  root: {
    height: 264,
    flexGrow: 1,
    maxWidth: 400,
  },
});

const mainLinks = [
  {label: 'Inbox', icon: FaInbox, projectId: 'INBOX'},
  {label: 'Today', icon: FaRegCalendar, projectId: 'TODAY'},
  {label: 'Week', icon: FaRegCalendarAlt, projectId: 'WEEK'},
]

export const Sidebar = () => {
  const { setSelectedProject } = useSelectedProjectContext();
  const [active, setAcive] = useState('INBOX');
  const [showProject, setShowProject] = useState(true);

  const classes = useStyles();
  return (
    <Paper elevation={2} className="sidebar">
      <TreeView
        className={classes.root}
        defaultExpanded={['3']}
        defaultCollapseIcon={<ArrowDropDownIcon />}
        defaultExpandIcon={<ArrowRightIcon />}
        defaultEndIcon={<div style={{ width: 24 }} />}
      >
        { mainLinks.map((link, index) => (
          <StyledTreeItem
            key={index}
            nodeId={`${index}`}
            labelText={link.label}
            labelIcon={link.icon}
            onClick={() => {
              setSelectedProject(link.projectId);
              setAcive(link.projectId);
            }}
          />)
        )}

        <StyledTreeItem
          nodeId="4"
          labelText="Projects"
          labelIcon={FaProjectDiagram}
          labelInfo={'+'}
          color="#1a73e8"
          bgColor="#e8f0fe"
        >
          <Projects />
        </StyledTreeItem>
        <StyledTreeItem nodeId="12" labelText="History" labelIcon={Label} />
      </TreeView>
    </Paper >
  )
};