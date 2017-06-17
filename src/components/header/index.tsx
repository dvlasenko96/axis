import * as React from 'react';
import { AppBar } from 'material-ui';

interface Props { }
interface State { }

class Header extends React.Component<Props, State> {
    render() {
        return (
            <AppBar
                title="AXIS"
                showMenuIconButton={false}
            />
        );
    }
}

export default Header;
