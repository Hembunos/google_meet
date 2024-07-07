// import { useSocket } from "@/context/socket";
// import usePeer from "@/hooks/usePeer";
// import { useEffect } from "react";
import { v4 as uuidv4 } from 'uuid';
import { useRouter } from 'next/router';
import styles from '@/styles/home.module.css'
import { useState } from 'react';

export default function Home() {

  // const socket = useSocket()
  // usePeer()


  // useEffect(() => {
  //   socket?.on("connect", () => {
  //     console.log(socket.id);
  //   });
  // },[socket])

  const router = useRouter()
  const [roomId, setRoomId] = useState('')

  const createAndJoin = () => {

    const roomId = uuidv4()
    router.push(`/${roomId}`)
  }

  const joinRoom = () => {
    if (roomId) router.push(`/${roomId}`)
    else {
    alert("Pleaase Enter Valid Room ID")}
  }

  return (
    <div className={styles.homeContainer}>
      <h1>Google Meet Clone</h1>
      <div className={styles.enterRoom}>
        <input placeholder='Enter Room ID' value={roomId} />
        <button onClick={joinRoom}>Join Room</button>
        <sapn className={styles.separatorText}>-----------------OR------------------</sapn>
        <button onClick={createAndJoin}>Create a new room</button>

      </div>
    </div>
  )
}
