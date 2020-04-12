import React, {useState} from 'react';
import Input from './Input';
import Filter from './Filter';
import styles from './Wrapper.module.css';

const Wrapper = ({items}) => {
    const [filter, setFilter] = useState('');
    return(
        <div>
            <Input
                filter={filter}
                setFilter={setFilter}
            />
            <div className={styles.block}>
                <Filter 
                    filter={filter}
                    items={items.filter(item => item.indexOf(filter) > -1)}
                />
            </div>
        </div>
    )
}

export default Wrapper;
