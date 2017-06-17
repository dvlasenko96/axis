import { DeviceLargeInterface } from '../../models/device';
import { SiteInterface } from '../../models/site';
import { DeviceService } from '../../services/device';
import { SiteService } from '../../services/site';
import DevicesContainer from '../devices';

import * as React from 'react';
import {
    Table,
    TableHeader,
    TableRow,
    TableHeaderColumn,
    TableBody,
    TableRowColumn,
    RaisedButton,
    Dialog,
    CircularProgress,
} from 'material-ui';

interface Props { }
interface State {
    /**
     * Array with sites
     */
    sites: SiteInterface[];

    /**
     * Use for detect, which devices do we need to load
     */
    siteDialogId: number | null;

    /**
     * Array with devices, that we reveive from service
     */
    devices: DeviceLargeInterface[];
}

class SitesContainer extends React.Component<Props, State> {
    constructor() {
        super();

        this.state = {
            sites: [],
            siteDialogId: null,
            devices: [],
        };

        this._renderSites = this._renderSites.bind(this);
    }

    /**
     * Retreive sites after loading component
     */
    componentDidMount() {
        SiteService.getSites().then((sites: SiteInterface[]) => {
            this.setState({
                sites: sites,
            });
        });
    }

    render() {
        return (
            <div>
                {this._renderSites()}
            </div>
        );
    }

    /**
     * Handle for open devices popup
     */
    handleOpen = (site: SiteInterface) => {
        const devices = Object.keys(site.devices).map(key => site.devices[key]);

        DeviceService.getDevices(devices)
            .then((_devices: DeviceLargeInterface[]) => {
                this.setState({
                    devices: _devices,
                });
            });
        this.setState({ siteDialogId: site.id });
    }

    /**
     * Handle for close devices popup
     * We need to set devices array as empty, and remove siteDialogId for hide dialog
     */
    handleClose = () => {
        this.setState({ devices: [], siteDialogId: null });
    }

    private _renderSites(): JSX.Element {
        const content: JSX.Element[] = [];
        /**
         * Show loader, if we don't have sites
         */
        if (!this.state.sites.length) {
            return (
                <div style={{ textAlign: 'center', margin: '50px 0' }}>
                    <CircularProgress size={80} thickness={5} />
                </div>
            );
        }

        this.state.sites.forEach(site => {
            content.push(
                <TableRow key={site.id} style={{ cursor: 'pointer' }}>
                    <TableRowColumn>{site.id}</TableRowColumn>
                    <TableRowColumn>{site.name}</TableRowColumn>
                    <TableRowColumn>{site.description}</TableRowColumn>
                    <TableRowColumn>{site.externalid}</TableRowColumn>
                    <TableRowColumn>
                        <RaisedButton label="Retrieve" onTouchTap={() => this.handleOpen(site)} />
                        <Dialog
                            title={`Devices for "${site.name}" site`}
                            modal={false}
                            open={this.state.siteDialogId === site.id}
                            onRequestClose={this.handleClose}
                            autoScrollBodyContent={true}
                            autoDetectWindowHeight={true}
                        >
                            {(this.state.siteDialogId === site.id) && <DevicesContainer devices={this.state.devices} />}
                        </Dialog>
                    </TableRowColumn>
                </TableRow>
            );
        });

        return (
            <Table>
                <TableHeader adjustForCheckbox={false} displaySelectAll={false} enableSelectAll={false}>
                    <TableRow>
                        <TableHeaderColumn>ID</TableHeaderColumn>
                        <TableHeaderColumn>Name</TableHeaderColumn>
                        <TableHeaderColumn>Description</TableHeaderColumn>
                        <TableHeaderColumn>External ID</TableHeaderColumn>
                        <TableHeaderColumn>Devices</TableHeaderColumn>
                    </TableRow>
                </TableHeader>
                <TableBody displayRowCheckbox={false}>
                    {content}
                </TableBody>
            </Table>
        );
    }
}

export default SitesContainer;
