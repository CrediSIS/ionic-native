import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cordova, IonicNativePlugin, Plugin } from '@ionic-native/core';

@Plugin({
  pluginName: 'OFDHeartbeat',
  plugin: 'cordova-plugin-ofd-hearbeat',
  pluginRef: 'cordova.plugins.OFDHeartbeat',
  repo: 'https://github.com/credisis/cordova-plugin-ofd-heartbeat.git',
  platforms: ['Android'], // ['Android', 'iOS']
})
@Injectable()
export class OFDHeartbeat extends IonicNativePlugin {
  @Cordova({ observable: true })
  start(clientId: string): Observable<number> { return; }
}
