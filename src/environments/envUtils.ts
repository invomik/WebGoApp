import {environment} from './environment';

export class EnvUtils {

  static getServiceUrl(): string {
    return environment.production ? `http://${window.location.host}/RestWebGoApp` : environment.serviceUrl;
  }

}
