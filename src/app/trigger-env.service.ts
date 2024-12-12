import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TriggerEnvService {

  private config: any;

  constructor() {
    this.config = window.runtimeConfig || {}; // Access the runtime config loaded in index.html
  }

  getConfig(key: string): string {
    return this.config[key] || null; // Return the requested config value or null if it doesn't exist
  }
}
