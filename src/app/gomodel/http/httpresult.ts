import {Error} from '../error';

export interface Httpresult {
  error?: Error;
  data?: any;
}
