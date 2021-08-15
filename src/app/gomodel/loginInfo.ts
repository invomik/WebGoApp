import {UserParams} from './userParams';

export interface LoginInfo {
  user?: UserParams;
  error?: Error;
  sessionId?: string|null;
}
