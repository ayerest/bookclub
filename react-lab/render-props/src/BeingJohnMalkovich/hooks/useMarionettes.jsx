import { useState } from "react";
// TODO: need to set up functionality still..
const useMarionette = () => {
  const [marionette, setMarionette] = useState('');

  const lookInTheMarionette = () => {
    setMarionette((prevstate => !prevstate));
  }

  return [marionette, lookInTheMarionette];
};

export default useMarionette;