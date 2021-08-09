import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cordova, IonicNativePlugin, Plugin } from '@ionic-native/core';

export interface LoginEvent {
  SESSION_ID: string;
  USER_PARAM1: string;
  USER_PARAM2: string;
  USER_PARAM3: string;
  USER_PARAM4: string;
}

@Plugin({
  pluginName: 'OFDHeartbeat',
  plugin: 'cordova-plugin-ofd-hearbeat',
  pluginRef: 'cordova.plugins.OFDHeartbeat',
  repo: 'https://github.com/credisis/cordova-plugin-ofd-heartbeat.git',
  platforms: ['Android', 'iOS']
})
@Injectable()
export class OFDHeartbeat extends IonicNativePlugin {
  @Cordova({ observable: true })
  start(clientId: string): Observable<number> { return; }

  @Cordova({ observable: true, platforms: ['Android'] })
  sendLoginEvent(params: LoginEvent): Observable<void> { return; }
}
