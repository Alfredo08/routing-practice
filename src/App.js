import React from 'react';
import './App.css';
import {Route, Link} from 'react-router-dom';
import LoginComponent from './LoginComponent';
import RegisterComponent from './RegisterComponent';
import HomeComponent from './HomeComponent';


/*
function AppHook(){
  const [users, setUsers] = useState( [] );
  const [instructor, setInstructor] = useState( {} );

  setUsers( [...users, newUser ] )
  this.setState({
    users : [...this.state.users, newUser]
  });
}
*/
class App extends React.Component{
  constructor( props ){
    super( props );
    this.state = {
      users : [],
      instructor : {}
    }
  }

  registerUser = ( event ) => {
    event.preventDefault();
    const newUser = {
      userName : event.target.userName.value,
      password : event.target.password.value
    };

    this.setState({
      users : [...this.state.users, newUser]
    });
  }

  render(){
    return(
      <div className="App">
        <h1>
          Welcome to the routing practice
        </h1>
        <ul>
          <li>
            <Link to="/">
              Home
            </Link>
          </li>
          <li>
            <Link to="/login">
              Login
            </Link>
          </li>
          <li>
            <Link to="/register">
              Register
            </Link>
          </li>
        </ul>
        <Route path="/login" render={ (routeProps) => <LoginComponent {...routeProps}/> }/>
        <Route path="/register" render={ () => <RegisterComponent registerUser={this.registerUser} /> }/>
        <Route exact path="/name/:firstName/:lastName" render={ (routeProps) => <HomeComponent {...routeProps} />}/>
      </div>
    )
  }
}
export default App;
