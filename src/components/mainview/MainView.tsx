import './MainView.css'
import Logcard from "../logcard/Logcard.tsx";
import {useEffect} from "react";

function MainView()
{

    const SERVER_IP: string = '127.0.0.1';

    useEffect(() => {
        const returnLogs = () => {
            console.log('sending heartbeat!')
            fetch(`http://${SERVER_IP}:8080/logs`)
                .then(response => {
                    console.log('logs found', response);
                })
                .catch(() => {});
        };

        // Check backend every 5 seconds
        const intervalId = setInterval(returnLogs, 5000);

        // Cleanup interval on component unmount
        return () => clearInterval(intervalId);
    });

    return (

        <div className="mainView">
            <Logcard />
            <Logcard />
            <Logcard />
            <Logcard />
            <Logcard />
        </div>
    )
}

export default MainView;