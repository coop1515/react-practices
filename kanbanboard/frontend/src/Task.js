import React, {useState} from 'react';
import styles from'./assets/css/Task.css';

function Task({task}) {
    const [checkbox, setcheckbox] = useState(false);
    const onChangeCheckbox = e => {setcheckbox(checkbox=>!checkbox)}
    return (
        <div>
            <li className={styles.TaskList__Task}>
                  <input type='checkbox' checked={checkbox} onChange={onChangeCheckbox} />
                  {task.name}
                  <a href='#' className={styles.TaskList__Task__remove}></a>
            </li> 
        </div>
    );
}

export default Task;