import React, {useState} from 'react';
import styles from'./assets/scss/Card.scss';
import TaskList from './TaskList';
function Card({card}) {
    const {title, description, tasks} = card;
    const [showDetail, setShowDetail] = useState(false);

    const onChangeshowDetail = e => {setShowDetail(showDetail => !showDetail)}
    console.log(showDetail);
    return (
        <div className={styles.Card}>
            <div className={styles.Card__Title}
                onClick = {onChangeshowDetail}>{title}</div>
            
            {showDetail ? 
            <div className={styles.Card__Details}>
            {description}
            <TaskList tasks = {tasks}/>
            </div>: null
            }
        </div>
    );
}

export default Card