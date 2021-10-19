import React, {useState} from 'react';
import Button from '../Components/Button';
import Input from '../Components/Input';
import Todo from '../Components/Todo';

const Main = (props) => {

    const [inputValue, setInputValue] = useState('');
    const [todos, setToDos] = useState([]);
    const [updateInputValue, setUpdate] = useState([]);
    const changeInputHandler = (e, index) => {
        const newUpdate = [...updateInputValue];
        newUpdate[index].value = e.target.value;
        setUpdate(newUpdate);
    }
    

    const inputHandler = (e) => {
        setInputValue(e.target.value);
    }

    const addTodo = () => {
        const todo = {
            value: inputValue,
            isUpdate: false,
            isComplete: false
        };
        setToDos( prev => [...prev, todo])
    }

    const addButtonClasses = 'btn btn-success';

    const deleteToDo = (index) => {
        const newToDo = [...todos];
        newToDo.splice(index,1);
        console.log(newToDo);
        setToDos(newToDo);
    }

    const updateToDo = (index) => {
        const newToDo = [...todos];
        const newUpdate = [...updateInputValue];
        newToDo[index].isUpdate = false;
        newToDo[index].value = updateInputValue[index].value;
        const updatedToDo = newUpdate.filter((el) => {
            return el.index !== index;
        });
        setToDos(newToDo);
        setUpdate(updatedToDo);
    }
    const cancelUpdate = (index) => {
        const newToDo = [...todos];
        const newUpdate = [...updateInputValue];
        newToDo[index].isUpdate = false;
        const updatedToDo = newUpdate.filter((el) => {
            return el.index !== index;
        });
        setToDos(newToDo);
        setUpdate(updatedToDo);
    }


    const toggleHandler = (index) => {
        const newToDo = [...todos];
        const updatedToDo = newToDo[index];
        updatedToDo.isUpdate = true;
        setUpdate( prev => [...prev, {value: updatedToDo.value, index: index}] );
        setToDos( newToDo )
    }

    const toggleCompleteHandler = (index) => {
        const newTodos = [...todos];
        newTodos[index].isComplete = !newTodos[index].isComplete;
        setToDos(newTodos)
    }

    return (
        <div className='row justify-content-center align-items-center' style={{height:'100vh'}}>
            <div className='col-md-6 background rounded p-4'>
                <h1 className='header'>To Do App</h1>
                <div className='row justify-content-center align-items-center'>    
                    <div className='col-md-9'>
                        <Input value={inputValue} changed={inputHandler} type='text' placeholder='Please insert a todo...' />
                    </div>
                    <div className='col-md-3'>
                        <Button classes={addButtonClasses} clicked={addTodo} >Submit</Button>
                    </div>
                </div>
                <div className='row justify-content-center align-items-center'>
                    <Todo 
                        toggled={toggleHandler} 
                        updatedValue={updateInputValue} 
                        updateChanged={changeInputHandler} 
                        deleteClicked={deleteToDo} 
                        updateClicked={ updateToDo }
                        todos={todos} 
                        cancelHandler={cancelUpdate}
                        toggleCompleted={toggleCompleteHandler}
                    />
                </div>
            </div>
            
        </div>
    );
}

export default Main;