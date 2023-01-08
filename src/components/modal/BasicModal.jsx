import React from 'react'
import './modal.css'

export default function BasicModal(props) {

  const HEADER = props.header;
  const CONTENT = props.content;
  const BUTTON_TEXT = props.buttonText;
  const handleClose = props.handleClose;

  return (
    <div className='modal__background'>
      <div className='modal__container'>
        <div className='modal__close'>
          <button className='btn' onClick ={() => handleClose(false)}>X</button>
        </div>
        <div className='modal__title'>
          <h1>{HEADER}</h1>
        </div>
        <div className="modal__body">
          <p>{CONTENT}</p>
        </div>
        <div className="modal__footer">
          <button className='btn btn-primary' onClick ={() => handleClose(false)}>{BUTTON_TEXT}</button>
        </div>
      </div>
    </div>
  );
}