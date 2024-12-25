import React, {useState, useEffect} from "react"

function EffectHook(){
    const [count, setCount] = useState(0);
    const [color, setColor] = useState("green")

    useEffect(() => {
        document.title = `Count: ${count}${color}`
    }, //Until this point this code would run every time this component is re-render
    //[]) -> This just runs it 1 time, when the component in mount (added to the DOM)
    [count]) //Similiar to the first comment, but in the first comment it would run the code for every reason this component is re-render
    //This last comment would run this code when the component is mounted or the value count is change
    //If we add the color variable the title would change every time the count or the color variable changes

    function addCount(){
        setCount(c => c + 1);
    }

    function minusCount(){
        setCount(c => c - 1);
    }

    function changeColor(){
        setColor(co => co === "green" ? "red" : "green")
    }

    return(<>
        <p style={{color: color}}>Count: {count}</p>
        <button onClick={addCount}>Add</button>
        <button onClick={minusCount}>Subtract</button><br />
        <butto onClick={changeColor}>Change Color</butto>
    </>)
}

export default EffectHook