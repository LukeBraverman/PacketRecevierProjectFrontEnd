import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';


function LogCard()
{


    return(
        <Card sx={{ minWidth: 275, minHeight: 220   }}>
            <CardContent>
                <Typography gutterBottom sx={{ color: 'text.secondary', fontSize: 14 }}>
                    14/01/2025 - 16.39pm
                </Typography>
                <Typography variant="h5" component="div">
                    📦 Packet Received!
                </Typography>
                <Typography variant="body2">
                    🔹 Data Received: Hello, UDP!
                </Typography>
                <Typography variant="body2">
                    🔹 Sender IP: /192.168.1.253
                </Typography>
                <Typography variant="body2">
                    🔹 Sender Port: 60274
                </Typography>
                <Typography variant="body2">
                    🔹 Buffer Size: 1024 bytes
                </Typography>
                <Typography variant="body2">
                    🔹 Packet Length: 11 bytes
                </Typography>
            </CardContent>

        </Card>

    )
}

export default LogCard;