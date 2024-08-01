import "@/styles/globals.css";

import { SocketProvider } from "@/context/socket";
import { Analytics } from "@vercel/analytics/react"

export default function App({ Component, pageProps }) {
  return (
    <SocketProvider>
      <Component {...pageProps} />
      <Analytics />
    </SocketProvider>
  );
}
