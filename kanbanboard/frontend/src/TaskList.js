import React from 'react';
import styles from'./assets/css/styles.css';
import Task from './Task';
function TaskList({tasks}) {
    
    return (
        <div className={styles.TaskList}>
              <ul>
                {tasks.map((task) => <Task 
                    key ={task.no}
                    task = {task}/>)}
                <input
                    type='text'
                    className={styles.TaskList__add_task}
                    placeholder='태스크 추가'/>
              </ul>
            </div>
    );
}

export default TaskList;