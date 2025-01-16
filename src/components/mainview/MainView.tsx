import './MainView.css'
import Logcard from "../logcard/Logcard.tsx";
import {useEffect, useState} from "react";
import {PacketLog} from "../../PacketLog.model.ts";

function MainView()
{

    const SERVER_IP: string = '127.0.0.1';
    const [logs, setLogs] = useState<PacketLog[]>([]);  // State to store logs

    useEffect(() => {
        const returnLogs = () => {
            console.log('sending heartbeat!');
            fetch(`http://${SERVER_IP}:8080/logs`)  // Fixed backticks for template literal
                .then(response => response.json())  // Parse response as JSON
                .then((data: PacketLog[]) => {      // Type response as PacketLog[]
                    console.log('Logs received:', data);
                    setLogs(data);  // Update state with logs
                })
                .catch((error) => {
                    console.error('Error fetching logs:', error);
                });
        };


        // Check backend every 5 seconds
        const intervalId = setInterval(returnLogs, 5000);

        // Cleanup interval on component unmount
        return () => clearInterval(intervalId);
    });

    return (
        <div className="mainView">
            {logs.length > 0 ? (
                logs.map((log, index) => (
                    <Logcard
                        key={index}
                        data={log.data}
                        senderIp={log.senderIp}
                        packetLength={log.packetLength}
                        bufferSize={log.bufferSize}
                        senderPort={log.senderPort}
                        date={log.date}
                        time={log.time}
                    />
                ))
            ) : (
                <p>No logs available.</p>
            )}
        </div>
    )
}

export default MainView;