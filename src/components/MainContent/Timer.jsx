import React, { useEffect, useState } from "react";

const Timer = () => {
  const [timer, setTimer] = useState(0);

  useEffect(() => {
    if (timer >= 60) return;
    const id = setInterval(() => {
      setTimer(() => timer + 1);
    }, 1000);
    return () => {
      clearInterval(id);
    };
  }, [timer]);

  console.log(timer);

  return <h1>Timer: {timer}</h1>;
};

export default Timer;
