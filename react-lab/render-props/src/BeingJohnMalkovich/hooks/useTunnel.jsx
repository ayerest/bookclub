import { useState, useEffect } from "react";

const useTunnel = () => {
  const [kickedOut, setKickedOut] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setKickedOut(true);
    }, 2000)
  }, [])

  const inhabit = () => {
    setKickedOut(false);
  }

  const kickOut = () => {
    setKickedOut(true);
  }

  return [kickedOut, kickOut, inhabit];
};

export default useTunnel;