import { useState } from 'react';
import Modal from './Modal';
import Backdrop from './Backdrop';

function Todo(props){
    const [modalIsOpen, setModalIsOpen] = useState(false);

    function handlerDelete(){
        setModalIsOpen(true);
    }

    function handlerCancelModal(){
        setModalIsOpen(false);
    }

    return (
        <div className='card'>
            <h2>{props.text}</h2>
            <div className='actions'>
                <button className='btn' onClick={handlerDelete}>Delete</button>
            </div>

            { modalIsOpen && <Modal onConfirm={handlerCancelModal} onCancel={handlerCancelModal}/> }
            { modalIsOpen && <Backdrop onCancel={handlerCancelModal}/> }
        </div>

    );
}

export default Todo;