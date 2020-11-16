import { useState } from "react";

const useKickOut = () => {
  const [kickedOut, setKickedOut] = useState(false);

  const inhabit = () => {
    setKickedOut(false);
  }

  const kickOut = () => {
    setKickedOut(true);
  }

  return [kickedOut, kickOut, inhabit];
};

export default useKickOut;