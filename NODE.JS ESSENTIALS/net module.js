import net from 'net';

// Create your TCP server here
export const server = net.createServer((socket) => {
    console.log('Client connected');
    socket.write('Hello Net!'); // Send a message to the client

    socket.on('end', () => {
        console.log('Client disconnected');
    });
});

// Listen to desired port
server.listen(1337, () => {
    console.log('Server listening on 1337');
});

// Handle incoming connections and data
