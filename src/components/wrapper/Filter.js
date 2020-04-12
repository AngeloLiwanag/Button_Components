import React from 'react';
import styles from './Wrapper.module.css';

const Filter = ({filter, items}) => items
    .map((item, i) => {
        const start = item.indexOf(filter);
        const end = start + filter.length;

        return(
            <p className={styles.filterWords} key={i}>
                {item.slice(0, start)}
                <b class={styles.primary}>{item.slice(start, end)}</b>
                {item.slice(end)}
            </p>
        )
    })


export default Filter;