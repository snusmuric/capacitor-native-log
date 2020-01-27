import { WebPlugin } from '@capacitor/core';
import { CAPNativeLogPlugin } from './definitions';

export class CAPNativeLogWeb extends WebPlugin implements CAPNativeLogPlugin {
  constructor() {
    super({
      name: 'CAPNativeLog',
      platforms: ['web']
    });
  }

  log(message: string, level: string): void {
    switch(level.toLowerCase()) {
      case 'info':
        console.info(message);
        break;
      case 'warn':
        console.warn(message);
        break;
      case 'error':
        console.error(message);
        break;
      default:
        console.debug(message)
    }
  }
}

const CAPNativeLog = new CAPNativeLogWeb();

export { CAPNativeLog };

import { registerWebPlugin } from '@capacitor/core';
registerWebPlugin(CAPNativeLog);
