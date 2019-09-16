import React, { useState } from 'react';

import InfoIcon from "@material-ui/core/SvgIcon/SvgIcon";

import {StyledTreeItem} from "./TreeItem";
import { useSelectProjectContext, useProjectsContext } from "../../../context";

export const Projects = ({activeValue = null}) => {
  const [active, setActive] = useState(activeValue);
  const { setSelectedProject } = useSelectProjectContext();
  const { projects } = useProjectsContext();

  return (
    projects &&
    projects.map((project, index) => (
      <StyledTreeItem
        key={project.projectId}
        nodeId={ `${index}` }
        data-doc-id={project.docId}
        onClick={() => {
          setActive(project.projectId);
          setSelectedProject(project.projectId);
        }}
        data-testId="project-action"
        labelText={project.name}
        labelIcon={InfoIcon}
        color="#e3742f"
        bgColor="#fcefe3"
      />
    ))
  );
};