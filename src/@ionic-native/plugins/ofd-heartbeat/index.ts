import { Injectable } from '@angular/core';
import { Cordova, IonicNativePlugin, Plugin } from '@ionic-native/core';

export interface LoginEvent {
  sessionId: string;
  userParam1: string;
  userParam2: string;
  userParam3: string;
  userParam4: string;
}

export interface Info {
  digest: string;
  location: {
    latitude: number;
    longitude: number;
    accuracy: number;
    timestamp: number;
  };
  emulator: boolean;
  isRoot: boolean;
}

@Plugin({
  pluginName: 'OFDHeartbeat',
  plugin: 'cordova-plugin-ofd-hearbeat',
  pluginRef: 'window.OFDHeartbeat',
  repo: 'https://github.com/credisis/cordova-plugin-ofd-heartbeat.git',
  platforms: ['Android', 'iOS']
})
@Injectable()
export class OFDHeartbeat extends IonicNativePlugin {
  @Cordova()
  start(clientId: string): Promise<number> { return; }

  @Cordova()
  sendLoginEvent(params: LoginEvent): Promise<void> { return; }

  @Cordova()
  getInfo(): Promise<Info> { return; }
}
