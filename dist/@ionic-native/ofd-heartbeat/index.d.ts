import { Observable } from 'rxjs';
import { IonicNativePlugin } from '@ionic-native/core';
export declare class OFDHeartbeat extends IonicNativePlugin {
    start(clientId: string): Observable<number>;
}
