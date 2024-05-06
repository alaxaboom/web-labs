import React, { useState, useEffect } from 'react';

const Svetofor = () => {
    const [color, setColor] = useState('red');

    useEffect(() => {
        const colorList = ['red', 'yellow', 'green'];
        let count = 0;

        const interval = setInterval(() => {
            setColor(colorList[count]);
            count = (count + 1) % colorList.length;
        }, 2000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="traffic-light">
            <div className={`light ${color === 'red' ? 'red' : ''}`}></div>
            <div className={`light ${color === 'yellow' ? 'yellow' : ''}`}></div>
            <div className={`light ${color === 'green' ? 'green' : ''}`}></div>
        </div>
    );
}

export default Svetofor;