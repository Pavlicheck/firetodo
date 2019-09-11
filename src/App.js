import React from 'react';
import { Header } from './components/layout/Header'
import { Content } from './components/layout/Content'
import 'normalize.css';
import './App.scss'

export const App = () => (
    <div className="App">
      <Header/>
      <Content/>
    </div>
  );