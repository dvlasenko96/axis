import { DeviceInterface } from '../device';

export interface SiteInterface {
    id: number;
    name: string;
    description: string;
    externalid: string;
    devices: {
        [id: number]: DeviceInterface;
    };
}