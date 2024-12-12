export {};

declare global {
  interface Window {
    runtimeConfig: Record<string, any>;
  }
}