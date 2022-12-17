import React, { useState, useEffect } from "react";

const Jo = () => {
  const [x, setX] = useState(null);
    useEffect(() => {
    //   
    setX(() => 7);
      console.log(x);
      
  }, []);
    

    return <div>Jo { x}</div>;
};

export default Jo;
