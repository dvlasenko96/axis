import { DeviceLargeInterface } from '../../models/device';

import * as React from 'react';
import { Card, CardHeader, CardText, CircularProgress } from 'material-ui';

interface Props {
    devices: DeviceLargeInterface[];
}
interface State {
    devices: DeviceLargeInterface[];
}

class DevicesContainer extends React.PureComponent<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {
            devices: props.devices,
        };
    }

    componentWillReceiveProps(newProps: Props) {
        this.setState({
            devices: newProps.devices,
        });
    }

    render() {
        if (!this.state.devices.length) {
            return (
                <div style={{ textAlign: 'center' }}>
                    <CircularProgress size={80} thickness={5} />
                </div>
            );
        }

        return (
            <div>
                {this.state.devices.map(device => {
                    return (
                        <Card key={device.id} style={{ marginTop: '20px' }}>
                            <CardHeader
                                title={device.name}
                                subtitle={`id: ${device.id}`}
                                actAsExpander={false}
                                showExpandableButton={false}
                            />
                            <CardText expandable={false}>
                                <div>
                                    {Object.keys(device).map(key => {
                                        if (typeof device[key] === 'object' || device[key] === '') {
                                            return null;
                                        }
                                        return (
                                            <div key={key}>{key}: {device[key].toString()}</div>
                                        );
                                    })}
                                </div>
                            </CardText>
                        </Card>
                    );
                })}
            </div>
        );
    }
}

export default DevicesContainer;
