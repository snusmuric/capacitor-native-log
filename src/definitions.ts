declare module "@capacitor/core" {
  interface PluginRegistry {
    CAPNativeLog: CAPNativeLogPlugin;
  }
}

export interface CAPNativeLogPlugin {
  log(message: string, level: string): void;
}
