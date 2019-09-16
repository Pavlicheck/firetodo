import React, { createContext, useContext, useState } from 'react';

export const SelectProjectContext = createContext();
export const SelectProjectProvider = ({ children }) => {
  const { selectProject, setSelectProject } = useState('INBOX');

  return (
    <SelectProjectContext.Provider value={{selectProject, setSelectProject}}>
      { children }
    </SelectProjectContext.Provider>
  )
};

export const useSelectProjectContext = () => useContext(SelectProjectContext);