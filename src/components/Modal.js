function Modal(props){
    function handlerCancel(){
        props.onCancel();
    }

    function handlerConfirm(){
        props.onConfirm();
    }

    return(
        <div className='modal'>
            <p>Are you sure?</p>
            <button className='btn btn--alt' onClick={handlerCancel}>Cancel</button>
            <button className='btn' onClick={handlerConfirm}>Confirm</button>
        </div>
    );
}

export default Modal;