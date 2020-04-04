import { WebPlugin } from '@capacitor/core';
export class CAPNativeLogWeb extends WebPlugin {
    constructor() {
        super({
            name: 'CAPNativeLog',
            platforms: ['web']
        });
    }
    log(options) {
        const { message, level } = options;
        switch (level.toLowerCase()) {
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
                console.debug(message);
        }
    }
}
const CAPNativeLog = new CAPNativeLogWeb();
export { CAPNativeLog };
import { registerWebPlugin } from '@capacitor/core';
registerWebPlugin(CAPNativeLog);
//# sourceMappingURL=web.js.map