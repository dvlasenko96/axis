import { UserConst } from '../../configs/user';
import { DeviceInterface } from '../../models/device';

import 'whatwg-fetch';
import * as queryString from 'query-string';

class Device {
    /**
     * Fuction, that receive large device information
     * @param ids array with device ids, that we received from site
     */
    getDevices(ids: DeviceInterface[]) {
        const data = {
            api: 'JSON',
            a: 'retrieve',
            u: UserConst.username,
            p: UserConst.password,
            'deviceid[]': ids.map(device => device.id),
        };
        /**
         * Change format of string for get request
         */
        const req = queryString.stringify(data);
        return fetch(`http://dev-api.avhs.axis.com/device.php?${req}`)
            .then(res => {
                return res.json();
            })
            .then(res => {
                return Object.keys(res.devices).map(key => res.devices[key]);
            })
            .catch(err => {
                console.error(err);
            });
    }
}

export const DeviceService = new Device();