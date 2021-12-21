import P from 'prop-types';

import React from "react";
import Task from "./task";

const Tasks = ({ tasks, handleTaskClick, handleTaskDeletion }) => {
 return <>
    {tasks.map(task => <Task key={task.id} task={task} handleTaskClick={handleTaskClick} handleTaskDeletion={handleTaskDeletion} />)}
 </>
}
export default Tasks;

Tasks.propTypes = {
  tasks: P.object,
  handleTaskClick: P.func,
  handleTaskDeletion: P.func
}
