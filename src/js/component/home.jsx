import React, { useState,useEffect } from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const SecondsCounter = () => {
	const [count, setCount] = useState(0);
 
    useEffect(() => {
        const interval = setInterval(() => {
            setCount(count + 1);
			if(count % 10 === 0 && count !== 0) alert(`${count} seconds passed`)
        }, 1000);
        return () => clearInterval(interval);
    }, [count]);
	return (
		<div className="text-center">
			<h1>{count}</h1>
		</div>
	);
};

export default SecondsCounter;
