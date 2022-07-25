import React, {useState} from 'react';
import styles from'./assets/scss/Card.scss';
import TaskList from './TaskList';
function Card({card}) {
    const {title, description, tasks,status} = card;
    const [showDetail, setShowDetail] = useState(false);
    const styleSideColor = {
        position: 'absolute',
                zIndex: -1,
                top: 0,
                left: 0,
                height: 100,
                width: 4,
                backgroundColor: status === 'ToDo' ? '#bd8D31' : (status === 'ToDo' ? '#3a7e28' : '#222')
    }
    const onClickshowDetail = e => {setShowDetail(showDetail => !showDetail)}
    // console.log(showDetail);
    return (
        <div className={styles.Card}>
            <div style={styleSideColor} />
            <div className={showDetail ? [styles.Card__Title,styles.Card__Title__Open].join(" ") : styles.Card__Title}
                onClick = {onClickshowDetail}>{title}</div>
            
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