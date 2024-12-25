// Single selection
// Multiple selection

import { useState } from "react";
import data from "./data";
import "./style.css";

function Accordion() {
  const [selected, setSelected] = useState(null);
  const [enableMultipleSelection, setEnableMultipleSelection] = useState(false);
  const [multiple, setMultiple] = useState([]);

  function handleSingleSelection(getCurrentId) {
    setSelected((s) => (s = getCurrentId === selected ? null : getCurrentId));
  }

  function handleMultipleSelection(getCurrentId) {
    let copyMultiple = [...multiple];
    const findIndexOfCurrentId = copyMultiple.indexOf(getCurrentId);

    if (findIndexOfCurrentId === -1) copyMultiple.push(getCurrentId);
    else copyMultiple.splice(findIndexOfCurrentId, 1);

    setMultiple((m) => (m = copyMultiple));
  }

  function handleChangeSelection(){
    setEnableMultipleSelection(!enableMultipleSelection)

    setSelected(s => null)
    setMultiple(m => [])
  }

  return (
    <>
      <div className="wrapper">
        <button
          onClick={handleChangeSelection}
        >
          Enable multiple selection
        </button>

        <div className="accordian">
          {data && data.length > 0 ? (
            data.map((dataItem) => (
              <div className="item">
                <div
                  className="tittle"
                  onClick={
                    enableMultipleSelection
                    ? () => handleMultipleSelection(dataItem.id)
                    : () => handleSingleSelection(dataItem.id)
                  }
                >
                  <h3>{dataItem.question}</h3>
                  <span>+</span>
                </div>
                {
                    selected === dataItem.id || multiple.indexOf(dataItem.id) !== -1 
                    ? (<div className="content">{dataItem.answer}</div>) 
                    : null
                }
              </div>
            ))
          ) : (
            <div>No data found</div>
          )}
        </div>
      </div>
    </>
  );
}

export default Accordion;
