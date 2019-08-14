import fireBase from 'firebase/app';
import 'firebase/database';
import config from '../config';

fireBase.initializeApp(config.firebase);

export const db = fireBase.database();
