import { useState, useEffect } from 'react';
import moment from 'moment';

import { firebase } from '../firebase';
import { collatedTasksExist } from '../helpers';

export const useTasks = selectedProject => {
  const [tasks, setTasks] = useState([]);
  const [archivedTasks, setArchivedTasks] = useState([]);

  useEffect (() => {
    let unsubscribe = firebase
      .firestore()
      .collection('tasks')
      .where('userId', '==', 'testUser')
    console.log(selectedProject)
    if (selectedProject && !collatedTasksExist(selectedProject)) {
      unsubscribe = unsubscribe.where('projectId', '==', selectedProject)
    } else {
      switch (selectedProject) {
        case 'TODAY':
          unsubscribe = unsubscribe.where('date', '==', moment().format('YYYY-MM-DD'));
          break;
        case 'INBOX':
          unsubscribe = unsubscribe.where('date', '==', '');
          break;
        default:
          unsubscribe = unsubscribe.where('date', '==', '');
      }
    }

    unsubscribe = unsubscribe.onSnapshot(snapshot => {
      const newTasks = snapshot.docs.map(
        task => ({
          id: task.id,
          ...task.data()
        })
      );
      setTasks(
        selectedProject === 'WEEK'
          ? newTasks.filter(
          task => moment(task.data, 'DD-MM-YYYY').diff(moment(), 'days') < 7 && task.archive !== true
          )
          : newTasks.filter(task => task.archive !== true)
      );
      setArchivedTasks(
        newTasks.filter(task => task.archive === true)
      );
    });

    return () => unsubscribe()
  }, [selectedProject])
  return { tasks, archivedTasks }
};

export const useProjects = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    firebase
      .firestore()
      .collection('projects')
      .where('userId', '==', 'testUser')
      .orderBy('projectId')
      .get()
      .then(snapshot => {
        const allProjects = snapshot.docs.map(project => ({
          ...project.data(),
          docId: project.id
        }));
        if (JSON.stringify(allProjects) !== JSON.stringify(projects)) {
          setProjects(allProjects)
        }
      });
  }, [projects]);

  return { projects, setProjects }
};

