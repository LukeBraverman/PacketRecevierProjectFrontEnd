import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

// Define the props interface matching the PacketLog model
interface LogCardProps {
    data: string;
    senderIp: string;
    senderPort: number;
    bufferSize: number;
    packetLength: number;
    date: string;
    time: string;
}

function LogCard({
                     data,
                     senderIp,
                     senderPort,
                     bufferSize,
                     packetLength,
                     date,
                     time
                 }: LogCardProps) {
    return (
        <Card sx={{ minWidth: 275, minHeight: 220, marginBottom: 2 }}>
            <CardContent>
                {/* Date and Time */}
                <Typography gutterBottom sx={{ color: 'text.secondary', fontSize: 14 }}>
                    {date} - {time}
                </Typography>

                {/* Header */}
                <Typography variant="h5" component="div">
                    📦 Packet Received!
                </Typography>

                {/* Packet Details */}
                <Typography variant="body2">
                    🔹 Data Received: {data}
                </Typography>
                <Typography variant="body2">
                    🔹 Sender IP: /{senderIp}
                </Typography>
                <Typography variant="body2">
                    🔹 Sender Port: {senderPort}
                </Typography>
                <Typography variant="body2">
                    🔹 Buffer Size: {bufferSize} bytes
                </Typography>
                <Typography variant="body2">
                    🔹 Packet Length: {packetLength} bytes
                </Typography>
            </CardContent>
        </Card>
    );
}

export default LogCard;
