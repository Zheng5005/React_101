import React, {useState} from "react";

function UpdateObjState(){
    const [car, setCar] = useState({year: 2024,
                                   make: "Ford",
                                   model: "Mustang"}
    );

    function handlerYearChange(e){
        //We use the spread operator (...car) in order to make a copy of all things of the object
        //It'll look something like this: {year: 2024, make: "Ford", model: "Mustang", year: input}
        //It will change only the year key because we can't have duplicate keys, so we use the lastest one
        //setCar({...car, year: e.target.value});
        //Also, for better practice we're using an updater function
        setCar(c => ({...c, year: e.target.value}));
    }

    function handlerMakeChange(e){
        setCar(c => ({...c, make: e.target.value}))
    }

    function handlerModelChange(e){
        setCar(c => ({...c, model: e.target.value}))
    }

    return(
    <div>
        <p>Your favorite car is: {car.year} {car.make} {car.model}</p>

        <input type="number" value={car.year} onChange={handlerYearChange}/><br/>
        <input type="text" value={car.make} onChange={handlerMakeChange}/><br/>
        <input type="text" value={car.model} onChange={handlerModelChange}/><br/>
    </div>
    )
}

export default UpdateObjState