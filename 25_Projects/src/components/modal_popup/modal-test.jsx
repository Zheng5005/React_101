import { useRef, useState } from "react";
import ModalPopup from "./ModalPopup";
import useOnClickOutside from "../CustomHooks/useOnClickOutside";

function ModalTest() {
  const [showModalPopup, setShowModalPopup] = useState(false)
  
  const ref = useRef()
  useOnClickOutside(ref, () => setShowModalPopup(false))

  function handleToggleModalPopup() {
    setShowModalPopup(!showModalPopup);
  }

  function onClose(){
    setShowModalPopup(false);
  }

  return (
    <div>
      <button onClick={handleToggleModalPopup}>Open Modal Popup</button>
      <div ref={ref}>
        {showModalPopup && <ModalPopup 
        id={"custom-id"}
        header={<h1>Custom Header</h1>}
        footer={<h1>Custom Footer</h1>}
        onClose={onClose}
        body={<div>Custom Body</div>}
        />}
      </div>
    </div>
  );
}

export default ModalTest;
