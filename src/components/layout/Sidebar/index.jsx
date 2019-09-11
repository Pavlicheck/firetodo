import React from "react";
import {makeStyles} from "@material-ui/core";
import Paper from "@material-ui/core/Paper";
import { TreeView } from '@material-ui/lab';
import { StyledTreeItem } from './TreeItem'
import LocalOfferIcon from '@material-ui/icons/LocalOffer';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import InfoIcon from '@material-ui/icons/Info';
import ForumIcon from '@material-ui/icons/Forum';
import MailIcon from '@material-ui/icons/Mail';
import DeleteIcon from '@material-ui/icons/Delete';
import Label from '@material-ui/icons/Label';
import {FaInbox, FaPlus, FaRegCalendar, FaRegCalendarAlt, FaProjectDiagram} from "react-icons/fa";

const useStyles = makeStyles({
  root: {
    height: 264,
    flexGrow: 1,
    maxWidth: 400,
  },
});

const mainLinks = [
  {label: 'Inbox', icon: FaInbox},
  {label: 'Today', icon: FaRegCalendar},
  {label: 'Week', icon: FaRegCalendarAlt},
]

export const Sidebar = () => {
  const classes = useStyles();
  return (
    <Paper elevation="2" className="sidebar">
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
            nodeId={index}
            labelText={link.label}
            labelIcon={link.icon}
          />)
        )}

        <StyledTreeItem
          nodeId="4"
          labelText="Projects"
          labelIcon={FaProjectDiagram}
          labelInfo={FaPlus}
          color="#1a73e8"
          bgColor="#e8f0fe"
        >
          <StyledTreeItem
            nodeId="6"
            labelText="Updates"
            labelIcon={InfoIcon}
            labelInfo="2,294"
            color="#e3742f"
            bgColor="#fcefe3"
          />
          <StyledTreeItem
            nodeId="7"
            labelText="Forums"
            labelIcon={ForumIcon}
            labelInfo="3,566"
            color="#a250f5"
            bgColor="#f3e8fd"
          />
          <StyledTreeItem
            nodeId="8"
            labelText="Promotions"
            labelIcon={LocalOfferIcon}
            labelInfo="733"
            color="#3c8039"
            bgColor="#e6f4ea"
          />
        </StyledTreeItem>
        <StyledTreeItem nodeId="4" labelText="History" labelIcon={Label} />
      </TreeView>
    </Paper >
  )
};