import { useState, useEffect } from "react";

const useCounter = (forwards = true) => { // setting a default value to the argument makes it optional
    const [counter, setCounter] = useState(0);

    useEffect(() => {
      const interval = setInterval(() => {
        if (forwards) {
            setCounter((prevCounter) => prevCounter + 1);
        } else {
            setCounter((prevCounter) => prevCounter - 1);
        }
      }, 1000);
  
      return () => clearInterval(interval);
    }, [forwards]);

    return counter; // making counter available whenever we call this custom hook
}

export default useCounter;