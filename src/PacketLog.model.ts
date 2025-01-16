export interface PacketLog {
    data: string;        // Packet data content
    senderIp: number;    // Sender's IP address
    packetLength: number; // Length of the packet in bytes
    bufferSize: number;   // Size of the buffer used
    senderPort: number;   // Sender's port number
    date: string;         // Date when the packet was received (formatted as dd/MM/yyyy)
    time: string;         // Time when the packet was received (formatted as h:mm a)
}
