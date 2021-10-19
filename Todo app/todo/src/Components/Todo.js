import React, { useState } from "react";
import Button from "./Button";
import Input from "./Input";

const Todo = ({todos, updateClicked, deleteClicked, toggled, updatedValue, updateChanged, cancelHandler, toggleCompleted}) => {

    const trashClasses = 'btn icon trash';
    const penClasses = 'btn icon pen';
    const textClasses = 'todo__text';
    const successBtnClasses = 'btn success icon ';
    const listItemClasses = 'list-item rounded'
    const complete = 'complete';
    return (
        <ul className='list'>
            {todos.map((todo, index) => (
                <li key={index} className={'list-item rounded'} style={todo.isComplete ? {border: '5px solid rgb(14, 170, 14)'} : {border: '5px solid rgb(240, 48, 26)'}}>
                    <div className='row justify-content-between align-items-center'>
                        <div className='col-md-8'>
                            {todo.isUpdate ? ( <Input value={updatedValue[index].value} placeholder={todo.value} type='text' changed={(e) => updateChanged(e, index)} /> ) : ( <span className={todo.isComplete ? textClasses + ' ' + complete : textClasses}>{todo.value}</span> )}
                        </div>
                        <div className='col-md-4'>
                            {todo.isUpdate ? 
                                (
                                <>
                                    <Button classes={successBtnClasses} clicked={() => updateClicked(index)} ><i className="fas fa-check-circle"></i></Button>
                                    <Button classes={trashClasses} clicked={() => cancelHandler(index)} ><i className="fas fa-times-circle"></i></Button>
                                </>
                                ) : (
                                <>
                                    <Button clicked={() => toggleCompleted(index)} classes={successBtnClasses}><i className="fas fa-check-double"></i></Button>
                                    <Button clicked={() => toggled(index)} classes={penClasses}><i className="fas fa-pen"></i></Button>
                                    <Button clicked={() => deleteClicked(index)} classes={trashClasses}><i className="fas fa-trash-alt"></i></Button>
                                </>
                                )
                            }
                            
                        </div>
                    </div>
                </li>
            ))}
        </ul>
        
    );
}

export default Todo;