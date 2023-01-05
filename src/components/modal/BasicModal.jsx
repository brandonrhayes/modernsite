import React from 'react'
import { useState } from 'react'
import './modal.css'
//import Modal from '@mui/material/Modal';

export default function BasicModal() {
  const [open, setOpen] = useState(false);
  const handleClose = () => setOpen(false);

  return (
    <div>

    </div>
    //   <Modal
    //     open={open}
    //     onClose={handleClose}
    //     aria-labelledby="modal-modal-title"
    //     aria-describedby="modal-modal-description"
    //   >
    //     <h1>testing</h1>
    //   </Modal>
    // </div>
  );
}



