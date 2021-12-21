import React, { useState } from 'react';
import './addTask.css';
import Button from './button';

const AddTask = ({handleTaskEdition}) => {   
    
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