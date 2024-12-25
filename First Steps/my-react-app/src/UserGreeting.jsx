function UserGreeting(props){
    if(props.isLoggedIn){
        // This can be store in a const for better readbility
        return(
            <h2>Welcome {props.username}</h2>
        );
    } else{
        return <h2>Please Log In</h2>
    }

    // return(props.isLoggedIn ? <h2>Welocome {props.username}</h2> : <h2>Please Log in</h2>)
}

export default UserGreeting