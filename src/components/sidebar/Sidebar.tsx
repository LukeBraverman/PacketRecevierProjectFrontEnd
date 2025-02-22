import './Sidebar.css';
import Switch from "@mui/material/Switch";
import {useEffect, useState} from "react";

interface SidebarProps {
    serverIp: string;
}
function Sidebar({serverIp}: SidebarProps)
    {
        const SERVER_IP: string = serverIp;
        const label = { inputProps: { 'aria-label': 'Switch demo' } };
        const [isBackendAlive, setIsBackendAlive] = useState(false);

        useEffect(() => {
            const checkBackend = () => {
                console.log('sending heartbeat!')
                fetch(`http://${SERVER_IP}:8080/health`)
                    .then(response => {
                        if (response.ok) {
                            console.log('heartbeat successful!')
                            setIsBackendAlive(true);
                        } else {
                            console.log('heartbeat failed.. trying again in 5 seconds.')
                            setIsBackendAlive(false);
                        }
                    })
                    .catch(() => setIsBackendAlive(false));
            };

            // Check backend every 5 seconds
            const intervalId = setInterval(checkBackend, 5000);

            // Cleanup interval on component unmount
            return () => clearInterval(intervalId);
        }, []);

        return (

            <div className="sidebar">
                <p>Packet Viewer App</p>
                <div className="connectionTest">
                    {isBackendAlive &&
                        (
                            <>
                                <p>Connected</p>
                                <Switch {...label} disabled defaultChecked/>
                            </>
                        )}
                    {!isBackendAlive && (
                        <>
                            <p>Connecting...</p>
                            <Switch {...label} disabled  />
                        </>
                    )}
                </div>

            </div>
        )
    }

    export default Sidebar;