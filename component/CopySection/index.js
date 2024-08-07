// import { CopyToClipboard } from "react-copy-to-clipboard";
// import { Copy } from "lucide-react";

// import styles from "@/component/CopySection/index.module.css";

// const CopySection = (props) => {
//   const { roomId } = props;

//   return (
//     <div className={styles.copyContainer}>
//       <div className={styles.copyHeading}>Copy Room ID:</div>
//       <hr />
//       <div className={styles.copyDescription}>
//         <span>{roomId}</span>
//         <CopyToClipboard text={roomId}>
//           <Copy className="ml-3 cursor-pointer" />
//         </CopyToClipboard>
//       </div>
//     </div>
//   );
// };

// export default CopySection;

import { CopyToClipboard } from "react-copy-to-clipboard";
import { Copy } from "lucide-react";

import styles from "@/component/CopySection/index.module.css";
import { useState } from "react";

const CopySection = (props) => {
  const { roomId } = props;
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    setCopied(true);
    setTimeout(() => setCopied(false), 2000); // Hide the message after 2 seconds
  };

  return (
    <div className={styles.copyContainer}>
      <div className={styles.copyHeading}>Copy Room ID:</div>
      <hr />
      <div className={styles.copyDescription}>
        <span>{roomId}</span>
        <CopyToClipboard text={roomId} onCopy={handleCopy}>
          <Copy className="ml-3 cursor-pointer" />
        </CopyToClipboard>
      </div>
      {copied && <div className={styles.copiedPopup}>Copied!</div>}
    </div>
  );
};

export default CopySection;