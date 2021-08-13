import { IonicNativePlugin } from '@ionic-native/core';
export interface LoginEvent {
    sessionId: string;
    userParam1: string;
    userParam2: string;
    userParam3: string;
    userParam4: string;
}
export declare class OFDHeartbeat extends IonicNativePlugin {
    start(clientId: string): Promise<number>;
    sendLoginEvent(params: LoginEvent): Promise<void>;
}
