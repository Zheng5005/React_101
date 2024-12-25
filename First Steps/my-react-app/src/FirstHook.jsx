import React, {useState} from "react"

function FirstHook(){
    const [name, setName] = useState("Guest");
    const [age, setAge] = useState(18);
    const [isEmployed, setIsEmployed] = useState(true);

    const updateName = () => {
        setName("Zheng");
    }

    const incrementAge = () => {
        setAge(age + 1);
    }

    const DecreaseAge = () => {
        setAge(age - 1);
    }

    const Employed = () => {
        setIsEmployed(!isEmployed)
    }

    return(
        <div>
            <p>Name: {name}</p>
            <button onClick={updateName}>Set Name</button>

            <p onClick={DecreaseAge}>Age: {age}</p>
            <button onClick={incrementAge}>Increment Age</button>

            <p>Is Employed: {isEmployed ? "Yes" : "No"}</p>
            <button onClick={Employed}>Toggle</button>
        </div>
    );
}

export default FirstHook