import React from 'react';
import { useParams, useHistory } from 'react-router-dom';

import Button from './button';

import './taskDetails.css'

 const TaskDetails = () => {

    const params = useParams();
    const history = useHistory();

    const handleReturnToInitialPage = () => {
        history.goBack();
    };

     return ( 
         <>
         <div className="back-button-container">
             <Button onClick={handleReturnToInitialPage}>Voltar</Button>
         </div>
         <div className="task-details-container">
             <h2>{params.taskTitle}</h2>
             <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et nesciunt itaque ipsum delectus eaque officia!</p>
         </div>
         </>
      );
 }
  
 export default TaskDetails;