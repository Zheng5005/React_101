function Button(){
    const handleClick = () => console.log("OUCH")

    let count = 0;

    const handleClick2 = (name) => {
        if(count < 3){
            count++;
            console.log(`${name} Why?`)
        } else{
            console.log(`${name} STOP!!`)
        }
    }

    const DoubleClick = (event) => {
        event.target.textContent = "NOoOoO 😭"
    }

    return(
        <button onDoubleClick={() => DoubleClick(e)} onClick={() => handleClick2("Zheng")} className="button">Click me</button>
    );
}

export default Button