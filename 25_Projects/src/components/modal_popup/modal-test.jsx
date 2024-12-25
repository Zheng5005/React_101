import { useState } from "react";
import ModalPopup from "./ModalPopup";

function ModalTest() {
  const [showModalPopup, setShowModalPopup] = useState(false)

  function handleToggleModalPopup() {
    setShowModalPopup(!showModalPopup);
  }

  function onClose(){
    setShowModalPopup(false);
  }

  return (
    <div>
      <button onClick={handleToggleModalPopup}>Open Modal Popup</button>
      {showModalPopup && <ModalPopup 
      id={"custom-id"}
      header={<h1>Custom Header</h1>}
      footer={<h1>Custom Footer</h1>}
      onClose={onClose}
      body={<div>Custom Body</div>} 
      />}
    </div>
  );
}

export default ModalTest;
