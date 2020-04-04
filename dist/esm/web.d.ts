import { WebPlugin } from '@capacitor/core';
import { CAPNativeLogPlugin } from './definitions';
export declare class CAPNativeLogWeb extends WebPlugin implements CAPNativeLogPlugin {
    constructor();
    log(options: {
        message: string;
        level: string;
    }): void;
}
declare const CAPNativeLog: CAPNativeLogWeb;
export { CAPNativeLog };
