import React, { useState, useEffect } from "react";

const useWindowWidth = () => {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    const handleResize = () => {
    setWindowWidth(window.innerWidth);
  }
   useEffect(() => {
    console.log("window width");
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    }
  }, [windowWidth]);
  return windowWidth;
}

export default useWindowWidth;