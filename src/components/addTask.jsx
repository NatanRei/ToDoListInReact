import React, { useState } from 'react';
import P from 'prop-types';
import './addTask.css';
import Button from './button';

const AddTask = ({ handleTaskEdition }) => {

    const [inputData, setInputData] = useState('');

    const handleInputData = (e) => {
        setInputData(e.target.value)
    };

    const handleAddTaskClick = () => {
        handleTaskEdition(inputData);
        setInputData('');
    }


    return (
<div className='add-task-container'>
    <input
        onChange={handleInputData}
        value={inputData}
        className='add-task-input'
        type="text" />
    <div className="button-container">
    <Button onClick={handleAddTaskClick}>Adicionar</Button>
    </div>
</div>
     );
}

export default AddTask;

AddTask.propTypes = {
  handleTaskEdition: P.func
}
