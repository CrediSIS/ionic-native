var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cordova, IonicNativePlugin, Plugin } from '@ionic-native/core';
var OFDHeartbeat = (function (_super) {
    __extends(OFDHeartbeat, _super);
    function OFDHeartbeat() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    OFDHeartbeat.prototype.start = function (clientId) { return; };
    OFDHeartbeat.prototype.sendLoginEvent = function (params) { return; };
    OFDHeartbeat.decorators = [
        { type: Injectable },
    ];
    __decorate([
        Cordova({ observable: true }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String]),
        __metadata("design:returntype", Observable)
    ], OFDHeartbeat.prototype, "start", null);
    __decorate([
        Cordova({ observable: true, platforms: ['Android'] }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", Observable)
    ], OFDHeartbeat.prototype, "sendLoginEvent", null);
    OFDHeartbeat = __decorate([
        Plugin({
            pluginName: 'OFDHeartbeat',
            plugin: 'cordova-plugin-ofd-hearbeat',
            pluginRef: 'cordova.plugins.OFDHeartbeat',
            repo: 'https://github.com/credisis/cordova-plugin-ofd-heartbeat.git',
            platforms: ['Android', 'iOS']
        })
    ], OFDHeartbeat);
    return OFDHeartbeat;
}(IonicNativePlugin));
export { OFDHeartbeat };
//# sourceMappingURL=index.js.map