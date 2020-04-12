import React from 'react';
import styles from './Lesson.module.css';

const Lesson = props => {

    const {lesson, topic, children} = props;
    return(
        <div className={styles.lessonHeight}>
            <h1 className={styles.lessonColor}>React Lesson #{lesson}</h1>
            <p>- Understanding {topic} -</p>
            {children}
        </div>
    );
}

export default Lesson;