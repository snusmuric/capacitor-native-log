declare module "@capacitor/core" {
    interface PluginRegistry {
        CAPNativeLog: CAPNativeLogPlugin;
    }
}
export interface CAPNativeLogPlugin {
    log(options: {
        message: string;
        level: string;
    }): void;
}
