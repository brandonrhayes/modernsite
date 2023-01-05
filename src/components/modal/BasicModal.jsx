import React from 'react'
import { useState } from 'react'
import './modal.css'
//import Modal from '@mui/material/Modal';

export default function BasicModal() {
  const [open, setOpen] = useState(false);
  const handleClose = () => setOpen(false);

  return (
    <div></div>
    // <Modal> 
    //   <h5>test</h5>
    // </Modal>
  );
}



