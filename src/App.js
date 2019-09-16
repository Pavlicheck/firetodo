import React from 'react';
import {ProjectsProvider, SelectProjectProvider} from "./context";
import { Header } from './components/layout/Header'
import { Content } from './components/layout/Content'
import 'normalize.css';
import './App.scss'

export const App = () => (
  <SelectProjectProvider>
    <ProjectsProvider>
      <div className="App">
        <Header/>
        <Content/>
      </div>
    </ProjectsProvider>
  </SelectProjectProvider>
  );