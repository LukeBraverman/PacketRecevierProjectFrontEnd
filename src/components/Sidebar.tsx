import './Sidebar.css';
import Switch from "@mui/material/Switch";


function Sidebar()

    {
        const label = { inputProps: { 'aria-label': 'Switch demo' } };

        return (

            <div className="sidebar">
                <p>Packet Viewer App</p>
                <div className="connectionTest">
                    <p>Connected</p>
                    <Switch {...label} disabled defaultChecked />
                </div>

            </div>
        )
    }

    export default Sidebar;