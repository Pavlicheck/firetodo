import React, { useState } from 'react';

import DeleteForever from '@material-ui/icons/DeleteForever';


import { StyledTreeItem } from "./TreeItem";
import { useSelectedProjectContext, useProjectsContext } from "../../../context";
import DeleteProjectButton from "./DeleteProjectButton";

export const Projects = ({activeValue = null}) => {
  const [active, setActive] = useState(activeValue);
  const { setSelectedProject } = useSelectedProjectContext();
  const { projects } = useProjectsContext();

  return (
    projects &&
    projects.map((project, index) => (
      <StyledTreeItem
        key={index}
        nodeId={ project.docId }
        data-doc-id={project.docId}
        onClick={() => {
          setActive(project.projectId);
          setSelectedProject(project.projectId);
        }}
        dataTestId="project-action"
        labelText={project.name}
        actionIcon={() => <DeleteProjectButton docId={project.docId}/>}
        color="#e3742f"
        bgColor="#fcefe3"
      />
    ))
  );
};