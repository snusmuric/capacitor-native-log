declare module "@capacitor/core" {
  interface PluginRegistry {
    CAPNativeLog: CAPNativeLogPlugin;
  }
}

export interface CAPNativeLogPlugin {
  log(...value: string[]): void;
  debug(...value: string[]): void;
  info(...value: string[]): void;
  warn(...value: string[]): void;
  error(...value: string[]): void;
}
