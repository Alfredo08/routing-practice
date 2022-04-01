
function RegisterComponent( props ){
    return(
        <form onSubmit={props.registerUser}>
            <div>   
                <label htmlFor="userName">
                    Username:
                </label>
                <input type="text" id="userName" /> 
            </div>
            <div>   
                <label htmlFor="password">
                    Password:
                </label>
                <input type="password" id="password" />
            </div>
            <button type="submit">
                Register
            </button>
        </form>
    );
}

export default RegisterComponent;