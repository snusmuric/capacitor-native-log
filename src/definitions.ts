declare module "@capacitor/core" {
  interface PluginRegistry {
    CAPNativeLogPlugin: CAPNativeLogPluginPlugin;
  }
}

export interface CAPNativeLogPluginPlugin {
  echo(options: { value: string }): Promise<{value: string}>;
}
