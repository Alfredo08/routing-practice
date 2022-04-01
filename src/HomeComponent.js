
function HomeComponent( props ){
    console.log( props )
    return(
        <div>
            Hey there {props.match.params.firstName}!
        </div>
    );
}

export default HomeComponent;