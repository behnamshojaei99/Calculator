import React from 'react';
import Button from '../Components/Button';
import Input from '../Components/Input';

const Main = (props) => {
    return (
        <div className='row justify-content-center align-items-center' style={{height:'100vh'}}>
            <div className='col-md-6 background rounded p-4'>
                <h1 className='header'>To Do App</h1>
                <div className='row justify-content-center align-items-center'>    
                    <div className='col-md-9'>
                        <Input type='text' placeholder='Please insert a todo...' />
                    </div>
                    <div className='col-md-3'>
                        <Button>Submit</Button>
                    </div>
                </div>
            </div>
            
        </div>
    );
}

export default Main;