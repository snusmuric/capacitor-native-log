import { WebPlugin } from '@capacitor/core';
import { CAPNativeLogPlugin } from './definitions';

export class CAPNativeLogWeb extends WebPlugin implements CAPNativeLogPlugin {
  constructor() {
    super({
      name: 'CAPNativeLog',
      platforms: ['web']
    });
  }

  async echo(options: { value: string }): Promise<{value: string}> {
    console.log('ECHO', options);
    return options;
  }
}

const CAPNativeLog = new CAPNativeLogWeb();

export { CAPNativeLog };

import { registerWebPlugin } from '@capacitor/core';
registerWebPlugin(CAPNativeLog);
