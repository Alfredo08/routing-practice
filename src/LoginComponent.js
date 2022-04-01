
function LoginComponent( props ){
    console.log( props );
    
    const goToHome = () => {
        props.history.push( "/" );
    }

    return(
        <div>
            <button onClick={goToHome}>
                Take me to home
            </button>
        </div>
    );
}

export default LoginComponent;