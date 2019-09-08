import firebase from 'firebase';

import { config } from './config/firebaseConfig'

const firebaseConfig = firebase.initializeApp(config);

export { firebaseConfig as firebase} ;