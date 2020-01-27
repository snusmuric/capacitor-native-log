import { WebPlugin } from '@capacitor/core';
import { CAPNativeLogPluginPlugin } from './definitions';

export class CAPNativeLogPluginWeb extends WebPlugin implements CAPNativeLogPluginPlugin {
  constructor() {
    super({
      name: 'CAPNativeLogPlugin',
      platforms: ['web']
    });
  }

  async echo(options: { value: string }): Promise<{value: string}> {
    console.log('ECHO', options);
    return options;
  }
}

const CAPNativeLogPlugin = new CAPNativeLogPluginWeb();

export { CAPNativeLogPlugin };

import { registerWebPlugin } from '@capacitor/core';
registerWebPlugin(CAPNativeLogPlugin);
