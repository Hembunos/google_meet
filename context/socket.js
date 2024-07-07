import { createContext, useEffect, useState, useContext } from "react";
import { io } from "socket.io-client";
//same domain but different port - monolith
const SocketContext = createContext(null);

export const useSocket = () => {
  const socket = useContext(SocketContext);
  return socket;
}

export const SocketProvider = (props) => {
  const [socket, setSocket] = useState(null);
  const { children } = props;

  //make connection with socket
  useEffect(() => {
    const connection = io();
    console.log("socket connection", connection);
    setSocket(connection);
  }, []);

  socket?.on('connect_error', async (err) => {
    console.log("Error establishing socket", err)
    await fetch('/api/socket');
  })
  
  return (
    <SocketContext.Provider value={socket}>
      {children}
    </SocketContext.Provider>
  )
};