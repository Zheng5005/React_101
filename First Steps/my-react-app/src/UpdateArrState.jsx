import React, {useState} from "react";

function UpdateArrState(){
    const [foods, setFoods] = useState(["Apple", "Orange", "Banana"]);

    function handleAddFood(){
        const newFood = document.getElementById("foodInput").value;
        document.getElementById("foodInput").value = "";
        
        setFoods(f => [...f, newFood]);
    }

    function handleRemoveFood(index){
        //filter function returns an element and a index of that element
        //the underscore (_) means that variable is ignore
        setFoods(foods.filter((_, i) => i !== index));
    }

    return(<div>
        <h2>List of foods</h2>
        <ul>
            {foods.map((food, index) => <li key={index} onClick={() => handleRemoveFood(index)}>
                                            {food}
                                        </li>)}
        </ul>

        <input type="text" id="foodInput" placeholder="Enter food name"></input>
        <button onClick={handleAddFood}>Add food</button>
    </div>)
}

export default UpdateArrState