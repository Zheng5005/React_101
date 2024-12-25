import React, {useState} from "react";

function ChangeEvent(){
    const [name, setName] = useState("");
    const [quantity, setQuantity] = useState(1);
    const [payment, setPayment] = useState("");

    function handleNameChange(event){
        setName(event.target.value);
    }

    function handleQuantityChange(event){
        setQuantity(event.target.value)
    }

    function handlePaymentChange(event){
        setPayment(event.target.value);
    }

    return(<div>
        <input type="text" value={name} onChange={handleNameChange}/>
        <p>Name: {name}</p>

        <input type="number" value={quantity} onChange={handleQuantityChange}></input>
        <p>Quantity: {quantity}</p>

        <select value={payment} onChange={handlePaymentChange}>
            <option value="">Select an option</option>
            <option value="Visa">Visa</option>
            <option value="Mastercard">Mastercard</option>
            <option value="Gift Card">Gift Card</option>
        </select>
        <p>Payment: {payment}</p>
    </div>);
}

export default ChangeEvent