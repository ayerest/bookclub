import { useState } from "react";

const useMirror = () => {
  const [mirror, setMirror] = useState('');

  const lookInTheMirror = () => {
    setMirror((prevstate => !prevstate));
  }

  return [mirror, lookInTheMirror];
};

export default useMirror;