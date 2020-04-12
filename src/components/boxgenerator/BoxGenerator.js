import React, {useState} from 'react';
import Color from './Color';
import Box from './Box';
import styles from './BoxGenerator.module.css';

const BoxGenerator = ({props}) => {
    const [color, setColor] = useState({
        color: ''
    });
    const [box, setBox] = useState([])

    return (
        <div>
            <Color 
                color={color} 
                setColor={setColor}
                setBox={setBox}
            />
            <div className={styles.flex}>
                {box.map((box, i) => (
                    <Box key={i} box={box.color}/>
                    )
                )}
            </div>
        </div>
    )
}

export default BoxGenerator;