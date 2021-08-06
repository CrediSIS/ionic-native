import { Observable } from 'rxjs';
import { IonicNativePlugin } from '@ionic-native/core';
export interface LoginEvent {
    SESSION_ID: string;
    USER_PARAM1: string;
    USER_PARAM2: string;
    USER_PARAM3: string;
    USER_PARAM4: string;
}
export declare class OFDHeartbeat extends IonicNativePlugin {
    start(clientId: string): Observable<number>;
    sendLoginEvent(params: LoginEvent): Observable<void>;
}
