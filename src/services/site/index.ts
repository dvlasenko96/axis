import { UserConst } from '../../configs/user';

import 'whatwg-fetch';
import * as queryString from 'query-string';

class Site {
    getSites() {
        const data = {
            api: 'JSON',
            a: 'retrieve',
            u: UserConst.username,
            p: UserConst.password,
        };
        const req = queryString.stringify(data);
        return fetch(`http://dev-api.avhs.axis.com/site.php?${req}`)
            .then(res => {
                return res.json();
            })
            .then(res => {
                return Object.keys(res.sites).map(key => res.sites[key]);
            })
            .catch(err => {
                console.error(err);
            });
    }
}

export const SiteService = new Site();