import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cordova, IonicNativePlugin, Plugin } from '@ionic-native/core';

@Plugin({
  pluginName: 'OFDHeartbeat',
  plugin: 'cordova-plugin-ofd-hearbeat',
  pluginRef: 'OFDHeartbeat',
  repo: 'https://github.com/credisis/cordova-plugin-ofd-heartbeat.git',
  install: 'ionic cordova plugin add cordova-plugin-ofd-heartbeat --variable HEARTBEAT_ANDROID_ACCESS_KEY=android_access_key --HEARTBEAT_ANDROID_SECRET_KEY=android_secret_key',
  installVariables: ['HEARTBEAT_ANDROID_ACCESS_KEY', 'HEARTBEAT_ANDROID_SECRET_KEY'],
  platforms: ['Android'], // ['Android', 'iOS']
})
@Injectable()
export class OFDHeartbeat extends IonicNativePlugin {
  @Cordova({ observable: true })
  start(clientId: string): Observable<number> {
    return;
  }
}
