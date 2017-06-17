export interface DeviceInterface {
    id: string;
    model: string;
    name: string;
    version: string;
    videosources: number;
    connected: boolean;
}

export interface DeviceLargeInterface {
    id: string;
    model: string;
    name: string;
    version: string;
    connected: boolean;
    acl: any;
    alarmzoneid: string;
    audio: any;
    description: string;
    enabled: boolean;
    externalid: string;
    locked: boolean;
    ptz_digital_enabled: string;
    safe_mode: boolean;
    siteid: number;
    statusled: string;
    timezone: string;
    type: string;
    upgradeaction: string;
    upgradestate: string;
    upgradeversion: string;
}