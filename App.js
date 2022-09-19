import React, { useState } from 'react';
import ModalDialog from './component/ModalDialog';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import {Usestate} from 'react'

function App() {
  const [openModal,setOpenModal]= useState(false)
  return (
<div class="App"> <div className="container mt-3">
      <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal" onClick={()=>{setOpenModal(true);}}>
       Launch demo modal
      </button>
    </div>    </div>
  )
}
export default App